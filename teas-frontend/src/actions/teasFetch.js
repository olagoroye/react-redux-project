export const loadTeas = teas => ({ type: "LOAD_TEAS", teas })



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

  export const createTeas = (data) =>{

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
          .then(tea => dispatch({type: 'ADD_TEA', payload: tea }))

      }
  }

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
    .then(tea => dispatch({type: 'ADD_REVIEW', payload: tea}))
  }
}