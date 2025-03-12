import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

// 📌 초기 데이터
const initialData = [
  {
    id: "1",
    name: "복약중",
    date: "2025/02/21",
    period: "2025/02/21 ~ 2025/02/25",
    medicines: "아미세타정 325mg, 다이크로짇정, 삼진디아제팜정 2mg",
    status: "확인 완료",
  },
  {
    id: "2",
    name: "복약완료",
    date: "2025/02/21",
    period: "2025/02/21 ~ 2025/02/25",
    medicines: "아미세타정 325mg, 다이크로짇정, 삼진디아제팜정 2mg",
    status: "확인 완료",
  },
];

const PrescriptionListScreen = () => {
  const navigation = useNavigation();
  const [prescriptions, setPrescriptions] = useState(initialData);

  const handleDelete = (id: string) => {
    setPrescriptions(prescriptions.filter((item) => item.id !== id));
  };

  const handlePressItem = (item: any) => {
    navigation.navigate("PrescriptionDetail", { prescription: item });
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => handlePressItem(item)} style={styles.card}>
      <View style={styles.cardHeader}>
        <Icon name="medical-bag" size={20} color="red" />
        <Text style={styles.cardTitle}> 처방전 </Text>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Icon name="trash-can-outline" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      {item.status === "확인 완료" && (
        <>
          <Text style={styles.cardPeriod}>{item.period}</Text>
          <Text style={styles.cardMedicines}>{item.medicines}</Text>
        </>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>등록한 처방전/약봉투 확인하기</Text>
      </View>

      <FlatList
        data={prescriptions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

// 📌 스타일링
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
  card: {
    backgroundColor: "#F8F8F8",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  cardName: {
    fontSize: 14,
    color: "#007AFF",
    marginLeft: 5,
  },
  cardDate: {
    fontSize: 12,
    color: "gray",
    marginLeft: "auto",
    marginRight: 5,
  },
  cardPeriod: {
    fontSize: 12,
    color: "#333",
    marginTop: 5,
  },
  cardMedicines: {
    fontSize: 12,
    color: "#555",
    marginTop: 2,
  },
});

export default PrescriptionListScreen;
