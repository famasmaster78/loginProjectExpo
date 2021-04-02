import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Importer skærmene
import Home from "./NavBarScreens/Home";
import Film from "./NavBarScreens/Film";
import Serier from "./NavBarScreens/Serier";
import Settings from "./NavBarScreens/Settings";

const Tab = createMaterialTopTabNavigator();

export default function Navigator(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Hjem" children={()=><Home loggedIn={[props.loggedIn[0],props.loggedIn[1]]} loginUser={[props.loginUser[0], props.loginUser[1]]} backendUrl={props.backendUrl} />} />
        <Tab.Screen name="Film" children={()=><Film loggedIn={[props.loggedIn[0],props.loggedIn[1]]} loginUser={[props.loginUser[0], props.loginUser[1]]} backendUrl={props.backendUrl} />} />
        <Tab.Screen name="Serier" children={()=><Serier loggedIn={[props.loggedIn[0],props.loggedIn[1]]} loginUser={[props.loginUser[0], props.loginUser[1]]} backendUrl={props.backendUrl} />} />
        <Tab.Screen name="Settings" children={()=><Settings loggedIn={[props.loggedIn[0],props.loggedIn[1]]} loginUser={[props.loginUser[0], props.loginUser[1]]} backendUrl={props.backendUrl} />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
