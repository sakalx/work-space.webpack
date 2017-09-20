export const addNumber = number => {
  //async
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: 'ADD',
        payload: number,
      });
    }, 3000);
  };
};

export const substractNumber = number => {
  return {
    type: 'SUBTRACT',
    payload: number,
  };
};
