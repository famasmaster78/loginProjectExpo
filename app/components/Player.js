import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// Import Video Afspiller
import Video from "react-native-video";

export default function Player(props) {

  // Denne får informationer omkring hvad skal afspilles gennem props.
  console.log("PlayerProps", props);

  // Opret variable til film Info
  var filmInfo = props.route.params.film;

  return (

  	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  		<Text>Velkommen Player!</Text>
      <Text>Afspilning af film: {filmInfo.title}</Text>
  	</View>

    );

    <Video source={{uri: "background"}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
     />
  }

const styles = StyleSheet.create({

});
