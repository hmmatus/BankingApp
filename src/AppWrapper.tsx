import React from 'react';
import App from './App';
import { PaperProvider } from 'react-native-paper';
import { theme } from './styles/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function AppWrapper() {
  return (
    <PaperProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <App />
      </GestureHandlerRootView>
    </PaperProvider>
  );
}
