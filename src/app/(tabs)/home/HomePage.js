// src/app/(tabs)/home/HomePage.js
import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
          Bem-vindo ao Black Box!
        </Text>

        <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20 }}>
          A iniciativa Black Box é um projeto criado por:
        </Text>

        <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20 }}>
          Nosso objetivo é registrar ocorrências de danos ou problemas em cidades,
          permitindo aos usuários tirar fotos, registrar pontos específicos e criar
          um mapa de calor que indique onde esses problemas ocorrem com mais frequência.
        </Text>

        <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 40 }}>
          Participe você também, ajude a tornar nossa cidade melhor e mais segura!
        </Text>

        <View style={{ width: '100%', marginBottom: 10 }}>
          <Button
            title="Entrar no App"
            onPress={() => navigation.navigate('Login')}
          />
        </View>

        <View style={{ width: '100%' }}>
          <Button
            title="Criar Conta"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </ScrollView>
  );
}
