// function
export default function (state = {teas: []}, action){
 
    switch (action.type){
      case 'LOAD_TEAS':
        return {teas: action.payload}
        case 'ADD_TEA':
            return {...state, tea: [...state.teas, action.payload]}
        default:
            return state
    }
   
}

