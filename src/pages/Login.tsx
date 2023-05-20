import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useToasts } from "../components/Toast/ToastContext";
import AuthContext from "../contexts/Auth";

import { supabase } from "../supabaseClient";

import Container from "../components/Container";
import Layout from "../layouts/Layout";
import FormField from "../components/FormField";
import FormControl from "../components/FormControl";
import Logo from "../components/Logo";
import Alert from "../components/Alert";
import Loader from "../components/Loader";

interface IFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { pushToast } = useToasts();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  const handleLogin = async (formValues: IFormValues) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formValues.email,
        password: formValues.password,
      });
      if (error) throw error;
      pushToast({
        content: "Vous êtes connecté !",
      });
      const accessToken = data.session!.access_token;
      sessionStorage.setItem("tk_u", accessToken);
      setAuth([data.user, accessToken]);
      console.log(data);
      navigate("/games");
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      reset();
      setLoading(false);
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    setAuth({});
    pushToast({
      content: "Vous êtes déconnecté !",
    });
  };

  return (
    <Layout>
      <Container>
        <div className="flex justify-center">
          <div className="border bg-white p-8 w-full sm:w-auto flex flex-col space-y-4">
            <Alert title="Connexion en cours de développement" />
            <div className="h-48">
              <Logo />
            </div>

            <div className="uppercase flex font-semibold text-lg flex-wrap items-center justify-between">
              <div>Connexion</div>
              <button
                type="button"
                className="uppercase hover:text-yellow-400 duration-150"
                onClick={() => navigate("/register")}
              >
                Créer un compte
              </button>
            </div>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="flex flex-col space-y-8">
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
                    required
                  />
                </FormField>
                <button
                  className="bg-yellow-400 text-white p-2 text-center"
                  type="submit"
                >
                  {isLoading ? (
                    <div className="flex justify-center">
                      <Loader />
                    </div>
                  ) : (
                    <div>Connexion</div>
                  )}
                </button>
                <button onClick={logout}>Déconnexion</button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Login;
