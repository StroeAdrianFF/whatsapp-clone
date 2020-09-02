export const initialState = {
    user: null//user initially not signed in
};

export const actionTypes = {
    SET_USER: "SET_USER"//push info inside the data layer
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}


export default reducer