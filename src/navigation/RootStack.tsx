import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

import Home from '../screens/Home'
import PrescriptionList from "../screens/prescription/PrescriptionListScreen"
import PrescriptionDetail from '../screens/prescription/PrescriptionDetailScreen';
import PrescriptionSetupScreen from '../screens/prescription/PrescriptionSetupScreen';
import CameraScreen from '../screens/alarm/CameraScreen';

export type RootStackParamList = {
  Home : undefined;
  PrescriptionSetupScreen: undefined;
  PrescriptionList : undefined;
  PrescriptionDetail : undefined;
  CameraScreen : undefined;
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
      <Stack.Screen
        name="PrescriptionSetupScreen"
        component={PrescriptionSetupScreen}
        options={{ title: 'PrescriptionSetupScreen' }} />
      <Stack.Screen
      name="CameraScreen"
      component={CameraScreen}
      options={{ title: 'CameraScreen' }} />
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