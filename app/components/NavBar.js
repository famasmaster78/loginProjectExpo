import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function ATab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>A Tab!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={ATab}
          options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="Notifications"
          component={ATab}
          options={{ tabBarLabel: 'Updates' }}
        />
        <Tab.Screen
          name="Profile"
          component={ATab}
          options={{ tabBarLabel: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
