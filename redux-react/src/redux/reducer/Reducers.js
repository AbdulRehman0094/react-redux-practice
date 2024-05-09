export const reducer = (state = 0, action) => {
  if (action.type === "REDUCE_BALANCE") {
    return state - action.payload;
  } else if (action.type === "INCREASE_BALANCE") {
    return state + action.payload;
  } else {
    return state;
  }
};

const initialState = {
  users: [], 
};

export const reducerUser = (state = initialState, action) => {
  if (action.type === "ADD_USER") {
    return {
      // ...state,
      users: [...state.users, action.payload],
    };
  }
  return state;
};

const initialState2 = {
  data: null,
  loading: false,
  error: null,
};

export const dataReducer = (state = initialState2, action) => {
  if (action.type === "FETCH_DATA_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      loading: false,
      error: null,
    };
  } else if (action.type === "FETCH_DATA_FAILURE") {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  } else {
    return state;
  }
};
