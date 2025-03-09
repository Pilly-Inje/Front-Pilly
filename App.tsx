import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import useFCMToken from './src/hooks/useFCMToken';
import useFCMTokenRefresh from './src/hooks/onTokenRefresh';
import { requestNotificationPermission } from './utils/fcmUtils';

const App = () => {
  const fcmToken = useFCMToken();
  useFCMTokenRefresh();

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <View>
      <Text>FCM Token: {fcmToken || '불러오는 중...'}</Text>
    </View>
  );
};

export default App;
