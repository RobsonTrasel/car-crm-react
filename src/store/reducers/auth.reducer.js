import { actionsTypes } from '../actions/auth.action'

const initialState = {
    credentials: {
        email: '',
        password: ''
    },
    success: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case actionsTypes.CHANGE:
        return { 
            ...state, 
            credentials: {
                ...state.credentials,
                ...payload
            }
        }
    case actionsTypes.SUCCESS:
        return { 
            ...state, 
            success: payload
        }

  default:
    return state
  }
}
