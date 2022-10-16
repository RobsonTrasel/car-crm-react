import { actionsTypes } from '../actions/auth.action'

const initialState = {
    crendetials: {},
    success: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case actionsTypes.CHANGE:
        return { 
            ...state, 
            crendetials: {
                ...state.crendetials,
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
