import React, { useState } from 'react';
import { View, Button, Image, Alert } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import usePermissions from '../hooks/userPermission';

const CameraScreen = () => {
  const hasPermission = usePermissions();
  const [photo, setPhoto] = useState<string | null>(null);

  const takePhoto = async () => {
    if (!hasPermission) {
      Alert.alert('권한 필요', '카메라 권한이 필요합니다.');
      return;
    }

    launchCamera(
      { mediaType: 'photo', quality: 0.8, includeBase64: false },
      response => {
        if (response.didCancel) {
          console.log('사용자가 취소함');
        } else if (response.errorMessage) {
          console.error('에러 발생:', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          setPhoto(uri);
        }
      }
    );
  };

  return (
    <View>
      <Button title="📷 사진 찍기" onPress={takePhoto} />
      {photo && <Image source={{ uri: photo }} style={{ width: 200, height: 200, marginTop: 20 }} />}
    </View>
  );
};

export default CameraScreen;
