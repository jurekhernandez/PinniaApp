<script setup lang="ts">
import LoadingModal from "@/shared/components/LoadingModal.vue";
import useClient from "@/clients/composables/useClient";
import {useRoute, useRouter} from "vue-router";
import {useQueryClient} from "@tanstack/vue-query";
import {watch} from "vue";

const route = useRoute();
const queryClient = useQueryClient();
const router = useRouter();

const {client, isError, clientMutation, updateClient, isUpdating, isErrorUpdating,isUpdatingSuccess} = useClient(+route.params.id );

watch(isError,()=>{
    if (isError.value)
        router.replace('/clients');
})

</script>

<template>
    <h3 v-if="isUpdating">Guardando...</h3>
    <h3 v-if="isUpdatingSuccess">Guardado</h3>
    <loading-modal v-if="false"/>
    
    <div>
        <h1> {{ client.name }}</h1>
        <form @submit.prevent="updateClient(client)">
            <input type="text" placeholder="Nombre" v-model="client.name">
            <br>
            <input type="text" placeholder="Dirección" v-model="client.address">
            <br>
            <button type="submit" :disabled="isUpdating">Guardar</button>
        </form>
    </div>
    <code>
        {{client}}
    </code>
</template>

<style scoped>
input{
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 10px;
}

button{
    margin-bottom: 10px;
}
</style>