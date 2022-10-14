import { actionsTypes } from "../actions/loading"
const initialState = {
    open: false, 
    msg: 'Carregando...'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionsTypes.CHANGE:
    return { ...state, ...payload }

  default:
    return state
  }
}
