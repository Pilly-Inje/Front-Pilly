import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useRoute } from "@react-navigation/native";

const PrescriptionDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { prescription } = route.params || {}; // 🔥 `route.params`가 없을 경우 대비

  const [memo, setMemo] = useState("");

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack(); // 🔥 이전 화면이 있을 경우에만 실행
    } else {
      navigation.navigate("Home"); // 🔥 이전 화면이 없을 경우 홈으로 이동
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* 🔹 네비게이션 바 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>처방전/약봉투 상세보기</Text>
      </View>

      {/* 🔹 날짜 (데이터가 없을 경우 대비) */}
      <Text style={styles.date}>{prescription?.date || "날짜 정보 없음"}</Text>

      {/* 🔹 처방전 이미지 (데이터가 없을 경우 대비) */}
      {prescription?.image ? (
        <Image source={{ uri: prescription.image }} style={styles.image} />
      ) : (
        <Text style={styles.noImageText}>이미지 없음</Text>
      )}

      {/* 🔹 약 정보 리스트 */}
      <Text style={styles.sectionTitle}>처방받은 약</Text>
      {prescription?.medicinesList && prescription.medicinesList.length > 0 ? (
        prescription.medicinesList.map((medicine, index) => (
          <View key={index} style={styles.medicineCard}>
            <Image source={{ uri: medicine.image }} style={styles.medicineImage} />
            <View style={styles.medicineInfo}>
              <Text style={styles.medicineType}>전문</Text>
              <Text style={styles.medicineName}>{medicine.name}</Text>
              <Text style={styles.medicineCompany}>{medicine.company}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noMedicineText}>처방된 약 정보 없음</Text>
      )}

      {/* 🔹 메모 입력 */}
      <Text style={styles.sectionTitle}>메모</Text>
      <TextInput
        style={styles.memoInput}
        placeholder="메모를 입력하세요"
        value={memo}
        onChangeText={setMemo}
        multiline
      />
      <TouchableOpacity style={styles.memoButton}>
        <Text style={styles.memoButtonText}>메모 저장하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// ✅ 기존 스타일 유지
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 0,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  noImageText: {
    textAlign: "center",
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  medicineCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  medicineImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  medicineInfo: {
    flex: 1,
  },
  medicineType: {
    fontSize: 12,
    color: "#007AFF",
    fontWeight: "bold",
  },
  medicineName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  medicineCompany: {
    fontSize: 12,
    color: "#555",
  },
  noMedicineText: {
    textAlign: "center",
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  memoInput: {
    backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: "top",
  },
  memoButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  memoButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PrescriptionDetailScreen;
