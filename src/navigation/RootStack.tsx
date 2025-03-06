import React from 'react';
import Prescription from '../screens/prescription';
import PrescriptionList from '../screens/prescriptionList';
import PrescriptionDetail from '../screens/prescriptionDetail'

import CameraScreen from '../screens/cameraTest';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

export type RootStackParamList = {
  Prescription: undefined;
  PrescriptionList : undefined;
  PrescriptionDetail : undefined;
  AlarmScreen : undefined;

  CameraScreen : undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AfterLogin = () => {
  return <Text>로그인 후 페이지</Text>;
};

const BeforeLogin = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ title: 'CameraScreen' }} />
      <Stack.Screen
        name="PrescriptionDetail"
        component={PrescriptionDetail}
        options={{ title: 'PrescriptionDetail' }} />
      <Stack.Screen
        name="PrescriptionList"
        component={PrescriptionList}
        options={{ title: 'PrescriptionList' }} />
      <Stack.Screen
        name="Prescription"
        component={Prescription}
        options={{ title: 'Prescription' }} />
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
