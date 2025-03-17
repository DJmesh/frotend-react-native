import api, { setAuthToken } from './api';
import { API_URL } from '../config/constants';

export const login = async (email, senha) => {
  const url = `${API_URL}/auth/login`;
  console.log('🔍 Tentando acessar:', url);

  try {
    const response = await api.post('/auth/login', { email, senha });
    const { token } = response.data;

    console.log(' Token recebido:', token);
    setAuthToken(token);

    return token;
  } catch (error) {
    if (error.response) {
      console.error(' Erro na resposta da API:', error.response.data);
    } else if (error.request) {
      console.error(' Sem resposta da API. Requisição feita para:', url);
      console.error('Detalhes do erro:', error.message);
    } else {
      console.error(' Erro inesperado:', error.message);
    }

    throw error;
  }
};
