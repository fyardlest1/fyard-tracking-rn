import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// access our api 
const signup = (dispatch) => {
    return ({ email, password }) => {
        // make api request to sign up with that email and password

        // if we sign up, modify our state and say that we are authenticated

        // if sign up fails, we need to reflect an error message somewere
        dispatch()
    }
}

const signin = (dispatch) => {
    // try to sign in
    // handle success by updatin state
    // handle failure by showing error message somewere
}

// get out the api
const signout = (dispatch) => {
    // just sign out the app
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {},
    { isSignedIn: false }
)