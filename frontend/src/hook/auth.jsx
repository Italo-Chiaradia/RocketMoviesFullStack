import {createContext, useContext, useState, useEffect} from 'react';
import {api} from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [data, setData] = useState({});

  async function signIn({email, password}) {
    try {
      const response = await api.post("/sessions", {email, password});
      const {user, token} = response.data;
  
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
  
      console.log({user, token});
      
      setData({user, token});
    } catch(error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");

    setData({});
  }

  async function updateUser({user, avatarFile}) {
    console.log(user.password);
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }
      await api.put("/users", user);
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));

      setData({user, token: data.token});
      alert("Usuário atualizado com sucesso!");
    } catch(error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o usuário!");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketmovies:user");
    const token = localStorage.getItem("@rocketmovies:token");

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({user: JSON.parse(user), token});
    }
  }, []);


  return (
    <AuthContext.Provider value={{
      signIn,
      signOut, 
      updateUser,
      user: data.user}}>
      {children}
    </AuthContext.Provider>  
  )
}

function useAuth() {
  const data = useContext(AuthContext);
  return data;
}

export {AuthProvider, useAuth};