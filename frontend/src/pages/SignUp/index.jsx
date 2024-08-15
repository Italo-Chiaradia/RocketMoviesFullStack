import {Container, Form, Background} from './styles'
import {Link, useNavigate} from 'react-router-dom'
import {RiMailFill, RiLockLine, RiUser2Line, RiArrowLeftLine} from 'react-icons/ri'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import {useState} from 'react';
import {api} from '../../services/api';

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }
    api.
      post("/users", {name, email, password})
      .then(() => {
        alert("Usuário criado com sucesso!");
        navigate(-1);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar!");
        }
      });
  }

  return (
    <Container>
      <Form>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h2>Crie sua conta</h2>
          <Input
            type="text"
            placeholder="Nome"
            icon={RiUser2Line}
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="E-mail"
            icon={RiMailFill}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            icon={RiLockLine}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            title="Cadastrar"
            onClick={handleSignUp}
          />
          <Link to="/">
            <RiArrowLeftLine/>
            Voltar para o login
          </Link>
        </div>
      </Form>
      <Background>

      </Background>
    </Container>
  )
}