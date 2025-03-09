import messaging from '@react-native-firebase/messaging';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

const useFCMToken = () => {
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await messaging().getToken();
        if (token) {
          console.log('🔥 FCM Token:', token);
          setFcmToken(token);
          // 👉 필요하면 서버로 토큰 전송
          // sendTokenToServer(token);
        }
      } catch (error) {
        console.error('❌ FCM Token 가져오기 실패:', error);
      }
    };

    fetchToken();
  }, []);

  return fcmToken;
};

export default useFCMToken;
