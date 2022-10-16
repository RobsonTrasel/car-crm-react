import { actionsTypes } from "../actions/notify";
const initialState = {
    open: true, 
    horizontal: 'center', 
    vertical: 'top',
    class: 'success',
    time: 3000,
    msg: 'Dados atualizados'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionsTypes.CHANGE:
    return { ...state, ...payload }

  default:
    return state
  }
}
