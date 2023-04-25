import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { Navbar } from '../components/Navbar'
import Grid from '@mui/material/Grid';

export const Dashboard = () => {
  const loggedIn = useSelector((store) => store.auth.loggedIn);
  const logged = JSON.parse(localStorage.getItem('loggedIn'))


  return (logged && loggedIn)
      ?
        <Grid container >
          <Grid item xs={12}>
            <Navbar />
          </Grid>
          <Grid item xs={12}>
            <Outlet />
          </Grid>
        </Grid>
      :
        <Navigate replace to={"/login"} />

}




