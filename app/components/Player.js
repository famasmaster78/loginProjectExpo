import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Player(props) {

  // Denne får informationer omkring hvad skal afspilles gennem props.

  return (

	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text>Velkommen Serier!</Text>
	</View>

  );
}

const styles = StyleSheet.create({

});
