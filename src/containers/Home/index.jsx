import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

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
import Modal from "../../components/Modal";
import {
  getArtistsPopular,
  getMovies,
  getPoluparSeries,
  getTopMovies,
  getTopSeries,
} from "../../services/getData";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [artistsPopular, setArtistsPopular] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPoluparSeries(),
        getArtistsPopular(),
      ])
        .then(
          ([movie, topMovies, topSeries, popularSeries, artistsPopular]) => {
            setMovie(movie);
            setTopMovies(topMovies);
            setTopSeries(topSeries);
            setPopularSeries(popularSeries);
            setArtistsPopular(artistsPopular);
          }
        )
        .catch((error) => console.error(error));
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assista Agora
                </Button>
                <Button red onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
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
