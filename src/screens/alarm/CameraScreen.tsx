import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator, Text, StyleSheet, Alert } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import usePermissions from '../../hooks/userCameraPermision';

const CameraScreen = () => {
  const navigation = useNavigation();
  const hasPermission = usePermissions(); // 🔥 권한 확인
  const [photo, setPhoto] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [permissionChecked, setPermissionChecked] = useState(false);

  useEffect(() => {
    if (!permissionChecked) {
      if (hasPermission) {
        setPermissionChecked(true); // ✅ 권한이 확인되었으므로 다시 체크하지 않음
        takePhoto();
      } 
    }
  }, [hasPermission]);

  const takePhoto = async () => {
    launchCamera(
      { mediaType: 'photo', quality: 0.8, includeBase64: false },
      response => {
        if (response.didCancel) {
          console.log('사용자가 취소함');
          navigation.goBack();
        } else if (response.errorMessage) {
          console.error('에러 발생:', response.errorMessage);
          Alert.alert('에러', '사진을 촬영할 수 없습니다.');
          navigation.goBack();
        } else if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          setPhoto(uri);
          setLoading(true);

          //TODO: 서버에 이미지 전송 (현재는 `setTimeout`으로 3초 지연)
          setTimeout(() => {
            setLoading(false);
            const mockData = { success: true, medicines: ["다이크로짇정", "삼진디아제팜정 2mg", "아미세타정 325mg"] };

            if (mockData.success) {
              console.log('📩 응답 데이터:', mockData);
              navigation.replace('PrescriptionSetupScreen', { medicines: mockData.medicines });
            } else {
              Alert.alert('인식 실패', '약을 인식하지 못했습니다.');
              navigation.goBack();
            }
          }, 3000);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0169CD" />
          <Text style={styles.loadingText}>처방전 인식 중...</Text>
        </View>
      ) : (
        photo && <Image source={{ uri: photo }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200, marginTop: 20 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 10, fontSize: 16, fontWeight: 'bold' },
});

export default CameraScreen;
