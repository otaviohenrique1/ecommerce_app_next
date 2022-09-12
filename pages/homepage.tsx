import { Button, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import ContainerApp from '../components/ContainerApp'
import { listaProdutos, ListaProdutoTypes } from '../utils/lista_produtos'

export default function Homepage() {
  const [data, setData] = useState<ListaProdutoTypes[]>([]);

  useEffect(() => {
    setData(listaProdutos);
  }, [])


  return (
    <ContainerApp>
      <Typography
        variant="h4"
        component="h1"
        display="block"
        textAlign="center"
        marginY="40px"
        sx={{
          fontWeight: "bold",
          marginBlockStart: "0.67em",
          marginBlockEnd: "0.67em",
          marginInlineStart: "0px",
          marginInlineEnd: "0px"
        }}
      >Homepage</Typography>
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        sx={{ marginY: "40px" }}
      >
        <TableContainer
          component={Paper}
          sx={{ maxWidth: "800px" }}
        >
          <Table
            size="medium"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="right">Preço</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{item.nome}</TableCell>
                  <TableCell align="right">
                    {`R$ ${(item.preco).toFixed(2).replace(".", ",")}`}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                    >Comprar</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ContainerApp>
  )
}
