import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useCounterSetupStore =defineStore('counterSetup',()=>{
    const count=ref<number>(0);
    const lastChange =ref<Date>();

    const incrementBy=(value:number)=>{
        count.value+=value;
        lastChange.value = new Date();
    }

    return {
// state properties
        count,
        lastChange,
// getters
        squareCount:computed(()=> count.value*count.value),
// action
        incrementBy,
        incrementByOne: ()=> incrementBy(1),

    }
});