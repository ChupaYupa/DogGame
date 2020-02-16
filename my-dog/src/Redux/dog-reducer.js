import { createStore, combineReducers } from "redux";

const COUNTER_DOG = 'COUNTER_DOG';
const SET_DOG = 'SET_DOG';
const SHOW_DOG = 'SHOW_DOG';

const initialState = {
    blockId: 10,
    counter: 1,
    errors: 0
}
// функция, которую если вызвать, вернёт нам случайное число от 0 до 8
function getRandomImageIndex() {
    return Math.floor(Math.random() * 108);
}
function getRandomImageIndex2() {
    return Math.floor(Math.random() * 108);
}

const dogReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_DOG:
            {
                return {
                    ...state, counter: state.counter + 1
                };
            }
        case SET_DOG:
            {
                return {
                    ...state, errors: state.errors + 1, blockId: getRandomImageIndex2()
                };
            }
        case SHOW_DOG:
            {
                return {
                    ...state, blockId: getRandomImageIndex()
                };
            }
        default:
            return state;
    }
}
export default dogReducer;



export const counter_AC = () => ({
    type: COUNTER_DOG
});
export const set_AC = () => ({
    type: SET_DOG
});
export const showRandomImageAC = () => ({
    type: SHOW_DOG
});

//import store 
debugger
export const store = createStore(combineReducers({
    dog: dogReducer
}));   