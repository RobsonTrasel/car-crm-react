import { actionsTypes } from '../actions/alert'

const initialState = {
    open: false, 
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
