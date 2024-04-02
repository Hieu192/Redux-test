import { Types } from "./types";

const initalState = {
    count: 1,
}


export const counterReducer = (state = initalState, action) => {
    console.log("reducer")
    switch (action?.type) {
        case Types.increase: 
            console.log("increase", state);
            return {
                count: state.count+= action.payload,
            }
        case Types.decrease:
            console.log("decrease", state);
            return {
                count: state.count-=action.payload,
            }
        default:
            return state
    }
}