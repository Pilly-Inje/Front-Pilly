import { useEffect, useState } from 'react';
import { Platform, Alert } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const usePermissions = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  useEffect(() => {
    const checkPermission = async () => {
      const permission =
        Platform.OS === 'android' ? PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA;

      const result = await check(permission);

      if (result === RESULTS.GRANTED) {
        setHasCameraPermission(true);
      } else {
        const requestResult = await request(permission);
        setHasCameraPermission(requestResult === RESULTS.GRANTED);
      }
    };

    checkPermission().catch(error => {
      console.error('권한 확인 중 오류 발생:', error);
      Alert.alert('오류', '권한 확인 중 문제가 발생했습니다.');
    });
  }, []);

  return hasCameraPermission;
};

export default usePermissions;