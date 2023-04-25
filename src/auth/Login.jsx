import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { login } from '../store/slices/AuthSlice'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import Grid from '@mui/material/Grid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {

  const ApiUrl = 'https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing';

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const toastSuccess = (message) => toast.success(message);
  const toastError = (message) => toast.error(message);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [form, setForm] = useState({
    user: '',
    password: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if( form.user == '' || form.password =='') return toastError("Todos los campos son necesarios")
    try {
      const res = await fetch(ApiUrl, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (res.ok) {
        dispatch(login())
        toastSuccess("Bienvenido")
        localStorage.setItem('loggedIn', true)
        setTimeout(() => {
          navigate("/dashboard/inicio");
        }, 1000);
      }

    } catch (error) {
      toastError("Credenciales incorrectas")
      console.log('Error Login:', error)

    }
  }

  return (
    <Grid container spacing={2} sx={{ 'minHeight': '700px' }} >
      <Grid item xs={12} sx={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
        <Card sx={{ maxWidth: '100%', 'boxShadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' }}>
          <CardActions >
            <FormControlUnstyled >
              <CardContent sx={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
                <Typography variant="h5" component="div">
                  Prueba Novoideas
                </Typography>
              </CardContent>
              <CardContent >
                <TextField
                  id="input-with-icon-textfield"
                  sx={{ 'width': '100%' }}
                  name='user'
                  onChange={handleInputChange}
                  value={form.user}
                  label="Usuario"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </CardContent>
              <CardContent >
                <FormControl variant="outlined" >
                  <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name='password'
                    onChange={handleInputChange}
                    value={form.password}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Contraseña"
                  />
                </FormControl>
              </CardContent>

              <Stack spacing={2} direction="row" sx={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
                <Button sx={{ 'width': '80%', 'margin': '10px 0 10px 0' }} variant="contained" onClick={handleSubmit}>Login</Button>
              </Stack>
            </FormControlUnstyled>

          </CardActions>
        </Card>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Grid>
    </Grid>
  );
}