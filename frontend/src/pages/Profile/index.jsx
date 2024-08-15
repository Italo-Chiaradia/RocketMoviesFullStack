import {Container, Form, Avatar} from './styles'
import {RiArrowLeftLine, RiUser2Line, RiMailFill, RiLockLine, RiCamera2Line} from 'react-icons/ri'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {Link} from 'react-router-dom';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import {useState} from 'react';
import { useAuth } from '../../hook/auth';
import {api} from '../../services/api';

export function Profile() {
  const {updateUser, user} = useAuth();

  
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  
  const isButtonDisabled = !name && !email && !oldPassword && !password;
  
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);
  
  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);
    
    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }
  
  function handleUpdate() {
    const updated = {
      name, 
      email,
      password: passwordNew,
      old_password: oldPassword
    };
    const userUpdated = Object.assign(user, updated);
    return updateUser({user: userUpdated, avatarFile});
  }
  return(
    <Container>
      <header>
        <Link to="/">
          <RiArrowLeftLine/>
          Voltar
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="Foto de perfil" />
          <label htmlFor="avatar">
            <RiCamera2Line/>
            <input 
              id="avatar" 
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
        <div className="input-group">
          <Input
            type="text"
            placeholder="Nome"
            name={name}
            value={name}
            onChange={e => setName(e.target.value)}
            icon={RiUser2Line}
          />
          <Input
            type="email"
            placeholder="E-mail"
            name={email}
            value={email}
            onChange={e => setEmail(e.target.value)}
            icon={RiMailFill}
          />
        </div>
        <div className="input-group">
          <Input
            type="password"
            placeholder="Senha atual"
            name={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            icon={RiLockLine}
          />
          <Input
            type="password"
            placeholder="Nova senha"
            name={passwordNew}
            onChange={e => setPasswordNew(e.target.value)}
            icon={RiLockLine}
          />
        </div>
        <div className="input-group">
          <Button
            title="Salvar"
            disabled = {isButtonDisabled}
            onClick={handleUpdate}
          />
        </div>
      </Form>
    </Container>
  )
}