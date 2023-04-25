import React, { useEffect, useState } from 'react'

import styled from 'styled-components';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`


export const Chat = () => {

  const ApiUrl = 'https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing?user=admin&password=admin';
  const [chatData, setChatData] = useState([]);

  const getChat = async () => {
    const res = await fetch(ApiUrl)
    const data = await res.json();
    setChatData(data)
  }

  useEffect(() => {
    getChat()
  }, [])

  return (
    <Content>
      {
        chatData.map(mensaje => (
          <Card sx={{ width: { xs: '80%', md: '50%' }, margin: '10px 0 10px 0', 'boxShadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' }} key={ mensaje.message}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Sender: {mensaje.sender}
              </Typography>
            </CardContent>
            <CardContent>
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">
                  {mensaje.message}
                </Alert>
              </Stack>
            </CardContent>
          </Card>
        ))
      }
    </ Content >
  )
}


