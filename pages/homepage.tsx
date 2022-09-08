import { Typography } from '@mui/material'
import React from 'react'
import ContainerApp from '../components/ContainerApp'

export default function Homepage() {
  return (
    <ContainerApp>
      <Typography
        variant="h4"
        component="div"
        marginY="40px"
        sx={{ flexGrow: 1 }}
      >Homepage</Typography>
    </ContainerApp>
  )
}
