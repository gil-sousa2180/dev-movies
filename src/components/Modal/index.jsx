import { useEffect, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { getMovieVideos } from "../../services/getData";
import { Background, Container } from "./style";

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovieVideos(movieId));
    }
    getMovies();
  }, []);

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <FaRegWindowClose fontSize="18px" color="#11ee09" />
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="Youtube Video Player"
            height="350px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
