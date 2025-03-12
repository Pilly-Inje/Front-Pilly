import React, { useEffect } from 'react';
import { View, Text, Alert, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import { requestNotificationPermission } from './utils/fcmUtils';
import AppNavigator from './src/navigation/AppNavigator';

// ✅ 알림 채널 ID
const CHANNEL_ID = 'pilly-channel';

// ✅ 알림 중복 방지를 위한 변수
let lastNotificationId = "";

const App = () => {
  useEffect(() => {
    const initializeFirebase = async () => {
      try {
        // ✅ 푸시 알림 권한 요청
        await requestNotificationPermission();

        // ✅ Android 알림 채널 생성 (필수)
        if (Platform.OS === 'android') {
          PushNotification.createChannel(
            {
              channelId: CHANNEL_ID,
              channelName: 'Pilly Notifications',
              channelDescription: '푸시 알림을 받는 채널',
              importance: 4,
              vibrate: true,
            },
            (created) => console.log(`✅ 알림 채널 생성됨: ${created}`)
          );
        }

        // ✅ 포그라운드 상태에서 메시지 수신 처리
        const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
          console.log('📩 [포그라운드] 알림 수신:', remoteMessage);

          // ✅ 중복 알림 방지 (같은 메시지가 두 번 뜨지 않도록)
          if (lastNotificationId === remoteMessage.messageId) {
            console.log("⚠️ 동일한 알림이 감지되어 무시됨");
            return;
          }
          lastNotificationId = remoteMessage.messageId || "";

          PushNotification.localNotification({
            channelId: CHANNEL_ID,
            title: remoteMessage.notification?.title || '알림',
            message: remoteMessage.notification?.body || '메시지 없음',
            playSound: true,
            soundName: 'default',
            importance: 4,
            vibrate: true,
          });
        });

        // ✅ 백그라운드 상태에서 푸시 알림 클릭 감지 (여기서는 알림 생성 X)
        const unsubscribeOnOpenedApp = messaging().onNotificationOpenedApp(remoteMessage => {
          console.log('🔔 [백그라운드] 알림 클릭:', remoteMessage);
          Alert.alert('백그라운드 알림 클릭!', JSON.stringify(remoteMessage, null, 2));
        });

        return () => {
          unsubscribeOnMessage();
          unsubscribeOnOpenedApp();
        };
      } catch (error) {
        console.error('❌ Firebase 초기화 중 오류 발생:', error);
      }
    };

    initializeFirebase();
  }, []);

  return (
    <AppNavigator />
  );
};

// ✅ `setBackgroundMessageHandler`에서 `localNotification()` 실행하지 않음!
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('📩 [백그라운드] 메시지 수신:', remoteMessage);
  // 백그라운드에서는 메시지만 처리하고 알림을 띄우지 않음.
});

export default App;
