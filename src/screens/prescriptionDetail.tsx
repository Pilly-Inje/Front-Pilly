import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const prescriptionData = {
  date: '2025/02/21',
  imageUri: 'https://via.placeholder.com/300', //실주소 x
  medicines: [
    { name: '아스로정', company: '(주)한국글로벌제약', imageUri: 'https://via.placeholder.com/50' },
    { name: '글로엘리손SR서방정', company: '(주)한국글로벌제약', imageUri: 'https://via.placeholder.com/50' },
    { name: '디스텍에프정', company: '일약약품(주)', imageUri: 'https://via.placeholder.com/50' },
  ],
};

const PrescriptionDetail = () => {
  const [memo, setMemo] = useState('');

  return (
    <ScrollView style={styles.container}>
      {/* 헤더 (뒤로가기 버튼 포함) */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>처방전/약봉투 상세보기</Text>
      </View>

      {/* 날짜 표시 */}
      <Text style={styles.date}>{prescriptionData.date}</Text>

      {/* 처방전/약봉투 이미지 */}
      <Image source={{ uri: prescriptionData.imageUri }} style={styles.image} />

      {/* 처방받은 약 목록 */}
      <Text style={styles.sectionTitle}>처방받은 약</Text>
      {prescriptionData.medicines.map((medicine, index) => (
        <View key={index} style={[styles.medicineCard, index < prescriptionData.medicines.length - 1 && styles.medicineSeparator]}>
          {/* 약 이미지 */}
          <Image source={{ uri: medicine.imageUri }} style={styles.medicineImage} />
          
          {/* 약 정보 */}
          <View style={styles.medicineInfo}>
            <View style={styles.medicineHeader}>
              <Text style={styles.specialLabel}>전문</Text>
              <Text style={styles.medicineName}>{medicine.name}</Text>
            </View>
            <Text style={styles.medicineCompany}>{medicine.company}</Text>
          </View>
        </View>
      ))}

      {/* 메모 입력 */}
      <Text style={styles.sectionTitle}>메모</Text>
      <TextInput
        style={styles.memoInput}
        placeholder="약을 복용한 후 상태를 기록하세요."
        multiline
        value={memo}
        onChangeText={setMemo}
      />

      {/* 메모 저장 버튼 */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>메모 저장하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  image: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 20,
  },
 
  medicineCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginHorizontal: 16,
  },
  medicineSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  medicineImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  medicineInfo: {
    flex: 1,
  },
  medicineHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  specialLabel: {
    backgroundColor: '#007AFF',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
    marginRight: 8,
  },
  medicineName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  medicineCompany: {
    fontSize: 14,
    color: '#666',
  },
  memoInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 16,
    margin: 16,
    height: 120,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PrescriptionDetail;
