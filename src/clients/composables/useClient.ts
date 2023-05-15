import {ref, watch} from "vue";
import type {Client} from "@/clients/interfaces/Client";
import {useQuery} from "@tanstack/vue-query";
import clientsApi from "@/api/clientsApi";

const getClient = async (id:number):Promise<Client> => {
    const { data } = await clientsApi.get(`/clients/${id}`);
    return data;
}
const useClient = (id:number) => {
    const client = ref<Client>();

    const { isLoading, data} = useQuery(
        ['client',id],
        ()=> getClient(id)
    );

    watch(data, () =>{
        if(data)
            client.value=data.value;
    },{immediate:true})
    return {
        isLoading,
        client ,
    }
}

export default useClient;
