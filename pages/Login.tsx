import React from 'react';
import * as yup from "yup";
import { FormikHelpers, useFormik } from "formik";
import SellIcon from '@mui/icons-material/Sell';
import { Button, ButtonGroup, TextField } from '@mui/material'
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const onSubmitForm = (values: DataTypes, formikHelpers: FormikHelpers<DataTypes>) => {
    router.replace("/homepage");
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
    ><Box
      marginBottom="30px"
      marginTop="30px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <SellIcon
            sx={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
            }}
          />
          <h1>E-commerce App Next</h1>
        </Box>
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
          sx={{ marginBottom: "10px", height: "50px" }}
          onClick={() => router.replace("/novo_cadastro")}
        >Novo cadastro</Button>
        <ButtonGroup fullWidth>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ height: "50px" }}
            >Entrar</Button>
          <Button
            color="error"
            variant="contained"
            fullWidth
            type="button"
            sx={{ height: "50px" }}
            onClick={() => formik.resetForm()}
          >Limpar</Button>
        </ButtonGroup>
      </form>
    </Box>
  );
}
