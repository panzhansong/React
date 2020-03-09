import {createStore } from 'redux'

const reducer = function (state = {number:0}, action) {
    switch (action.type) {
        case 'add':
            state.number++;
            break;
        case 'decrement':
            state.number--;
            break;
        default:
        break;
    }
    console.log(state)
    return {...state}
}
const store = createStore(reducer)
export default store