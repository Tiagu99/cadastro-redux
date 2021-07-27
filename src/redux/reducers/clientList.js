const INICIAL_STATE = {
  users: [],
};

const clientList = (state = INICIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_CLIENT':
      return { users: [ ...state.users, action.data ] };
    default:
      return state;
  }
}

export default clientList;