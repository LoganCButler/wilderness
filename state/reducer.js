export const SET_USER_CONTEXT = 'wilderness/setUserState';

const defaultState = {
  userContext: 'APP_VIEW', // TODO: turn into a const
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER_CONTEXT:
      return { ...state, userContext: action.userContext };
    default:
      return state;
  }
}

export function setUserContext(userContext) {
  return (dispatch) => {
    dispatch({type: SET_USER_CONTEXT, userContext});
  }
}
