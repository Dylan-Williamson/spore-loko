const initialLoginForm = {
    email: "",
    password: "",
  }
  
  
  const initialState = {
      user: null,
      loginForm: initialLoginForm
  }
    
    const userReducer = (state=initialState, action) => {
      switch (action.type){
          case "LOGIN_FORM_CHANGE":
            return {...state, loginForm: {
              ...state.loginForm,
              [action.payload.name]: action.payload.value
            }}
          case "SET_USER":
              return {
                ...state,
                user: action.user
                }
          case "LOGOUT":
            return { ...state, email: null, id: null}
        default:
          return {...state}
      }
    }
    
    export default userReducer