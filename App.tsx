import React, { useEffect } from 'react';
import { View, Text, Alert, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { firebase } from '@react-native-firebase/app';
import PushNotification from 'react-native-push-notification';
import { requestNotificationPermission } from './utils/fcmUtils';

// ✅ 알림 채널 ID
const CHANNEL_ID = 'pilly-channel';

const App = () => {
  useEffect(() => {
    const initializeFirebase = async () => {
      try {
        // ✅ Firebase 초기화 확인
        if (!firebase.apps.length) {
          console.log('🔥 Firebase 초기화');
          await firebase.initializeApp();
        }

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

        // ✅ 앱이 종료된 상태에서 알림 클릭 감지
        const remoteMessage = await messaging()?.getInitialNotification();
        if (remoteMessage) {
          console.log('🚀 [앱 종료 후] 알림 클릭:', remoteMessage);
          Alert.alert('앱 종료 후 알림 클릭!', JSON.stringify(remoteMessage, null, 2));
        } else {
          console.log('ℹ️ 초기 알림 없음');
        }

        // ✅ 포그라운드 상태에서 메시지 수신 처리
        const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
          console.log('📩 [포그라운드] 알림 수신:', remoteMessage);

          PushNotification.localNotification({
            channelId: CHANNEL_ID, // 🔥 채널 ID 지정 필수
            title: remoteMessage.notification?.title || '알림',
            message: remoteMessage.notification?.body || '메시지 없음',
            playSound: true,
            soundName: 'default',
            importance: 4,
            vibrate: true,
          });
        });

        // ✅ 백그라운드 상태에서 푸시 알림 클릭 감지
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
    <View>
      <Text>🔥 Firebase 푸시 알림 테스트</Text>
    </View>
  );
};

export default App;
