import clientsApi from "@/api/clientsApi";
import {Client} from "@/clients/interfaces/Client";
import {useQuery} from "@tanstack/vue-query";
import {watch} from "vue";
import {useClientsStore} from "@/store/useClientsStore";
import {storeToRefs} from "pinia";

const getClients = async():Promise<Client[]> =>{
    const {data} = await  clientsApi.get<Client[]>('/clients?_page=1');
    return data;
}
const useClientsComposable = ()=>{
    const store=useClientsStore();
    const { currentPage, clients, totalPages } = storeToRefs( store );

    const { isLoading, data } = useQuery(
        ['clients?page=',1],
        ()=>getClients()
    );

    watch(data, dataClientesMagica =>{
        if(dataClientesMagica)
            store.setClients(dataClientesMagica)
    });

    return {
        isLoading,
        clients:data,
    }
}

export default useClientsComposable;