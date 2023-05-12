<script setup lang="ts">

import useClientsComposable from "@/clients/composables/useClientsComposable";

const {isLoading, clients} = useClientsComposable();
</script>

<template>
<ul>
    <!-- <li> Cliente 1 </li> -->
    <li v-for="client of clients" :key="client.id">
        <RouterLink :to="{
            name: 'client-id',
            params:{ id: client.id }
        }">
            {{client.name }}
        </RouterLink>
    </li>
</ul>
</template>

<style scoped>

</style>