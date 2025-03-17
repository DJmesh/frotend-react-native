import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Bem-vindo ao Black Box!</Text>
      <Button title="Entrar no App" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
