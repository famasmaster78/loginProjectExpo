import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ActivityIndicator, Image, FlatList, ScrollView } from 'react-native';

/* Stack Navigation */
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

// Brug axios til at fetche informationer omkring film
import axios from "axios";

export default function Film(props) {

  console.log("Filmjs", props);

  // Opret state
  const [allFilm, setAllFilm] = useState("");
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState("");

  // GetMovies
  const handleGetMovies = () => {
  		axios.get(`${props.route.params.props.backendUrl}/GetAllMovies`)
  		.then(res => res.data)
  		.then(data => {
  			/* alert(JSON.stringify(data)); */

  			// Opdater state
        console.log("GetAllMovies", data);

        // Tjek om det var en success
        if (data.success) {

          // Opdater state
          setLoading(false);
          setAllFilm(data.data.movieData);

        }else {

          // Der er sket en fejl
          alert(data);

        }


  		})
      .catch(err => {

        // Der er sket en fejl!
        console.error(err);

      });
  }

  /* Når component mountes */
  useEffect(() => {
    // GetAllMovies
    handleGetMovies();
  }, []);

  return (

  	<ScrollView vertical contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>

      {/* Tjek om film stadig hentes */}
      {loading && allFilm === "" ? (

        <Text>
          <ActivityIndicator size="small" color="royalblue" /> Henter film...
        </Text>

      ) : (

        <View style={styles.filmCont}>

          {[...allFilm].map((film) => {

            return(
              <View key={film.id} style={styles.filmItem}>

                <Text style={styles.filmItemText}>{film.title}</Text>
                <Image
                  style={styles.filmImage}
                  source={{ uri: `https://film.famas.ml/media/film/${encodeURI(film.title)}/${encodeURI(film.billede)}`}}

                />
                <Button
                  title="Afspil"
                  onPress={() => {
                    props.navigation.navigate("Player",{
                      film: film
                    });

                  }}
                />

              </View>
            )

          })}

        </View>

      )}

  	</ScrollView>

  );
}

const styles = StyleSheet.create({
  filmImage: {
    width: "100%",
    height: 350,
    borderRadius: 10
  },
  filmCont: {
     flexDirection: "row",
     flexWrap: "wrap",
     justifyContent: "center",
     flex: 1
  },
  filmItem: {
    margin: 10,
    backgroundColor: "#bdbdbd",
    borderRadius: 10,
	width: "21%",
	minWidth: 200
  },
  filmItemText: {
    margin: 10,
	flexShrink: 1,
  }
});
