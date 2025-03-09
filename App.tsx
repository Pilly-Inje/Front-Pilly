import React, { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import useFCMToken from './src/hooks/useFCMToken';
import useFCMTokenRefresh from './src/hooks/onTokenRefresh';
import useForegroundNotification from './src/hooks/useForegroundNotification';
import { requestNotificationPermission } from './utils/fcmUtils';

const App = () => {
  const fcmToken = useFCMToken();
  useForegroundNotification();
  useFCMTokenRefresh();

  useEffect(() => {
    requestNotificationPermission();

    // ✅ 토큰이 변경될 때마다 로그 출력
    if (fcmToken) {
      console.log('🔥 FCM Token:', fcmToken);
    }

    // ✅ 백그라운드에서 푸시 알림 클릭 감지
    const unsubscribeOnOpenedApp = messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('🔔 백그라운드 상태에서 알림 클릭:', remoteMessage);
      Alert.alert('백그라운드 알림 클릭!', JSON.stringify(remoteMessage, null, 2));
    });

    // ✅ 앱이 완전히 종료된 상태에서 푸시 알림 클릭 감지
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('🚀 종료된 상태에서 알림 클릭:', remoteMessage);
          Alert.alert('앱 종료 후 알림 클릭!', JSON.stringify(remoteMessage, null, 2));
        }
      });

    return () => {
      unsubscribeOnOpenedApp();
    };
  }, [fcmToken]); // 👈 **FCM 토큰이 변경될 때마다 실행됨**

  return (
    <View>
      <Text>FCM Token: {fcmToken || '불러오는 중...'}</Text>
    </View>
  );
};

export default App;
