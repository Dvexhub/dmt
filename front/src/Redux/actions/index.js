import * as type from '../types'

export const increment = ()=>{
    return {
        type: type.INCREMENT
    }
}

export const decrement = ()=>{
    return {
        type: type.DECREMENT
    }
}