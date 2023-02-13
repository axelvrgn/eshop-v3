import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { pushToast } = useToasts();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) throw error;
      pushToast({
        title: "Bravo",
        content: "Vous êtes connecté !",
      });
      const user = data.user;
      const accessToken = data.session!.access_token;
      sessionStorage.setItem("tk_u", accessToken);
      setAuth([user, accessToken]);
      console.log(data);
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Layout>
        <Container>
          <div className="flex justify-center">
            <form onSubmit={handleLogin} className="bg-white border p-16 ">
              <div className="flex flex-col space-y-8">
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
              </div>
            </form>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Login;
