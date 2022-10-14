import { actionsTypes } from "../actions/loading"
const initialState = {
    open: true, 
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
