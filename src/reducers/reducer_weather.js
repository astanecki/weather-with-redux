import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // the same result as: return state.concat([action.payload.data]);
            return [action.payload.data, ...state];
    }

    return state;
    
}