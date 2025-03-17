import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import useAuth from '../../../hooks/useAuth';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login, loading, error } = useAuth();

  const handleLogin = async () => {
    try {
      await login(email, senha);
      navigation.replace('Dashboard');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        style={{ marginBottom: 15, borderBottomWidth: 1 }}
      />
      <TextInput 
        placeholder="Senha" 
        secureTextEntry
        value={senha} 
        onChangeText={setSenha} 
        style={{ marginBottom: 15, borderBottomWidth: 1 }}
      />
      {error && <Text style={{ color: 'red' }}>Erro ao logar</Text>}
      <Button title={loading ? 'Carregando...' : 'Login'} onPress={handleLogin} disabled={loading} />
    </View>
  );
}
