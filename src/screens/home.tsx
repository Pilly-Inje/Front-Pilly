import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* 🔹 상단 프로필 & 로고 */}
        <View style={styles.header}>
          <Image
            source={require("../assets/Pilly-logo2.png")}
            style={styles.logo}
          />
          <TouchableOpacity>
            <Icon name="account-circle" size={30} color="#444" />
          </TouchableOpacity>
        </View>

        {/* 🔹 오늘의 약 복용 여부 */}
        <Text style={styles.sectionTitle}>오늘 약 복용하셨나요?</Text>
        {["완료했어요", "복용 확인", "복용 확인"].map((status, index) => (
          <View key={index} style={styles.medicationRow}>
            <Text style={styles.timeText}>09:00</Text>
            <Text style={styles.pillCount}>약 3개</Text>
            <TouchableOpacity 
              style={[
                styles.medicationButton,
                status === "완료했어요" ? styles.completedButton : styles.pendingButton,
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  status === "완료했어요" ? styles.completedText : styles.pendingText,
                ]}
              >
                {status}
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* 🔹 쉽게 약 관리하기 */}
        <Text style={styles.sectionTitle}>쉽게 약관리하기</Text>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("CameraScreen")}
          >
            <Icon name="camera" size={40} color="#007AFF" />
            <Text style={styles.cardTitle}>처방전/약봉투 촬영하기</Text>
            <Text style={styles.cardSubtitle}>사진 한 장으로 관리하기</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("PrescriptionSetupScreen")}
          >
            <Icon name="pill" size={40} color="#007AFF" />
            <Text style={styles.cardTitle}>직접 약 등록하기</Text>
            <Text style={styles.cardSubtitle}>비타민/영양제 관리하기</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, styles.highlightedCard]}
            onPress={() => navigation.navigate("PrescriptionList")}
          >
            <Icon name="clipboard-list" size={40} color="#007AFF" />
            <Text style={styles.highlightedTitle}>처방전 확인하기</Text>
            <Text style={styles.cardSubtitle}>등록한 처방전/약봉투 확인</Text>
          </TouchableOpacity>
        </View>
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
            <Icon name={item.name} size={24} color="#444" />
            <Text style={styles.navText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// 📌 스타일링
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 50,
    height: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 16,
  },
  medicationRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F8F8F8",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 5,
  },
  timeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pillCount: {
    fontSize: 14,
    color: "#007AFF",
  },
  medicationButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  completedButton: {
    backgroundColor: "#007AFF",
  },
  pendingButton: {
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  completedText: {
    color: "#fff",
  },
  pendingText: {
    color: "#007AFF",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 10,
  },
  card: {
    width: "48%",
    backgroundColor: "#F2F8FF",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  highlightedCard: {
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
  highlightedTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
    color: "#007AFF",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  navButton: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default HomeScreen;
