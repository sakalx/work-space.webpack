const initialState = {
  user: {
    id: null,
    name: null,
    age: null,
  },
  fetching: false,
  fetched: false,
  ajax: {},
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };
    case 'FAKE_FETCH':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
      // REAL Fetch include 3 part FETCH_USER_PENDING FETCH_USER_REJECTED FETCH_USERS_FULFILLED
      // helping redux-promise-middleware
    case 'FETCH_USER_PENDING': {
      return {
        ...state,
        fetching: true
      };
    }
    case 'FETCH_USER_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
    case 'FETCH_USERS_FULFILLED': {
      return {
        ...state,
        fetching:false,
        fetched: true,
        ajax: action.payload,
      };
    }

  }
  return state;
};
