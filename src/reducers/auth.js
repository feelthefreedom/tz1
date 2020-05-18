const initialState = {
    currentUser: {}
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return { ...state, currentUser: action.payload }
        default:
            return state;
    }
}