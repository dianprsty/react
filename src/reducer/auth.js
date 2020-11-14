const initialAuthState = {
    isLogin: false
}

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                isLogin: true
            }
        case "LOGOUT":
            return initialAuthState
        default:
            return state
    }
}

export default authReducer