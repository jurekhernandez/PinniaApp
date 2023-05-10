<script setup lang="ts">
import {useCounterOptionsStore} from "@/store/useCounterOptionsStore";

const counterStore = useCounterOptionsStore();
</script>

<template>
    <h1>El valor es : {{ counterStore.count }}</h1>
    <h4>Último Cambio:{{ counterStore.lastChanged }}</h4>
</template>

<style scoped>

</style>