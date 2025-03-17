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
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Acesse sua conta</Text>

      <TextInput 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        style={{ marginBottom: 15, borderBottomWidth: 1, padding: 8 }}
      />
      <TextInput 
        placeholder="Senha" 
        secureTextEntry
        value={senha} 
        onChangeText={setSenha} 
        style={{ marginBottom: 15, borderBottomWidth: 1, padding: 8 }}
      />

      {error && (
        <Text style={{ color: 'red', marginBottom: 15 }}>
          Erro ao logar. Verifique suas credenciais.
        </Text>
      )}

      <Button
        title={loading ? 'Carregando...' : 'Login'}
        onPress={handleLogin}
        disabled={loading}
      />

      <View style={{ marginTop: 20 }}>
        <Text style={{ marginBottom: 8 }}>Não tem conta?</Text>
        <Button
          title="Criar Conta"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
}
