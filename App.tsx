import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';

import { Inicio } from './src/components/pages/Inicio';

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <StatusBar style="auto" />
      <Inicio />
    </>
  );
};

export default App;
