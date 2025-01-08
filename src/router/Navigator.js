import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreensMap } from "./ScreensMap";
import CustomTabBar from "../components/common/CustomTabBar";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />} // sử dụng CustomTabBar cho tabbar
      screenOptions={({ route }) => ({
        // declare các options cho tất cả màn hình
        tabBarShowLabel: false, // ẩn label trong tabbar (không cẩn thiết vì xài CustomTabBar)
        headerShown: false, // ẩn header trong màn hình
      })}
      backBehavior="history" // set behavior back sẽ trở lại trang trước đó
    >
      {ScreensMap.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={item.options}
        />
      ))}
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen // khai báo màn hình duy nhất cho tack.Navigator
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
