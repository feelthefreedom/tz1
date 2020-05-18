export const setJwtToken = JWT => {
    return {
        type: 'SET_TOKEN',
        payload: JWT
    }
}