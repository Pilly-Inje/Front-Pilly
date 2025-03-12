import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStack";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Button 
        title="📷 약봉투 사진 촬영"
        onPress={() => navigation.navigate("CameraScreen")}
      />
      <Button 
        title="✍️ 직접 입력"
        onPress={() => navigation.navigate("PrescriptionSetupScreen")}
      />
      <Button 
        title="📜 처방전 확인하기"
        onPress={() => navigation.navigate("PrescriptionList")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});

export default HomeScreen;
