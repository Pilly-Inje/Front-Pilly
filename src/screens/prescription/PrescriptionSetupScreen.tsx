import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PrescriptionSetupScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // ✅ 처방전 정보 초기화
  const prescription = route.params?.prescription || { medicinesList: [] };

  // ✅ 약 목록 및 입력 필드 상태
  const [medicineList, setMedicineList] = useState(prescription.medicinesList || []);
  const [selectedMedicines, setSelectedMedicines] = useState<boolean[]>(
    prescription.medicinesList?.map(() => true) || []
  );
  const [medicineInput, setMedicineInput] = useState("");

  // ✅ 새로운 약이 추가되었을 때 상태 업데이트
  useEffect(() => {
    if (route.params?.newMedicine) {
      setMedicineList((prev) => [...prev, route.params.newMedicine]);  // ✅ 객체 중첩 제거
      setSelectedMedicines((prev) => [...prev, true]);
    }
  }, [route.params?.newMedicine]);
  

  // ✅ 체크박스 상태 변경 함수
  const toggleMedicineSelection = (index: number) => {
    setSelectedMedicines((prev) => {
      const updatedSelection = [...prev];
      updatedSelection[index] = !updatedSelection[index];
      return updatedSelection;
    });
  };

  // ✅ 직접 입력한 약 추가
  const addMedicineManually = () => {
    if (medicineInput.trim() !== "") {
      setMedicineList((prev) => [...prev, { name: medicineInput.trim() }]);
      setSelectedMedicines((prev) => [...prev, true]); // 체크된 상태로 추가
      setMedicineInput(""); // 입력 필드 초기화
    }
  };

  // ✅ 약 삭제 기능
  const removeMedicine = (index: number) => {
    setMedicineList((prev) => prev.filter((_, i) => i !== index));
    setSelectedMedicines((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ScrollView style={styles.container}>
      {/* 🔹 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>직접 약 등록하기</Text>
      </View>

      {/* 🔹 약 추가 입력창 */}
      <Text style={styles.subtitle}>약 이름을 추가해주세요.</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="예) 타이레놀, 감기약"
          value={medicineInput}
          onChangeText={setMedicineInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={addMedicineManually}>
          <Text style={styles.addButtonText}>추가</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 추가된 약 리스트 (체크박스 포함) */}
      {medicineList.length > 0 && (
        <View style={styles.medicineListContainer}>
          {medicineList.map((medicine, index) => (
            <View key={index} style={styles.medicineItem}>
              <Checkbox.Android
                status={selectedMedicines[index] ? "checked" : "unchecked"}
                onPress={() => toggleMedicineSelection(index)}
                color="#007AFF"
              />
              <Text style={styles.medicineText}>{medicine.name}</Text>
              <TouchableOpacity onPress={() => removeMedicine(index)}>
                <Icon name="close-circle" size={20} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      {/* 🔹 약 검색 버튼 */}
      <View style={styles.addMedicineBox}>
        <Text style={styles.infoText}>아래 버튼으로 약을 검색하여 추가해보세요.</Text>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate("PrescriptionSearchScreen")}
        >
          <Icon name="plus-circle-outline" size={24} color="#007AFF" />
          <Text style={styles.searchButtonText}>약 검색</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 처방전 상세 정보 입력 */}
      <Text style={styles.subtitle}>처방전의 상세정보를 입력해주세요</Text>
      <TextInput style={styles.input} placeholder="처방전의 이름을 입력하세요. 예) 감기약 처방전" />
      <View style={styles.dateInputContainer}>
        <TextInput style={[styles.input, styles.dateInput]} placeholder="2025-02-25" />
        <Text style={styles.dateSeparator}>~</Text>
        <TextInput style={[styles.input, styles.dateInput]} placeholder="조제일자 입력" />
      </View>

      {/* 🔹 복용 시간 체크 */}
      <View style={styles.medicineTimeContainer}>
        {["아침 09:00", "점심 13:00", "저녁 19:00"].map((time, index) => (
          <View key={index} style={styles.medicineTimeRow}>
            <Checkbox.Android status="checked" color="#007AFF" />
            <Text style={styles.medicineTimeText}>{time}</Text>
          </View>
        ))}
      </View>

      {/* 🔹 저장 버튼 */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>약 추가 완료하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// 📌 스타일
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { flexDirection: "row", alignItems: "center", paddingBottom: 16 },
  backButton: { marginRight: 10 },
  headerTitle: { fontSize: 18, fontWeight: "bold" },
  subtitle: { fontSize: 16, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
  inputRow: { flexDirection: "row", alignItems: "center" },
  input: { flex: 1, backgroundColor: "#F8F8F8", padding: 12, borderRadius: 10, fontSize: 14 },
  addButton: { marginLeft: 8, backgroundColor: "#007AFF", padding: 10, borderRadius: 10 },
  addButtonText: { color: "#fff", fontWeight: "bold" },
  medicineListContainer: { marginTop: 8 },
  medicineItem: { flexDirection: "row", alignItems: "center", backgroundColor: "#F8F8FF", padding: 10, borderRadius: 10, marginBottom: 5 },
  medicineText: { flex: 1, fontSize: 14 },
  addMedicineBox: { backgroundColor: "#F2F8FF", padding: 16, borderRadius: 10, marginTop: 20, alignItems: "center" },
  infoText: { fontSize: 14, color: "#555", marginBottom: 10, textAlign: "center" },
  searchButton: { flexDirection: "row", alignItems: "center" },
  searchButtonText: { fontSize: 16, color: "#007AFF", fontWeight: "bold", marginLeft: 5 },
  saveButton: { backgroundColor: "#007AFF", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 20 },
  saveButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default PrescriptionSetupScreen;
