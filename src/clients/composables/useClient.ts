import {computed, ref, watch} from "vue";
import type {Client} from "@/clients/interfaces/Client";
import {useMutation, useQuery} from "@tanstack/vue-query";
import clientsApi from "@/api/clientsApi";

const getClient = async (id:number):Promise<Client> => {
    //await new Promise(resolve => {
    //    setTimeout(()=> resolve(true), 1500)
    //});
    const { data } = await clientsApi.get(`/clients/${id}`);
    return data;
}

const updateClient = async(client: Client):Promise<Client> =>{
    // await new Promise(resolve => {
    //     setTimeout(()=> resolve(true), 1500)
    // });
    //const {id, ...rest}=client;  // desestructuramos el id y el resto de los valores por separado
    const {data} = await  clientsApi.patch(`/clients/${client.id}`, client);
    // const queries = queryClient.getQueryCache().clear(); // limpia toda la cache
    // const queries = queryClient.getQueryCache().findAll(['clients?page='],{exact:false});
    // queries.forEach(query => query.reset()); // al entrar en las páginas las carga nuevamente
    // queries.forEach(query => query.fetch()); // carga desde el back la data nuevamente
    return data
}
// useQuery es solo para traer data en forma de get

const useClient = (id:number) => {
    const client = ref<Client>();

    // useQuery es solo para traer data en forma de get
    const clientMutation =useMutation(updateClient,{
        /* onSuccess(data){   // es una forma valida si quisiera hacer algo como reemplazar la data en cache
             console.log(data)
         },*/
    });
    const { isLoading, data, isError} = useQuery(
        ['client',id],
        ()=> getClient(id),
        {
            retry:false,
            //retryDelay: 3000, // me permite asignar cada cuantos sg quiero que vuelva a intentar en caso de error

        }
    );

    watch(data, () =>{
        if(data)
            client.value = {...data.value};
    },{immediate:true})
    return {
        isLoading,
        client ,
        isError,
        clientMutation,

        // method
        updateClient: clientMutation.mutate,
        isUpdating: computed(()=> clientMutation.isLoading.value),
        isUpdatingSuccess: computed(()=> clientMutation.isSuccess.value),
        isErrorUpdating: computed(()=> clientMutation.isError.value),
    }
}

export default useClient;
