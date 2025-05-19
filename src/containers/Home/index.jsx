import { useState, useEffect } from "react";

import api from "../../services/api";
import {
  Background,
  Container,
  ContainerButtons,
  Info,
  Poster,
} from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";

function Home() {
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [artistsPopular, setArtistsPopular] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular");
      setMovie(results[1]);
    }

    async function getTopMovies() {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");
      // console.log(results);
      setTopMovies(results);
    }

    async function getTopSeries() {
      const {
        data: { results },
      } = await api.get("/tv/top_rated");
      // console.log(results);
      setTopSeries(results);
    }

    async function getPoluparSeries() {
      const {
        data: { results },
      } = await api.get("/tv/popular");
      // console.log(results);
      setPopularSeries(results);
    }

    async function getArtistsPopular() {
      const {
        data: { results },
      } = await api.get("/person/popular");
      // console.log(results);
      setArtistsPopular(results);
    }

    getMovies();
    getTopMovies();
    getTopSeries();
    getPoluparSeries();
    getArtistsPopular();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button>Assista Agora</Button>
                <Button red>Assista o Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="img-capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} title={"Top Séries"} />}
      {popularSeries && (
        <Slider info={popularSeries} title={"Séries Populares"} />
      )}
      {artistsPopular && (
        <Slider info={artistsPopular} title={"Artistas Mais Popupares"} />
      )}
    </>
  );
}

export default Home;
