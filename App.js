import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';


import Routes from './src/router';

export default function App() {

  /*let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });


  if(!fontsLoaded){
    return <AppLoading />;
  }*/


  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes/>
    </>
  );
}