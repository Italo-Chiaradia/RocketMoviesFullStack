import {Container, Content} from './styles'
import {Link, useNavigate} from 'react-router-dom'
import {Header} from '../../components/Header'
import {Button} from '../../components/Button'
import {Preview} from '../../components/Preview'
import {RiAddFill} from 'react-icons/ri'

import {useEffect, useState} from 'react';
import {api} from '../../services/api';

export function Home() {
  const navigate = useNavigate();

  const [movieNotes, setMovieNotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/movie_notes?title=${search}`);
      
      setMovieNotes(response.data);
    }

    fetchMovieNotes();
  }, [search]);

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  return (
    <Container>
      <Header search={search} setSearch={setSearch}/>
      <main>
        <Content>
          <header>
            <h2>Meus filmes</h2>
            <Link to="/new">
              <Button title="Adicionar filme" icon={RiAddFill} />
            </Link>
          </header>
          <div className="preview-container">
            {
              movieNotes && movieNotes.length > 0 ? (
                movieNotes.map((movie, index) => (
                  <Preview 
                    key={String(index)} 
                    data={movie} 
                    onClick={() => handleDetails(movie.id)}
                  />
                ))) : (
                  <p>Nenhuma nota encontrada...</p>
                )
            }
          </div>
        </Content>
      </main>
    </Container>
  )
}