import {defineStore} from "pinia";
import { ref} from 'vue';
import {Client} from "@/clients/interfaces/Client";

export const useClientsStore = defineStore('storeClients', () => {

    const currentPage = ref<number>(1);
    const totalPages = ref<number>(5);
    const clients = ref<Client[]>([]);
    return {
        // State
        currentPage,
        totalPages,
        clients,
        // Getters  nameFunction: computed(()=> 10*10),

        // Action
        setClients(newClients: Client[]){
            clients.value= newClients;
        },
        setPage(page:number){
            if(currentPage.value === page) return;
            currentPage.value = page;
        }

    }
});