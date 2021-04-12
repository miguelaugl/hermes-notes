import React from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
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
    <View style={{ paddingTop: Constants.statusBarHeight, flex: 1 }}>
      <StatusBar style="auto" />
      <Inicio />
    </View>
  );
};

export default App;
