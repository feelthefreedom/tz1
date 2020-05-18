const initialState = {
    isCheckingLogPass: false
}

export const isCheckingLogPassReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_CHEKING_LOG_PASS':
            return { ...state, isCheckingLogPass: action.payload }
        default:
            return state
    }
}