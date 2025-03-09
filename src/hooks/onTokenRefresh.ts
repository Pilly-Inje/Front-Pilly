import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';

const useFCMTokenRefresh = () => {
  useEffect(() => {
    const unsubscribe = messaging().onTokenRefresh(async (token) => {
      console.log('🔄 새 FCM Token:', token);
      // 👉 필요하면 서버로 토큰 전송
      // sendTokenToServer(token);
    });

    return unsubscribe;
  }, []);
};

export default useFCMTokenRefresh;
