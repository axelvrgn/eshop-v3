import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { supabase } from "../supabaseClient";

import Layout from "../layouts/Layout";
import Container from "../components/Container";
import FormField from "../components/FormField";
import FormControl from "../components/FormControl";
import Logo from "../components/Logo";
import Alert from "../components/Alert";
import Loader from "../components/Loader";

interface IFormValues {
  email: string;
  password: string;
  passwordVerif: string;
}

const Register = () => {
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (formValues: any) => {
    if (formValues.password === formValues.passwordVerif) {
      try {
        setLoading(true);
        const { error } = await supabase.auth.signUp({
          email: formValues.email,
          password: formValues.password,
          options: {
            emailRedirectTo: "/login",
          },
        });
        if (error) throw error;
        alert("Un mail de confirmation a été envoyé sur votre boîte mail");
      } catch (error: any) {
        alert(error.error_description || error.message);
      } finally {
        reset();
        setLoading(false);
      }
    } else alert("Les mots de passe ne sont pas identiques");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  return (
    <Layout>
      <Container>
        <div className="flex justify-center">
          <div className="border bg-white p-12 w-full sm:w-auto flex flex-col space-y-4">
            <Alert title="Inscription en cours de développement" />
            <div className="h-48">
              <Logo />
            </div>
            <div className="flex justify-between flex-wrap">
              <div className="uppercase font-semibold text-lg">Inscription</div>
              <button
                className="uppercase font-semibold text-lg hover:text-yellow-400 duration-150"
                onClick={() => navigate("/login")}
              >
                Déjà membre ?
              </button>
            </div>
            <form onSubmit={handleSubmit(handleSignup)}>
              <div className="flex flex-col space-y-8">
                {/* <FormField label="Pseudo">
                <FormControl
                  type="text"
                  name="pseudo"
                  errors={errors}
                  register={register}
                  required
                />
              </FormField> */}
                <FormField label="Adresse e-mail">
                  <FormControl
                    type="email"
                    placeholder="john.doe@gmail.com"
                    name="email"
                    errors={errors}
                    register={register}
                    required
                  />
                </FormField>
                <FormField label="Mot de passe">
                  <FormControl
                    type="password"
                    name="password"
                    errors={errors}
                    register={register}
                    validationSchema={{
                      minLength: {
                        value: 6,
                        message: "Doit contenir au minimum 6 caractères",
                      },
                    }}
                    required
                  />
                </FormField>
                <FormField label="Vérification du mot de passe">
                  <FormControl
                    type="password"
                    name="passwordVerif"
                    errors={errors}
                    register={register}
                    validationSchema={{
                      minLength: {
                        value: 6,
                        message: "Doit contenir au minimum 6 caractères",
                      },
                    }}
                    required
                  />
                </FormField>

                <button className="bg-yellow-400 p-2 text-white" type="submit">
                  {isLoading ? (
                    <div className="flex justify-center">
                      <Loader />
                    </div>
                  ) : (
                    <div>S'inscrire</div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Register;
