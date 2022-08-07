

 import React from 'react';

 
 import {
 View,

   StyleSheet,
 
 } from 'react-native';
 import LoginScreen from './screens/authentication/LoginScreen';
import Register from './screens/authentication/Register';
import Payment from './screens/payment/Payment';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import Home from './screens/home/Home';
const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
            headerShown: false,
           
          }}/>
      <Tab.Screen name="payment" component={Payment} options={{
            headerShown: false,
           
          }}/>
    </Tab.Navigator>
  );
}
 const AppContainer= () => {

 
 
 
   return (
     <>
     
  
 <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{
            headerShown: false,
           
          }}/>
        <Stack.Screen name="Register" component={Register}   options={{
            headerShown: false,
           
          }}/>
        
          <Stack.Screen name="HomeTab" component={MyTabs}   options={{
            headerShown: false,
           
          }} />
           
      </Stack.Navigator>
    </NavigationContainer>
     </>
   );
 };
 
 const styles = StyleSheet.create({

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
 
 export default AppContainer;
 