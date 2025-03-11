import { AppRegistry, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import App from './App';
import { name as appName } from './app.json';

// ✅ PushNotification 설정
PushNotification.configure({
  onRegister: function (token) {
    console.log('🔑 푸시 토큰 등록:', token);
  },
  onNotification: function (notification) {
    console.log('📩 알림 수신:', notification);
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});

// ✅ 백그라운드 메시지 수신 시 알림 띄우기
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('📩 [백그라운드] 메시지 수신:', remoteMessage);

  PushNotification.localNotification({
    channelId: 'pilly-channel',
    title: remoteMessage.notification?.title || '알림',
    message: remoteMessage.notification?.body || '메시지 없음',
    playSound: true,
    soundName: 'default',
  });
});

// ✅ 헤드리스 태스크 등록 (앱 종료 후 푸시 알림 수신)
AppRegistry.registerHeadlessTask(
  'ReactNativeFirebaseMessagingHeadlessTask',
  () => async remoteMessage => {
    console.log('📩 [헤드리스] 메시지 수신:', remoteMessage);

    PushNotification.localNotification({
      channelId: 'pilly-channel',
      title: remoteMessage.notification?.title || '알림',
      message: remoteMessage.notification?.body || '메시지 없음',
      playSound: true,
      soundName: 'default',
    });

    return Promise.resolve();
  }
);

// ✅ 앱 실행 등록
AppRegistry.registerComponent(appName, () => App);
