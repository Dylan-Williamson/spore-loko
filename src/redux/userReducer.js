  
const initialState = {
    id: null,
    username: null,
    signup: false,
    // loginForm: initialLoginForm
}
    
    const userReducer = (state=initialState, action) => {
      switch (action.type){
        default:
          return {...state}
      }
    }
    
    export default userReducer