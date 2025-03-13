import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import { SafeAreaView } from 'react-native-safe-area-context';

const alarms = [
  { time: '09:00', medicines: ['삼진디아제팜정 2mg'] },
  { time: '12:00', medicines: ['아미세타정 325mg'] },
  { time: '13:00', medicines: ['다이크로짇정'] },
  { time: '15:00', medicines: ['타이레놀 500mg'] },
];

const PrescriptionScreen = () => {
  const [selectedAlarm, setSelectedAlarm] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMeds, setSelectedMeds] = useState({});

   // 🔹 알람 클릭 시 모달 열기
   const openModal = (alarm) => {
    setSelectedAlarm(alarm);
    setSelectedMeds(alarm.medicines.reduce((acc, med) => ({ ...acc, [med]: true }), {}));
    setModalVisible(true);
  };

  // 🔹 체크박스 상태 변경
  const toggleCheckbox = (med) => {
    setSelectedMeds((prev) => ({ ...prev, [med]: !prev[med] }));
  };
  
  return (
    <>
    <ScrollView style={styles.container}>
      {/* 상단 제목 */}
      <Text style={styles.title}>약/알람 관리</Text>

      {/* 약 알람 리스트 */}
      <Text style={styles.sectionTitle}>약 알람</Text>
      <View style={styles.alarmContainer}>
        {alarms.map((alarm, index) => (
          <TouchableOpacity key={index} style={styles.alarmCard} onPress={() => openModal(alarm)}>
            <Text style={styles.alarmTime}>{alarm.time}</Text>
            <View style={styles.alarmRow}>
              <Icon name="pill" size={14} color="#007AFF" />
              <Text style={styles.alarmCount}>{alarm.medicines.length}개</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>


      {/* 현재 복용 중인 약 */}
      <Text style={styles.sectionTitle}>현재 복용 중인 약</Text>
      <View style={styles.medicineCard}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.medicineImage}
        />
        <View style={styles.medicineInfo}>
          <Text style={styles.medicineTitle}>알레그라정</Text>
          <Text style={styles.medicineDesc}>비염증상 완화</Text>
          <Text style={styles.sideEffect}>졸림현상</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.detailButton}>자세히보기</Text>
        </TouchableOpacity>
      </View>

            {/* 🔹 모달 */}
            <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)} style={styles.modalWrapper}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader} />
          <Text style={styles.modalTime}>{selectedAlarm?.time}</Text>
          <Text style={styles.modalTitle}>시간안 수정</Text>

          {selectedAlarm?.medicines.map((med, index) => (
            <View key={index} style={styles.modalCheckboxContainer}>
              <CheckBox value={selectedMeds[med]} onValueChange={() => toggleCheckbox(med)} />
              <Text style={styles.modalCheckboxText}>{med}</Text>
            </View>
          ))}

          {/* 버튼 그룹 */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.updateButton}>
              <Text style={styles.updateButtonText}>수정하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>삭제하기</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 8,
  },

  alarmContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 16,
  },
  alarmCard: {
    backgroundColor: '#F2F8FF',
    padding: 16,
    borderRadius: 10,
    width: '22%', 
    alignItems: 'center',
    elevation: 3,
  },
  alarmTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  alarmRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  alarmCount: {
    fontSize: 12,
    color: '#007AFF',
    marginLeft: 4,
  },
  
  medicineCard: {
    flexDirection: 'row',
    backgroundColor: '#F2F8FF',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    elevation: 3,
  },
  medicineImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },
  medicineInfo: {
    flex: 1,
  },
  medicineTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  medicineDesc: {
    fontSize: 14,
    color: '#888',
  },
  sideEffect: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
  },
  detailButton: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  modalWrapper: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  modalHeader: {
    width: 40,
    height: 4,
    backgroundColor: '#ddd',
    borderRadius: 2,
    marginBottom: 10,
  },
  modalTime: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalCheckboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalCheckboxText: {
    fontSize: 14,
    marginLeft: 8,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  updateButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 5,
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButton: {
    flex: 1,
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
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