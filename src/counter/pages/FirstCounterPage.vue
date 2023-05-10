<script setup lang="ts">

import {useCounterOptionsStore} from "@/store/useCounterOptionsStore";
import CounterOptionsValue from "@/counter/components/CounterOptionsValue.vue";

const counterOptions = useCounterOptionsStore();
const {incrementByOne, incrementBy, $reset}= counterOptions


</script>

<template>
    <h1> Pinia Options</h1>
    <h4> Counter : {{ counterOptions.count }}</h4>
    <h4> Square {{ counterOptions.squareCount }}</h4>

    <br/>

    <button @click="counterOptions.incrementByOne()"> +1 </button>
    <button @click="incrementBy(2)"> +2 </button>
    <button @click="counterOptions.incrementBy(5)"> +5 </button>
    <button @click="counterOptions.$reset()"> reset </button>

    <br/>
    <counter-options-value/>
</template>



<style scoped>
    button{
        margin-right: 5px
    }
</style>