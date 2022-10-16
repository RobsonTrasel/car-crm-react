export const actionsTypes = {
  CHANGE: 'CHANGE_ALERT'
}

export const changeAlert = (payload) => ({
  type: actionsTypes.CHANGE,
  payload
})
