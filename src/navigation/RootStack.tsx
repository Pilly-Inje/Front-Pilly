import React from 'react';
import Prescription from '../screens/prescription';
import PrescriptionList from '../screens/prescriptionList';
import AlarmScreen from '../screens/alarmList'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

export type RootStackParamList = {
  Prescription: undefined;
  PrescriptionList : undefined;
  AlarmScreen : undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const BeforeLogin = () => {
  return <Text>로그인 후 페이지</Text>;
};

const AfterLogin = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AlarmScreen"
        component={AlarmScreen}
        options={{ title: 'AlarmScreen' }} />
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
  // TODO : 로그인 여부 확인 수정
  const isLoggedIn = true; 
  return (
    <NavigationContainer>
      {isLoggedIn ? <AfterLogin /> : <BeforeLogin />}
    </NavigationContainer>
  );
};

export default RootStack;  
