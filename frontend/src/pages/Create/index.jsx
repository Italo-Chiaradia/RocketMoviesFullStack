import {Container, Form, Section} from './styles'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { RiArrowLeftLine } from 'react-icons/ri'
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import {MovieItem} from '../../components/MovieItem' 
import {Button} from '../../components/Button'
import {useEffect, useState} from 'react';
import {api} from '../../services/api';

export function Create() {
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    if (location.state?.movieNote) {
      const {title, rating, description, movie_tags} = location.state.movieNote;
      setTitle(title);
      setRating(rating);
      setDescription(description);
      setTags(movie_tags.map(tag => tag.name) || []);

    }
  }, [location.state])


  function handleTags() {
    setTags(prevTags => [...prevTags, newTag]);
    
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevTags => prevTags.filter(tag => tag !== deleted));
  }

  async function handleDeleteMovieNote() {
    if (location.state?.movieNote) {
      if (window.confirm("Tem certeza que deseja excluir esta nota?")) {
        await api.delete(`/movie_notes/${location.state.movieNote.id}`);
        alert("Nota excluída com sucesso!");
      }
    } 
    navigate("/");
  }

  async function handleSaveMovieNote() {
    if (!title) {
      return alert("Digite o título do filme!");
    }

    if (!rating) {
      return alert("Digite o rating do filme!");
    }

    if (newTag) {
      return alert("Há tags que não foram adicionadas!");
    }
    
    const method = location.state?.movieNote ? 'put' : 'post';
    const endpoint = location.state?.movieNote
      ? `/movie_notes/${location.state.movieNote.id}`
      : '/movie_notes';

    await api[method](endpoint, {
      title,
      rating,
      description,
      tags
    });

    alert(`Nota ${location.state?.movieNote ? "atualizada" : "criada"} com sucesso!`);
    navigate(-1);
  }

  return (
    <Container>
      <Header/>
      <Form>  
        <div>
          <header>
            <Link to="/">
              <RiArrowLeftLine/>
              Voltar
            </Link>
            <h2>
              Novo filme
            </h2>
          </header>
          <div className="flex-container">
            <Input 
              type="text"
              placeholder="Título"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              type="text"
              value={rating}
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)}
            />
          </div>
          <Textarea 
            placeholder="Observações"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Section>
            <h3>Marcadores</h3>
            <div className="tags-container">
              {
                tags && tags.map((tag, index) => (
                  <MovieItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <MovieItem
                placeholder="Novo marcador"
                isNew
                value={newTag}
                onClick={handleTags}
                onChange={e => setNewTag(e.target.value)}
              />
            </div>
          </Section> 
          <footer>
            <Button 
              title="Excluir filme" 
              className="remove-btn"
              onClick={handleDeleteMovieNote}
            />
            <Button 
              title="Salvar alterações" 
              onClick={handleSaveMovieNote}/>
          </footer>
        </div>
        
      </Form>
    </Container>
  )
}