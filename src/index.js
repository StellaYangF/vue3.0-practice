import { reactive, effect, ref, computed } from 'reactivity';

const state = reactive({
    name: 'Stella',
});

// effect(() => {
//     console.log(state.name);
// });

state.name = 'Vivian';