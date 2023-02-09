import React, { useState } from "react";
import { supabase } from "../supabaseClient";

import { useNavigate } from "react-router-dom";

import Layout from "../layouts/Layout";
import Container from "../components/Container";
import FormField from "../components/FormField";
import FormControl from "../components/FormControl";
import Logo from "../components/Logo";
import Alert from "../components/Alert";
import Loader from "../components/Loader";

const Register = () => {
  const [isLoading, setLoading] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerif, setPasswordVerif] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === passwordVerif) {
      try {
        setLoading(true);
        const { error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            emailRedirectTo:
              "https://exquisite-cactus-679f5e.netlify.app/login",
          },
        });
        if (error) throw error;
        alert("Un mail de confirmation a été envoyé sur votre boîte mail");
      } catch (error: any) {
        alert(error.error_description || error.message);
      } finally {
        setLoading(false);
      }
    } else alert("Les mots de passe ne sont pas identique");
  };

  return (
    <Layout>
      <Container>
        <div className="flex justify-center">
          <form
            className="border bg-white p-4 md:p-16 "
            onSubmit={handleSignup}
          >
            <div className="flex flex-col space-y-8">
              <Alert title="Inscription en cours de développement" />
              <div className="h-48">
                <Logo />
              </div>
              <div className="flex justify-between flex-wrap">
                <div className="uppercase font-semibold text-lg">
                  Inscription
                </div>
                <button
                  className="uppercase font-semibold text-lg hover:text-yellow-400 duration-150"
                  onClick={() => navigate("/login")}
                >
                  Déjà membre ?
                </button>
              </div>

              {/* <FormField label="Pseudo">
                <FormControl
                  type="text"
                  value={pseudo}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPseudo(e.target.value)}
                  required
                />
              </FormField> */}
              <FormField label="Adresse e-mail">
                <FormControl
                  type="email"
                  placeholder="john.doe@gmail.com"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  required
                />
              </FormField>
              <FormField label="Mot de passe">
                <FormControl
                  type="password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  required
                />
              </FormField>
              <FormField label="Vérification du mot de passe">
                <FormControl
                  type="password"
                  value={passwordVerif}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPasswordVerif(e.target.value)
                  }
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
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </form>
        </div>
      </Container>
    </Layout>
  );
};

export default Register;
