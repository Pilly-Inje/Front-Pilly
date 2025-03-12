import React from 'react';
import Home from '../screens/home'
import PrescriptionList from "../screens/prescriptionList"
import PrescriptionDetail from '../screens/prescriptionDetail';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

export type RootStackParamList = {
  Home : undefined;
  Prescription: undefined;
  PrescriptionList : undefined;
  PrescriptionDetail : undefined;
  AlarmScreen : undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AfterLogin = () => {
  return <Text>로그인 후 페이지</Text>;
};

const BeforeLogin = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }} />
      <Stack.Screen
        name="PrescriptionList"
        component={PrescriptionList}
        options={{ title: 'PrescriptionList' }} />
      <Stack.Screen
        name="PrescriptionDetail"
        component={PrescriptionDetail}
        options={{ title: 'PrescriptionDetail' }} />
    </Stack.Navigator>
);

const RootStack: React.FC = () => {  
  const isLoggedIn = false; 
  return (
    <NavigationContainer>
      {isLoggedIn ? <AfterLogin /> : <BeforeLogin />}
    </NavigationContainer>
  );
};

export default RootStack;  