<script setup lang="ts">
import LoadingModal from "@/shared/components/LoadingModal.vue";
import useClient from "@/clients/composables/useClient";
import {useRoute} from "vue-router";

const route = useRoute();

const {client, isLoading} = useClient(+route.params.id );

</script>





<template>
    <h3>Guardando...</h3>
    <h3>Guardado</h3>
    <loading-modal v-if="false"/>
    
    <div>
        <h1> {{ client.name }}</h1>
        <form>
            <input type="text" placeholder="Nombre" v-model="client.name">
            <br>
            <input type="text" placeholder="Dirección" v-model="client.address">
            <br>
            <button type="submit">Guardar</button>
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