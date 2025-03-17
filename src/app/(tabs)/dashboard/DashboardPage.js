import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DashboardPage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Página Dashboard após login!</Text>
      <Button title="Sair" onPress={() => navigation.replace('Home')} />
    </View>
  );
}
