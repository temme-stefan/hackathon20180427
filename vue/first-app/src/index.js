import Vue from 'vue';
import App from './components/App.vue';
// import NumberFormGroup from './CustomComponents/NumberFormGroup.vue';

Vue.config.productionTip = false;


// Vue.component('NumberFormGroup',NumberFormGroup);

new Vue({
    el: '#app',
    render: h => h(App),
    data:{
        config:{
            min: 0,
            max: 35,
            step: 3,
            digits: 2,
            unit: 'cm',
            label: "Zahleingabe"
        }
    }
})


