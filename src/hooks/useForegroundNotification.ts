import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

const useForegroundNotification = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('📩 포그라운드 알림 수신:', remoteMessage);
      Alert.alert('포그라운드 알림!', JSON.stringify(remoteMessage, null, 2));
    });

    return unsubscribe;
  }, []);
};

export default useForegroundNotification;
