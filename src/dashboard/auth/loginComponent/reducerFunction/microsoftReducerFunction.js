const initialState = {
    loading: false,
    user: null,
    error: null,
  };
  
  const microsoftLoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "MICROSOFT_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "MICROSOFT_SUCCESS":
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: null,
        };
      case "MICROSOFT_FAILURE":
        return {
          ...state,
          loading: false,
          user: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default microsoftLoginReducer;
  