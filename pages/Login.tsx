import { Button, ButtonGroup, Container, TextField } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import * as yup from "yup";
import { FormikHelpers, useFormik } from "formik";
import SellIcon from '@mui/icons-material/Sell';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Email invalido')
    .required('Campo email vazio'),
  senha: yup
    .string()
    .min(8, 'Minimo de 8 caracteres')
    .required('Campo senha vazio'),
});

interface DataTypes {
  email: string;
  senha: string;
}

const initialValues: DataTypes = {
  email: "",
  senha: ""
};

export default function Login() {
  const onSubmitForm = (values: DataTypes, formikHelpers: FormikHelpers<DataTypes>) => {
    alert("Salvo");
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmitForm,
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width="100%"
      height="100%"
    >
      <Box
        marginBottom="30px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <h1>E-commerce App Next</h1>
        <SellIcon sx={{ width: "60px", height: "60px", }} />
        <h2>Login</h2>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="senha"
          name="senha"
          label="Senha"
          type="password"
          value={formik.values.senha}
          onChange={formik.handleChange}
          error={formik.touched.senha && Boolean(formik.errors.senha)}
          helperText={formik.touched.senha && formik.errors.senha}
          sx={{ marginY: "20px" }}
        />
        <Button
          color="secondary"
          variant="contained"
          fullWidth
          type="button"
          sx={{ marginBottom: "10px" }}
        >Novo cadastro</Button>
        <ButtonGroup fullWidth>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >Entrar</Button>
          <Button
            color="error"
            variant="contained"
            fullWidth
            type="button"
            onClick={() => formik.resetForm()}
          >Limpar</Button>
        </ButtonGroup>
      </form>
    </Box>
  );
}
