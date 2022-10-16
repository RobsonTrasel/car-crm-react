import { http } from '../../config/Http'
import { changeLoading } from './loading'
import { changeNotify } from './notify'

export const actionsTypes = {
    CHANGE: 'AUTH_CHANGE',
    SUCCESS: 'AUTH_SUCCESS'
}

export const change = (payload) => ({
  type: actionsTypes.CHANGE,
  payload
})

export const success = (payload) => ({
  type: actionsTypes.SUCCESS,
  payload
})

export const setUserToken = token => dispatch => {
    localStorage.setItem('access_token', token)
    dispatch( change({
        email: '',
        password:''
    }))

    dispatch( success(true))
}

export const login = credentials => dispatch => {
    dispatch(changeLoading({
        open: true,
        msg: 'Autenticando o usuario...'
    }))

    return http.post('oauth/token',  {
        grant_type: 'password',
        client_id: 2,
        client_secret: 'hRWXGnJiNwOwpI5dn3DHDQYAWLVBrzrIVLfqu2MS',
        username: credentials.email ,
        password: credentials.password
    }).then(res => {
        dispatch(changeLoading({open: false}))

        if(typeof res !== 'undefined') {
            if(res.data.access_token ) {
                dispatch(setUserToken(res.data.access_token))
            }
        }
    }).catch(error => {
        dispatch(changeLoading({open: false}))

        if(typeof error.response !== 'undefined') {
            if(error.response.status === 401 || error.response.status === 400 ) {
                dispatch(changeNotify({
                    open: true, 
                    msg: 'Email ou Senha incorretos',
                    class: 'error'
                }))
            }
        } else {
            dispatch(changeNotify({
                open: true, 
                msg: 'Erro ao conectar ao servidor',
                class: 'error'
            }))
        }
    })
}