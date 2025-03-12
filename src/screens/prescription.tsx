import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';

function PrescriptionScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* 🔹 상단 네비게이션 바 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>인식결과 확인하기</Text>
      </View>

      {/* 🔹 본문 */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>인식된 약을 확인하고 등록해주세요</Text>

        {/* 체크된 약 리스트 */}
        {["다이크로짇정", "삼진디아제팜정 2mg", "아미세타정 325mg"].map((medicine, index) => (
          <View key={index} style={styles.checkboxContainer}>
            <CheckBox value={true} boxType="square" tintColors={{ true: "#007AFF" }} />
            <Text style={styles.checkboxText}>{medicine}</Text>
          </View>
        ))}

        {/* 🔹 약 검색 추가 */}
        <View style={styles.searchBox}>
          <Text style={styles.searchText}>
            인식되지 않은 약이 있다면, 아래 버튼으로 추가해주세요.
          </Text>
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="plus-circle" size={24} color="blue" />
            <Text style={styles.searchButtonText}>약 검색</Text>
          </TouchableOpacity>
        </View>

        {/* 🔹 처방전 정보 입력 */}
        <Text style={styles.sectionTitle}>처방전의 상세정보를 입력해주세요</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="상세 정보를 입력해 주세요 예) 감기약" />
        </View>
        <Text style={styles.sectionTitle}>복용 기간을 입력해주세요</Text>
        {/* 🔹 날짜 입력 */}
        <View style={styles.dateContainer}>
          <TextInput style={styles.dateInput} placeholder="2025-02-25" />
          <Text> ~ </Text>
          <TextInput style={styles.dateInput} placeholder="조제일자 입력" />
        </View>

        {/* 🔹 복용 시간 선택 */}
        {["아침 09:00", "점심 13:00", "저녁 19:00"].map((time, index) => (
          <View key={index} style={styles.checkboxContainer}>
            <CheckBox value={true} boxType="square" tintColors={{ true: "#007AFF" }} />
            <Text style={styles.checkboxText}>{time}</Text>
          </View>
        ))}

        {/* 🔹 약 추가 완료 버튼 */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>약 추가 완료하기</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* 🔹 하단 네비게이션 바 */}
      <View style={styles.bottomNav}>
        {[
          { name: "home", label: "홈" },
          { name: "magnify", label: "약 검색" },
          { name: "hospital-building", label: "약국 찾기" },
          { name: "pill", label: "약 관리" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.navButton}>
            <Icon name={item.name} size={24} color="black" />
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxText: {
    marginLeft: 8,
  },
  searchBox: {
    backgroundColor: "#F2F8FF",
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 10,
  },
  searchText: {
    marginBottom: 10,
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchButtonText: {
    marginLeft: 8,
    color: "blue",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  input: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  dateInput: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#0169CD",
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: "center",
    elevation: 3,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navButton: {
    alignItems: "center",
  },
});

export default PrescriptionScreen;