import * as yup from "yup";

const CPF_REGEX = /^\d{11}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const registerFormSchema = yup.object({
  name: yup
    .string()
    .required("O campo nome é obrigatório")
    .min(3, "O campo nome precisa no mínimo 3 caracteres"),
  email: yup
    .string()
    .required("O campo email é obrigatório")
    .email("o campo email deve ser um e-mail de formato válido")
    .max(255, "O campo e-mail não deve exceder 255 caracteres"),
  cpf: yup
    .string()
    .required("O campo cpf é obrigatório")
    .matches(CPF_REGEX, "O cpf deve conter 11 caracteres e somente números."),
  password: yup
    .string()
    .required("O campo senha é obrigatório")
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .matches(
      PASSWORD_REGEX,
      "A senha deve conter apenas letras e números. 1 letra maiúscula, 1 minúscula, um número."
    ),
  confirmPassword: yup
    .string()
    .required("O campo senha é obrigatório")
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .matches(
      PASSWORD_REGEX,
      "A senha deve conter apenas letras e números. 1 letra maiúscula, 1 minúscula, um número."
    )
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});
