import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from '../routes/StackRoutes';
import { AuthProvider } from '../store/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <StackRoutes />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
