<script setup lang="ts">


import {useCounterSetupStore} from "@/store/UseCounterSetupStore";

const counterStore = useCounterSetupStore();
</script>

<template>
    <h1>El valor es : {{ counterStore.count }}</h1>
    <h4>Último Cambio:{{ counterStore.lastChange }}</h4>
</template>

<style scoped>

</style>