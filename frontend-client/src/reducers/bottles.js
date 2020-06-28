
export default (state = [], action) =>{
    switch(action.type) {
      case 'GET_BOTTLES':
        return action.bottles ;
        
        case 'CREATE_BOTTLE':
          return state.concat(action.bottle) ;

          case 'REMOVE_BOTTLE':
            return state.filter(bottle => bottle.id !== action.bottleId);

            case 'EDIT_BOTTLE':
            return state.map(bottle => bottle.id === action.bottleId ? {...bottle, ...action}: bottle );


        default:
          return state;
    }
  }