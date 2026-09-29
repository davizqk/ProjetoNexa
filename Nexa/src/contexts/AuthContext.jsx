import React, {
  createContext,
  useContext,
  useState,
} from "react";

import api from "../services/api.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(false);

  // Cadastra um usuário na API
  async function cadastrarUsuario(nome, email, senha) {
    try {
      const nomeLimpo = nome.trim();
      const emailLimpo = email.trim().toLowerCase();

      if (!nomeLimpo || !emailLimpo || !senha) {
        return {
          sucesso: false,
          mensagem: "Preencha todos os campos.",
        };
      }

      if (senha.length < 6) {
        return {
          sucesso: false,
          mensagem: "A senha deve ter pelo menos 6 caracteres.",
        };
      }

      // Busca os usuários cadastrados
      const respostaUsuarios = await api.get("/usuarios");

      const usuarios = respostaUsuarios.data;

      // Verifica se o e-mail já foi cadastrado
      const emailExiste = usuarios.some(
        (item) =>
          item.email.toLowerCase() === emailLimpo
      );

      if (emailExiste) {
        return {
          sucesso: false,
          mensagem: "Este e-mail já está cadastrado.",
        };
      }

      const novoUsuario = {
        nome: nomeLimpo,
        email: emailLimpo,
        senha,
        usuario: emailLimpo.split("@")[0],
        bio: "Olá! Estou usando o Nexa.",
        seguidores: 0,
        seguindo: 0,
      };

      // Envia o novo usuário para o db.json
      const resposta = await api.post(
        "/usuarios",
        novoUsuario
      );

      return {
        sucesso: true,
        mensagem: "Cadastro realizado com sucesso.",
        usuario: resposta.data,
      };
    } catch (error) {
      console.log("Erro ao cadastrar usuário:", error);

      return {
        sucesso: false,
        mensagem: "Não foi possível realizar o cadastro.",
      };
    }
  }

  // Realiza login consultando o db.json
  async function login(email, senha) {
    try {
      setCarregando(true);

      const emailLimpo = email.trim().toLowerCase();

      const resposta = await api.get("/usuarios", {
        params: {
          email: emailLimpo,
          senha,
        },
      });

      const usuariosEncontrados = resposta.data;

      if (usuariosEncontrados.length === 0) {
        return {
          sucesso: false,
          mensagem: "E-mail ou senha incorretos.",
        };
      }

      const usuarioEncontrado = usuariosEncontrados[0];

      // Guarda o usuário somente enquanto o app estiver aberto
      setUsuario(usuarioEncontrado);

      return {
        sucesso: true,
        mensagem: "Login realizado com sucesso.",
        usuario: usuarioEncontrado,
      };
    } catch (error) {
      console.log("Erro ao realizar login:", error);

      return {
        sucesso: false,
        mensagem: "Não foi possível realizar o login.",
      };
    } finally {
      setCarregando(false);
    }
  }

  // Encerra a sessão
  function logout() {
    setUsuario(null);

    return {
      sucesso: true,
      mensagem: "Você saiu da conta.",
    };
  }

  // Atualiza o perfil no db.json
  async function atualizarPerfil(dadosAtualizados) {
    try {
      if (!usuario) {
        return {
          sucesso: false,
          mensagem: "Nenhum usuário está logado.",
        };
      }

      const resposta = await api.patch(
        `/usuarios/${usuario.id}`,
        dadosAtualizados
      );

      setUsuario(resposta.data);

      return {
        sucesso: true,
        mensagem: "Perfil atualizado com sucesso.",
        usuario: resposta.data,
      };
    } catch (error) {
      console.log("Erro ao atualizar perfil:", error);

      return {
        sucesso: false,
        mensagem: "Não foi possível atualizar o perfil.",
      };
    }
  }

  const valorContexto = {
    usuario,
    estaLogado: usuario !== null,
    carregando,
    cadastrarUsuario,
    login,
    logout,
    atualizarPerfil,
  };

  return (
    <AuthContext.Provider value={valorContexto}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const contexto = useContext(AuthContext);

  if (!contexto) {
    throw new Error(
      "useAuth deve ser utilizado dentro de um AuthProvider."
    );
  }

  return contexto;
}