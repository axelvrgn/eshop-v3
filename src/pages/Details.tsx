import React, { useEffect, useState } from "react";
/*
import ReactMarkdown from "https://esm.sh/react-markdown@7";
import rehypeRaw from "https://cdn.skypack.dev/rehype-raw@6?dts";
*/
import Moment from "react-moment";

import { useParams } from "react-router-dom";

import Layout from "../layouts/Layout";
import Container from "../components/Container";
import Section from "../components/Section";
import { gameService } from "../services/gameService";

const Details = () => {
  const gameId = useParams().gameId;

  const [game, setGame] = useState<any>([]);
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    gameService
      .getDetails(gameId!)
      .then((res) => {
        setGame(res.data);
        setDevelopers(res.data.developers);
        console.log(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Layout>
        <Container>
          <div className="bg-white">
            <div
              className="h-[60vh] bg-cover bg-top flex items-end"
              style={{
                backgroundImage: `url(${game.background_image})`,
              }}
            >
              <div className="p-8 bg-gradient-to-b from-transparent to-black w-full">
                <div className="text-4xl font-bold text-white">{game.name}</div>
              </div>
            </div>

            <div className="flex flex-col space-y-8 px-4">
              <Section title="Description">
                {/* <ReactMarkdown
                  children={game.description}
                  rehypePlugins={[rehypeRaw]}
                /> */}
              </Section>
              <Section title="Informations">
                <ul>
                  <li className="flex space-x-2">
                    Développeur: &ensp;
                    {developers.map((developer: any, index) => (
                      <div key={index}>{developer.name}</div>
                    ))}
                  </li>
                  <li className="flex">
                    Date de sortie: &ensp;
                    <Moment format="DD/MM/YYYY">{game.released}</Moment>
                  </li>
                </ul>
              </Section>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Details;
