<script setup lang="ts">
import {toRef} from "vue";

interface Props {
    currentPage:number;
    totalPages:number;
}
interface Emit {
    (e:'pageChanged',page:number):void;
}
const props = defineProps<Props>();
const emits=defineEmits<Emit>();


const currentPage = toRef(props,'currentPage');
const totalPages = toRef(props,'totalPages');

</script>

<template>
    <div>
        <button
                :disabled="currentPage===1"
                @click="emits('pageChanged', currentPage-1)"
        >Anterior
        </button>
        <button
                v-for="number of totalPages"
                @click="emits('pageChanged',number)"
                :key="number"
                :class="{active: currentPage === number}"
        >{{number}}
        </button>

        <button
                :disabled="currentPage === totalPages"
                @click="emits('pageChanged',currentPage+1)"
        >Siguiente
        </button>
    </div>
</template>

<style scoped>
div{
    margin-top: 10px;
}
button{
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid var( --color-border);
    color: var( --color-text);
    cursor: pointer;
    margin-right: 5px;
    padding: 10px;
    transition: all .5s;
}

button:hover{
    background-color: hsla(160,100%, 37%, 0.2);
    transition: all .5s;
}

button:disabled{
    cursor: not-allowed;
}

.active{
    background-color: hsla(160,100%, 37%, 0.2);
}
</style>