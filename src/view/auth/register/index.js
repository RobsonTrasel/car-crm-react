import { TextField, Typography, Button } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { change } from '../../../store/actions/register.action'


export default function Register() {
  const dispatch = useDispatch()
  const { user, error, success} = useSelector(state => state.registerReducer)
  return (
    <div className="d-flex bg-white min-vh-100">
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <div className="form-group text-center">
              <img height="48" src="/logo.png" alt="" />
              <Typography variant="h6" component="h1" className='mt-3'>
                Crie sua conta, teste gratis!
              </Typography>

              <TextField 
                error={(error.name) && true}
                margin='normal'
                label='Nome'
                value={user.name}
                onChange={text => {
                  dispatch( change({ name: text.target.value}))
                  if(error.name && delete error.name);
                }}
              />

              {(error.name) &&
                <strong className='text-danger'>{error.name[0]}</strong>
              } 
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}
