const initialState = {
    currentUser: { currentUser: "Guest" }
}

export const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return { ...state, currentUser: action.payload }
        default:
            return state
    }
} 