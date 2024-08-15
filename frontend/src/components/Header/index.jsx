import {Container, Profile, ProfileImg} from './styles'
import {Input} from '../Input'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import {useState, useEffect} from 'react';
import {useAuth} from '../../hook/auth';
import {api} from '../../services/api';

export function Header({search, setSearch}) {
  const {signOut, user} = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input 
        placeholder="Pesquisar pelo título" 
        onChange={e => setSearch(e.target.value)}/>
      <Profile>
        <div>
          <strong>{user.name}</strong>
          <span onClick={handleSignOut}>sair</span>
        </div>
        <ProfileImg to="/profile">
          <img src={avatarUrl} alt="Foto de perfil" />
        </ProfileImg>
      </Profile>
    </Container>
  )
}