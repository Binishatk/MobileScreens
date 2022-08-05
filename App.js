

 import React from 'react';

 
  import {
  View,
 
    StyleSheet,
  
  } from 'react-native';
  import AppContainer from './src/AppContainer';
 
  
 
  
  const App= () => {
 
  
  
  
    return (
      <>
      <AppContainer/>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
  
  export default App;
  