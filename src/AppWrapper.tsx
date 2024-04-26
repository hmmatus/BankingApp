import React from 'react';
import App from './App';
import { PaperProvider } from 'react-native-paper';
import { theme } from './styles/theme';

export default function AppWrapper() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
