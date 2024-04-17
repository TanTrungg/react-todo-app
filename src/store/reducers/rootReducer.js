const initState = {
  users: [
    { id: 1, name: "Trung" },
    { id: 2, name: "Thúy" },
  ],
  pet: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let { users } = state;
      users = users.filter((u) => u.id !== action.payload.id);
      return {
        ...state,
        users,
      };
    case "ADD_USER":
      let id = Math.floor(Math.random() * 1000);
      let user = { id: id, name: `user - ${id}` };
      return {
        ...state,
        users: [...state.users, user],
      };

    default:
      return state;
  }
};

export default rootReducer;
