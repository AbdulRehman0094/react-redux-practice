// actions.js

export const reduceAction = (amount) => {
  return (dispatch) => {
    dispatch({ type: 'REDUCE_BALANCE', payload: amount });
  };
};

export const increaseAction = (amount) => {
    return (dispatch) => {
        dispatch({ type: 'INCREASE_BALANCE', payload: amount });
      };
};

export const addUser = (user) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_USER', payload: user });
  };
};

export const fetchData = () => {
  return (dispatch, getState) => {
    // Perform asynchronous operation (e.g., API call)
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK/last7days?unitGroup=metric?&key=YOUR_API_KEY`)
      .then(response => response.json())
      .then(data => {
        // Dispatch regular action with fetched data
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
      })
      .catch(error => {
        // Dispatch error action
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      });
  };
};
