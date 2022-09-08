import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import SellIcon from '@mui/icons-material/Sell';
import Link from 'next/link';

export default function Appbar() {
  const routes = useRouter();
  const SwalModal = withReactContent(Swal);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            display="flex"
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            <SellIcon
              sx={{
                width: "20px",
                height: "20px",
                marginRight: "10px",
              }}
            />
            <Link href="/homepage">
              E-commerce App Next
            </Link>
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              SwalModal.fire({
                title: "Logout",
                text: "Deseja sair?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: "Sim",
                cancelButtonText: "Não"
              }).then((result) => {
                if (result.isConfirmed) {
                  routes.replace("/");
                }
              })
            }}
          >Sair</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
