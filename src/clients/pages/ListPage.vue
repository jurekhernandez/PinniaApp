<script setup lang="ts">

import ClientList from "@/clients/components/ClientList.vue";
import PagintacionNumbers from "@/clients/components/PagintacionNumbers.vue";
import useClientsComposable from "@/clients/composables/useClientsComposable";
import LoadingModal from "@/shared/components/LoadingModal.vue";

const { isLoading, clients, currentPage, totalPages, setPage }=useClientsComposable();
</script>

<template>
    <div>
        <h1>Listado de clientes</h1>
        <!-- Client List -->
        <ClientList :clients="clients"/>
        <!-- Pagination-->
        <pagintacion-numbers
                :currentPage="currentPage"
                :totalPages="totalPages"
                @page-changed="setPage"/>
        <!-- Loading Modal-->

        <LoadingModal v-if="isLoading"/>


    </div>
</template>

<style scoped>

</style>