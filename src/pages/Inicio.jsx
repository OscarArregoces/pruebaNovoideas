import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export const Inicio = () => {

  return (
    <Grid container sx={{ 'minHeight': '700px' }}>
      <Grid item xs={12} sx={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
        <Card sx={{ maxWidth: 345 }}>
          <Stack direction="row" spacing={2} sx={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
            <Avatar
              alt="Remy Sharp"
              src="/src//assets/Perfil.png"
              sx={{ width: 100, height: 100, 'margin': '10px' }}
            />
          </Stack>
          <CardContent sx={{ 'textAlign': 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              Oscar Arregoces
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Gracias por la oportunidad de haber realizado la prueba, me encantaria recibir un feedback.
            </Typography>
          </CardContent>
          <CardActions sx={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
            <Button size="small">
              <a
                href="https://github.com/OscarArregoces"
                target="_blank"
                style={{ 'textDecoration': 'none', 'color': '#318ce7' }}
              >GitHub</a>
            </Button>
            <Button size="small">
              <a
                href="https://oscarportafolio.netlify.app/"
                target="_blank"
                style={{ 'textDecoration': 'none', 'color': '#318ce7' }}
              >Portafolio</a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
