<script setup lang="ts">
import type {Client} from "@/clients/interfaces/Client";

interface Props {
    clients:Client[]
}
const propiedades = defineProps<Props>();

</script>

<template>
<ul>
    <!-- <li> Cliente 1 </li> -->
    <li v-for="client of propiedades.clients" :key="client.id">
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