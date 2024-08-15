import {Container, Content} from './styles'
import {Link, useParams, useNavigate} from 'react-router-dom'
import { RiArrowLeftLine, RiStarFill, RiStarLine, RiTimeLine } from 'react-icons/ri'
import {Header} from '../../components/Header'
import {Tag} from '../../components/Tag'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useAuth } from '../../hook/auth'
import {useState, useEffect} from 'react';
import {api} from '../../services/api';

export function Details() {
  const {user} = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState("");
  const [updatedAt, setUpdatedAt] = useState(""); 
  const params = useParams();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/movie_notes/${params.id}`);
      
      setUpdatedAt(formatUpdateTime(response.data.updated_at));
      setData(response.data);
    }

    fetchMovieNotes();
  }, []);

  function renderStars(stars) {
    const totalStars = 5;
    // Verifique se stars é um número válido e dentro do intervalo
    const validStars = Math.max(0, Math.min(totalStars, Math.floor(stars)));

    const starElements = [];
    for (let i = 0; i < totalStars; i++) {
      if (i < validStars) {
        starElements.push(<span key={`filled-${i}`}><RiStarFill /></span>);
      } else {
        starElements.push(<span key={`empty-${i}`}><RiStarLine /></span>);
      }
    }

    return <>{starElements}</>;
  }
  function formatUpdateTime(str) {
    const date = formatDate(str.split(" ")[0]);
    const time = formatTime(str.split(" ")[1]);

    return `${date} às ${time}`;
  }
  function formatDate(str) {
      const arr = str.split("-");
      const year = arr[0].slice(2);
      const month = arr[1];
      const date = arr[2];
      
      return [date, month, year].join("/");
  }
  function formatTime(str) {
      return str.slice(0,5);
  }

  function handleUpdateMovieNote() {
    navigate("/new", {state: {movieNote: data}});
  }
  return(
    <Container>
      <Header/>
      <Content>
        <header>
          <Link to="/">
            <RiArrowLeftLine />
            Voltar
          </Link>
          <div className="title-link">
            <div className='flex-container title'>
              <h1>
                {data.title}
              </h1>
              <div className="stars-container">
                {renderStars(data.rating)} {/* Utiliza data.rating diretamente */}
              </div>
            </div>
            <a onClick={handleUpdateMovieNote}>Editar nota</a>
          </div>

          <div className='flex-container'>
            <div className='createdBy'>
              <img src={avatarUrl} alt="Foto de perfil" />
              Por {user.name}
            </div>
            <div className='date'>
              <RiTimeLine/>
              {updatedAt} 
            </div>
          </div>
        </header>
        <div className="tags-container">
          {
            data.movie_tags && data.movie_tags.map(tag => (
              <Tag 
                key={String(tag.id)}
                title={tag.name}
              />
            ))
          }
        </div>
        <p>
          {data.description}
        </p> 
      </Content>
    </Container>
  )
}