import * as type from '../types';

const initialState = {
    count:0
}
export default function changeNumber(state = initialState, action) {
    switch (action.type){
        case type.INCREMENT:{
            return {
                ...state,
                count: state.count+1
            }
        }
        case type.DECREMENT:{
            return {
                ...state,
                count: state.count-1
            }
        }
        default:
            return state;
    }
}