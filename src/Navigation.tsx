import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Agenda from "./Agenda";
import DetalleContacto from "./DetalleContacto";
import { MaterialIcons } from "@expo/vector-icons";

const tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <tab.Navigator initialRouteName="Home">
        <tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: (props) => (
              <MaterialIcons name="home" size={24}></MaterialIcons>
            ),
          }}
        ></tab.Screen>
        <tab.Screen
          name="Agenda"
          component={Agenda}
          options={{
            tabBarLabel: "Agenda",
            tabBarIcon: (props) => (
              <MaterialIcons name="contacts" size={24}></MaterialIcons>
            ),
          }}
        ></tab.Screen>
        <tab.Screen
          name="Detalles"
          component={DetalleContacto}
          options={{
            tabBarLabel: "Detalles",
            tabBarIcon: (props) => (
              <MaterialIcons name="details" size={24}></MaterialIcons>
            ),
          }}
        ></tab.Screen>
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
