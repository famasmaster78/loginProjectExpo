import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// Import Video Afspiller
// At the top where our imports are...
import VideoPlayer from 'react-native-video-controls';

export default function Player(props) {

  // Denne får informationer omkring hvad skal afspilles gennem props.
  console.log("PlayerProps", props);

  // Opret variable til film Info
  var filmInfo = props.route.params.film;

  // Opret var til videoPath
  var videoPath = encodeURI(`https://film.famas.ml/media/film/${filmInfo.title}/${filmInfo.video}`);

  // Opret var til PosterPath / BilledePath
  var posterPath = encodeURI(`https://film.famas.ml/media/film/${filmInfo.title}/${filmInfo.billede}`);

  console.log("VideoPath", videoPath);

  // Håndter Buffering af video
  // Opdater title til navigation
  /* Når component mountes */
	useEffect(() => {

    props.navigation.setOptions({ title: filmInfo.title})

	}, []);

  return (

  	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  		<View style={{ margin: 10, justifyContent: "center", alignItems: "center", display: "none"}}>
        <Text>Velkommen Player!</Text>
        <Text>Afspiller film</Text>
      </View>
      <VideoPlayer
        source={{uri: videoPath}}
        poster={posterPath}
        style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "black", }}
        paused={true}
        navigator={props.navigation}
        tapAnywhereToPause={true}
      />
  	</View>

    );
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
