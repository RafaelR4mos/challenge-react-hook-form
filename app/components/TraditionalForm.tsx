"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { useEffect, useState } from "react";
import type { formErrorSchema } from "../utils/formErrorSchema";

function TraditionalForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState<formErrorSchema[]>([]);

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function validateFields() {
    setFormErrors([]);

    if (formData.name.length <= 0) {
      setFormErrors((prevErrors) => [
        ...prevErrors,
        {
          field: "name",
          error: "O campo 'name' não deve ser vazio",
        },
      ]);
    }

    if (formData.email.length <= 0) {
      setFormErrors((prevErrors) => [
        ...prevErrors,
        {
          field: "email",
          error: "O campo 'email' não deve ser vazio",
        },
      ]);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (formErrors.length > 0) {
        throw new Error("Campos inválidos");
      }
      console.log("Dados enviados!", formData);
    } catch (error) {
      console.log(error);
      const errMessage = error as string;
      alert(errMessage);
    }
  }

  useEffect(() => {
    validateFields();
  }, [formData]);

  return (
    <form
      onSubmit={handleSubmit}
      className=" min-w-[500px] mt-4 flex flex-col gap-2 p-8 border-black border-2 rounded-md"
    >
      <h2 className="text-center text-lg font-bold">Form Tradicional</h2>
      <div className="flex flex-col gap-3 mt-4 mb-4">
        <div>
          <Label htmlFor="name">Digite seu nome completo</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChangeInput}
          />
          {formErrors.map(
            ({ field, error }) =>
              field === "name" && (
                <span className="text-sm text-red-600" key={field}>
                  {error}
                </span>
              )
          )}
        </div>
        <div>
          <Label htmlFor="email">Digite seu e-mail</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@email.com"
            value={formData.email}
            onChange={handleChangeInput}
          />
          {formErrors.map(
            ({ field, error }) =>
              field === "email" && (
                <span className="text-sm text-red-600" key={field}>
                  {error}
                </span>
              )
          )}
        </div>
        <div>
          <Label htmlFor="cpf">Digite seu cpf</Label>
          <Input
            id="cpf"
            name="cpf"
            placeholder="cpf"
            value={formData.cpf}
            onChange={handleChangeInput}
          />
          {formErrors.map(
            ({ field, error }) =>
              field === "cpf" && (
                <span className="text-sm text-red-600" key={field}>
                  {error}
                </span>
              )
          )}
        </div>
        <div>
          <Label htmlFor="password">Digite sua senha</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirme sua senha</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChangeInput}
          />
        </div>
      </div>

      <Button type="submit" className="font-semibold">
        Enviar
      </Button>
    </form>
  );
}

export default TraditionalForm;
