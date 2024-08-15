import {Container, Form, Background} from './styles'
import {Link} from 'react-router-dom'
import {RiMailFill, RiLockLine} from 'react-icons/ri'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import {useAuth} from "../../hook/auth"
import {useState} from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const {signIn} = useAuth();

  function handleSignIn() {
    signIn({email, password});
  }

  return (
    <Container>
      <Form>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h2>Faça seu login</h2>
          <Input
            type="email"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
            icon={RiMailFill}
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
            icon={RiLockLine}
          />
          <Button
            title="Entrar"
            onClick={handleSignIn}
          />
          <Link to="/register">Criar conta</Link>
        </div>
      </Form>
      <Background>

      </Background>
    </Container>
  )
}