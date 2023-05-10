<script setup lang="ts">
import {useCounterSetupStore} from "@/store/UseCounterSetupStore";
import CounterSetupValue from "@/counter/components/CounterSetupValue.vue";


const counterOptions = useCounterSetupStore();
const {incrementByOne, incrementBy, $reset}= counterOptions


</script>

<template>
    <h1> Pinia Setup</h1>
    <h4> Counter : {{ counterOptions.count }}</h4>
    <h4> Square {{ counterOptions.squareCount }}</h4>

    <br/>

    <button @click="counterOptions.incrementByOne()"> +1 </button>
    <button @click="incrementBy(2)"> +2 </button>
    <button @click="counterOptions.incrementBy(5)"> +5 </button>
   <!-- <button @click="counterOptions.$reset()"> reset </button>  En setup no se puede usar el reser -->

    <br/>
    <counter-setup-value/>
</template>



<style scoped>
button{
    margin-right: 5px
}
</style>