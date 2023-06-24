import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
} from '../actions/types'

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    loading: false,
}

export default function auth(state = initialState, action) {
    const  { type, patload } = action;

    switch (type) {
        case SIGNUP_FAIL:
        case SIGNUP_SUCCESS:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...state,
                access : null,
                refresh: null,
                isAuthenticated: false,
                user: null,
            }
        default:
            return state
    }

}