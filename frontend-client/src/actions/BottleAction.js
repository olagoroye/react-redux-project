//** action creators
// export const updateBottleForm = bottleFormData =>{
//     return{type:'UPDATE_FORM' , bottleFormData}
// }

//** asyn
export const fetchBottles = () => {

    return dispatch => {
   
      return fetch('http://localhost:3000/api/v1/bottles')
        .then(resp => resp.json())
        .then(bottles => {dispatch({type: 'GET_BOTTLES', bottles})
        } )    
    } 
}



export const addBottle = (bottle, history) => {
   
    return dispatch => {
         fetch('http://localhost:3000/api/v1/bottles', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bottle)})
        .then(resp => resp.json())
        .then(bottle =>{if (bottle.error){
            console.log('complete form')}
        else{ dispatch({type: 'CREATE_BOTTLE', bottle } )
        history.push('/bottles')
       }} )
      
    }
}




// export const deleteBottle = (bottleId) =>{
//     return dispatch =>{
//         dispatch({type: 'REMOVE_BOTTLE', bottleId})
//         fetch(`http://localhost:3000/api/v1/bottles/${bottleId}`,{
//            method: 'DELETE'
//         })
        
//     }

// }
export const deleteBottle = (bottleId) =>{
    return dispatch =>{
        fetch(`http://localhost:3000/api/v1/bottles/${bottleId}`,{
           method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(bottle => {
            if (bottle.message){
                console.log(bottle.message)}
                else{
                    dispatch({type: 'REMOVE_BOTTLE', bottleId})
                }
        }
        )
    }

}




