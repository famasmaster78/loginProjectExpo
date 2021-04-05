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

  // Håndter Buffering af video
  const onBuffer = () => {
    console.log("Buffering...");
  }

  // Håndter fejl ved indlæsning af video
  const onError = () => {
    console.log("Error loading video...");
  }

  return (

  	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  		<Text>Velkommen Player!</Text>
      <Text>Afspilning af film: {filmInfo.title}</Text>
  	</View>

    );

    <Video source={{uri: `${encodeURI(`http://film.famas.ml/media/film/${filmInfo.title}/${filmInfo.video}`)}`}}   // Can be a URL or a local file.
       ref={(ref) => {
         player = ref
       }}                                      // Store reference
       onBuffer={onBuffer}                // Callback when remote video is buffering
       onError={videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo}
     />
  }

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
