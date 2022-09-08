import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import Appbar from '../components/Appbar'

type ContainerAppProps = { 
  children: ReactNode;
}

export default function ContainerApp(props: ContainerAppProps) {
  return (
    <>
      <Appbar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        height="100%"
      >
        {props.children}
      </Box>
    </>
  )
}
