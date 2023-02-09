import React from "react";
import Layout from "../layouts/Layout";
import Banner from "../components/Banner";
import Container from "../components/Container";

import { useToasts } from "../components/Toast/ToastContext";

const Home = () => {
  const { pushToast } = useToasts();

  const onSubmit = () => {
    pushToast({
      title: "Bravo",
      content: "Votre action a été enregitrée !",
    });
  };

  return (
    <Layout>
      <Banner />
      <Container>
        <button
          className="bg-slate-700 p-1 rounded text-white mx-auto"
          onClick={onSubmit}
        >
          Toast !
        </button>
      </Container>
    </Layout>
  );
};

export default Home;
