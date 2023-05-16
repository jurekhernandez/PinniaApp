import clientsApi from "@/api/clientsApi";
import {Client} from "@/clients/interfaces/Client";
import {useQuery} from "@tanstack/vue-query";
import {watch} from "vue";
import {useClientsStore} from "@/store/useClientsStore";
import {storeToRefs} from "pinia";

const getClients = async(page:number):Promise<Client[]> =>{
   /* await new Promise(resolve => {
        setTimeout(()=> resolve(true), 1500)
    });*/
    const {data} = await  clientsApi.get<Client[]>(`/clients?_page=${page}`);
    return data;
}
const useClientsComposable = ()=>{
    const store=useClientsStore();
    const { currentPage, clients, totalPages } = storeToRefs( store );

    const { isLoading, data } = useQuery(
        ['clients?page=',currentPage],
        ()=>getClients(currentPage.value),
        {
            // staleTime: 1000 * 60, // espera 1 min antes de volver a consultar
        }
    );

    watch(data, dataClientesMagica =>{
        if(dataClientesMagica)
            store.setClients(dataClientesMagica);
    },{immediate:true});

    return {
        isLoading,
        clients,
        currentPage,
        totalPages,

        //
        setPage:store.setPage,


    }
}

export default useClientsComposable;