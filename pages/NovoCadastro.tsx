import { Button, ButtonGroup, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import * as yup from "yup";
import { FormikHelpers, useFormik } from "formik";
import SellIcon from '@mui/icons-material/Sell';

const validationSchema = yup.object({
  nome: yup
    .string()
    .required('Campo email vazio'),
  email: yup
    .string()
    .required('Campo email vazio')
    .email('Email invalido'),
  senha: yup
    .string()
    .required('Campo senha vazio')
    .min(8, 'Minimo de 8 caracteres'),
  confirmarSenha: yup
    .string()
    .required("Campo confirmação de senha vazio")
    .min(8, 'Minimo de 8 caracteres')
    .when("senha", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf(
        [yup.ref("senha")],
        "As senhas não são iguais!"
      )
    }),
  cpf: yup
    .string()
    .required('Campo cpf vazio'),
  rua: yup
    .string()
    .required('Campo rua vazio'),
  numero: yup
    .string()
    .required('Campo numero vazio'),
  complemento: yup
    .string()
    .required('Campo complemento vazio'),
  bairro: yup
    .string()
    .required('Campo bairro vazio'),
  cep: yup
    .string()
    .required('Campo cep vazio'),
  cidade: yup
    .string()
    .required('Campo cidade vazio'),
  estado: yup
    .string()
    .required('Campo estado vazio'),
});

interface DataTypes {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  cpf: string;
  telefone: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
}

const initialValues: DataTypes = {
  nome: "",
  email: "",
  senha: "",
  confirmarSenha: "",
  cpf: "",
  telefone: "",
  rua: "",
  numero: "",
  complemento: "",
  bairro: "",
  cep: "",
  cidade: "",
  estado: ""
};

export default function NovoCadastro() {
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
          id="nome"
          name="nome"
          label="Nome"
          type="text"
          value={formik.values.nome}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ marginBottom: "20px" }}
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
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          id="confirmarSenha"
          name="confirmarSenha"
          label="Confirme a senha"
          type="password"
          value={formik.values.confirmarSenha}
          onChange={formik.handleChange}
          error={formik.touched.confirmarSenha && Boolean(formik.errors.confirmarSenha)}
          helperText={formik.touched.confirmarSenha && formik.errors.confirmarSenha}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          id="cpf"
          name="cpf"
          label="CPF"
          type="text"
          value={formik.values.cpf}
          onChange={formik.handleChange}
          error={formik.touched.cpf && Boolean(formik.errors.cpf)}
          helperText={formik.touched.cpf && formik.errors.cpf}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          id="telefone"
          name="telefone"
          label="Telefone"
          type="tel"
          value={formik.values.telefone}
          onChange={formik.handleChange}
          error={formik.touched.telefone && Boolean(formik.errors.telefone)}
          helperText={formik.touched.telefone && formik.errors.telefone}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          id="rua"
          name="rua"
          label="Rua"
          type="text"
          value={formik.values.rua}
          onChange={formik.handleChange}
          error={formik.touched.rua && Boolean(formik.errors.rua)}
          helperText={formik.touched.rua && formik.errors.rua}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          id="numero"
          name="numero"
          label="Numero"
          type="number"
          value={formik.values.numero}
          onChange={formik.handleChange}
          error={formik.touched.numero && Boolean(formik.errors.numero)}
          helperText={formik.touched.numero && formik.errors.numero}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          id="complemento"
          name="complemento"
          label="complemento"
          type="text"
          value={formik.values.complemento}
          onChange={formik.handleChange}
          error={formik.touched.complemento && Boolean(formik.errors.complemento)}
          helperText={formik.touched.complemento && formik.errors.complemento}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          id="bairro"
          name="bairro"
          label="bairro"
          type="text"
          value={formik.values.bairro}
          onChange={formik.handleChange}
          error={formik.touched.bairro && Boolean(formik.errors.bairro)}
          helperText={formik.touched.bairro && formik.errors.bairro}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          id="cep"
          name="cep"
          label="CEP"
          type="number"
          value={formik.values.cep}
          onChange={formik.handleChange}
          error={formik.touched.cep && Boolean(formik.errors.cep)}
          helperText={formik.touched.cep && formik.errors.cep}
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          fullWidth
          id="cidade"
          name="cidade"
          label="Cidade"
          type="text"
          value={formik.values.cidade}
          onChange={formik.handleChange}
          error={formik.touched.cidade && Boolean(formik.errors.cidade)}
          helperText={formik.touched.cidade && formik.errors.cidade}
          sx={{ marginBottom: "20px" }}
        />
        <FormControl fullWidth>
          <InputLabel id="estado">Estado</InputLabel>
          <Select
            fullWidth
            labelId="estado"
            label="Estado"
            id="estado"
            name="estado"
            value={formik.values.estado}
            onChange={formik.handleChange}
            error={formik.touched.estado && Boolean(formik.errors.estado)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText
            sx={{ color: "#d32f2f" }}
          >{formik.touched.estado && formik.errors.estado}</FormHelperText>
        </FormControl>
        <ButtonGroup
          fullWidth
          sx={{
            marginTop: "20px",
            marginBottom: "20px"
          }}
        >
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
