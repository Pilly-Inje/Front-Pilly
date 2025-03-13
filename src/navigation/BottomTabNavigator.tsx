import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// 🔹 각 화면 가져오기
import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/SearchScreen";
import MapScreen from "../screens/MapScreen";
import AlarmScreen from "../screens/alarm/AlarmList";

// ✅ 탭 네비게이터 생성
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "홈") {
            iconName = "home";
          } else if (route.name === "약 검색") {
            iconName = "magnify";
          } else if (route.name === "약국 찾기") {
            iconName = "map-marker";
          } else if (route.name === "약 관리") {
            iconName = "pill";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#444",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#ddd",
          paddingBottom: 5,
        },
        headerShown: false, // ✅ 상단 헤더 숨김
      })}
    >
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="약 검색" component={SearchScreen} />
      <Tab.Screen name="약국 찾기" component={MapScreen} />
      <Tab.Screen name="약 관리" component={AlarmScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
