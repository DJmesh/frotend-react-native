import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { registerUser } from '../../../services/authService';

export default function RegisterPage({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState(null);

  const handleRegister = async () => {
    setLoading(true);
    setErro(null);
    setMensagem('');
    try {
      const data = await registerUser(nome, email, senha);
      // Se der certo, data.message = "Usuário cadastrado com sucesso"
      setMensagem(data.message);
      // Redirecionar para a tela de login após alguns segundos ou imediatamente
      setTimeout(() => {
        navigation.navigate('Login');
      }, 1500);
    } catch (error) {
      setErro(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Criar Conta</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={{ marginBottom: 15, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 15, borderBottomWidth: 1 }}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={{ marginBottom: 15, borderBottomWidth: 1 }}
      />

      {erro && (
        <Text style={{ color: 'red', marginBottom: 15 }}>
          Erro ao cadastrar. Verifique seus dados.
        </Text>
      )}
      {mensagem && (
        <Text style={{ color: 'green', marginBottom: 15 }}>
          {mensagem}
        </Text>
      )}

      <Button
        title={loading ? 'Cadastrando...' : 'Cadastrar'}
        onPress={handleRegister}
        disabled={loading}
      />
    </View>
  );
}
