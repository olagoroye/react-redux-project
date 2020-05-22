export const loadTeas = teas => ({ type: "LOAD_TEAS", teas })
export const makeTeas = teas => ({ type: "ADD_TEAS", teas })



// function return an action object which is returned to the reducer to update 

export const fetchTeas = () => {

    return dispatch => {
      return fetch("http://localhost:3000/api/v1/teas")
        .then(resp => resp.json())
        .then(teas => dispatch({
           type: 'LOAD_TEAS',
           payload: teas
        }))
    }
  } //fetching all teas from the database

  export const createTeas = (data, history) =>{

      return (dispatch ) => {
          fetch ("http://localhost:3000/api/v1/teas", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
          })
          .then(response =>response.json())
          .then(tea => {
            if (tea.error){
              alert(tea.error)
            }else {
              dispatch(makeTeas(tea))
              history.push('/teas') 
            } 
            // dispatch({type: 'ADD_TEA', payload: tea })
                // return tea
              }
        )
          
      }
  }
//issues with redirect
export const addReview = (review, teaId) =>{

  return (dispatch)=>{

    fetch(`http://localhost:3000/api/v1/teas/${teaId}/reviews`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(response => response.json())
    .then(tea => dispatch({type: 'ADD_REVIEW', payload: tea})
       )
  }
}


export const deleteReview = (reviewId) =>{

  return (dispatch)=>{

    fetch(`http://localhost:3000/api/v1/reviews/${reviewId}`,{
      method: 'DELETE',
      
    })
    .then(response => response.json())
    .then(tea => dispatch({type: 'DELETE_REVIEW', payload: tea}))
  }
}

export const editTea = (data) =>{
    return (dispatch ) => {
      fetch (`http://localhost:3000/api/v1/teas/${data.id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(data)
      })
      .then(response =>response.json())
      .then(tea => dispatch({type: 'EDIT_TEA', payload: tea }))

}

}