<script setup lang="ts">

import LoadingModal from "@/shared/components/LoadingModal.vue";
</script>

<template>
    <h3>Guardando...</h3>
    <h3>Guardado</h3>
    <loading-modal v-if="false"/>
    
    <div>
        <h1>Jurek Hernández</h1>
        <form>
            <input type="text" placeholder="Nombre">
            <br>
            <input type="text" placeholder="Dirección">
            <br>
            <button type="submit">Guardar</button>
        </form>

    </div>
    <code>

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