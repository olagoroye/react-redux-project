export default (state ={name: "",brand: "",price: "",img_url: "",description: ""}, action)=>{
    switch(action.type){
        case 'UPDATE_FORM':
        return action.bottleFormData

    default:
        return state;
    }
}