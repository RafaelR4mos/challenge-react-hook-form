"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { registerFormSchema } from "../utils/registerSchema";

interface FormData {
  name: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword: string;
}

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(registerFormSchema),
  });

  async function onSubmit(data: FormData) {
    console.log("Dados capturados: ", data);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 segundos de delay
    console.log("Dados enviados com sucesso!");
    reset();
  }

  const nameInRealTime = watch("name");

  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className=" min-w-[500px] mt-4 flex flex-col gap-2 p-8 border-black border-2 rounded-md"
    >
      <h2 className="text-center text-lg font-bold">
        Form com React Hook Form
      </h2>
      <div className="flex flex-col gap-3 mt-4 mb-4">
        <div>
          <Label htmlFor="name">Digite seu nome completo</Label>
          <Input
            type="text"
            id="name"
            placeholder="John Doe"
            {...register("name", { required: true, min: 3 })}
          />
          {errors.name && (
            <span className="text-sm text-red-600">{errors.name.message}</span>
          )}
        </div>
        <div>
          <Label htmlFor="email">Digite seu e-mail</Label>
          <Input
            type="email"
            id="email"
            placeholder="johndoe@email.com"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-sm text-red-600">{errors.email.message}</span>
          )}
        </div>
        <div>
          <Label htmlFor="cpf">Digite seu cpf</Label>
          <Input id="cpf" placeholder="cpf" {...register("cpf")} />
          {errors.cpf && (
            <span className="text-sm text-red-600">{errors.cpf.message}</span>
          )}
        </div>
        <div>
          <Label htmlFor="password">Digite sua senha</Label>
          <Input type="password" id="password" {...register("password")} />
          {errors.password && (
            <span className="text-sm text-red-600">
              {errors.password.message}
            </span>
          )}
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirme sua senha</Label>
          <Input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span className="text-sm text-red-600">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Carregando..." : "Enviar"}
      </Button>

      <span className="mt-2">{`Valor de nome em tempo real: ${nameInRealTime}`}</span>
    </form>
  );
}

export default ReactHookForm;
