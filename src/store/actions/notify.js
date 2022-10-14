export const actionsTypes = {
    CHANGE: 'CHANGE_NOTIFY'
}

export const changeNotify = (payload) => ({
  type: actionsTypes.CHANGE,
  payload
})
