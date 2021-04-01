import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

// Netowork / AXIOS
import axios from "axios";

export default function Login(props) {

  // Denne får login gennem props.

  // States
  const [formUsername, setFormUsername] = useState("");
  const [formPassword, setFormPassword] = useState("");

  // Handle form - Login
	const handleFormSubmit = () => {

		// Post Brugernavn & Adgangskode til login backend
		axios.post(`${props.backendUrl}/auth`, {username: formUsername, password: formPassword})
		.then(res => {
			// alert(JSON.stringify(res.headers));
			return res.data;
		})
		.then(data => {

			// Debug
			// alert("Data fuck: " + JSON.stringify(data));

			// Tjek svaret modtaget tilbage.
			if (data.success) {
				// alert("Logget ind");

				// GetLogin igen
				// handleGetLogin();

        // alert(JSON.stringify(data));

        // Opdater props
        props.loggedIn[1](data.success);
        props.loginUser[1](data.data.USER);

			}else {
				alert("Kunne ikke logge ind!");
			}

		})
		.catch(function (error) {
			alert(`Error! - ${error}`);
		});

	}

	// Tjek om form er valid - begge felter er udfyldt
	const isFormValid = () => {
		if (formUsername == "" || formPassword == "" || props.loggedIn[0]) {
			return true
		}else {
			return false
		}
	}

  // console.log("Props.loggedIN", props.loggedIn);

	// Tjek om brugeren allerede er logget ind
	const isLoggedIn = () =>{

		// Tjek om loggedIn = true
		if (props.loggedIn[0]) {
			return "Allerede logget ind.";
		}else {
			return "Login";
		}

	}

  return (
    <View>

      {/* Tjek om brugeren allerede er logget ind */}
      {props.loggedIn[0] ? (

        <Text>
          Allerede logget ind!
        </Text>

      ) : (

        <View>

          <Text style={ styles.disclaimer }>
            Du skal logge ind før du kan bruge denne app
          </Text>

          <View style={styles.formCont}>

            <Text style={{ textAlign: "center", fontSize: 17, fontWeight: "800" }} >
              Login Form
            </Text>

            <Text>Brugernavn</Text>
    				<TextInput
    					style={styles.textInput}
    					placeholder="palle2328"
    					onChangeText={text => setFormUsername(text)}
    				/>
    				<Text>Adgangskode</Text>
    				<TextInput
    					style={styles.textInput}
    					placeholder="********"
    					onChangeText={text => setFormPassword(text)}
    					secureTextEntry={true}
    				/>
    				<View style={{marginTop: 10}}>
    					<Button
    						onPress={() => handleFormSubmit()}
    						title={isLoggedIn()}
    						color="royalblue"
    						disabled={isFormValid()}
    					/>
    				</View>
          </View>
        </View>

      )}

    </View>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#f1f1f1",
    borderRadius: 4,
    marginBottom: 10,
    padding: 10
  },
  formCont: {
  	padding: 20,
  	borderRadius: 4,
  	backgroundColor: "#d3dcf8",
  	margin: 10,
    marginRight: 150,
    marginLeft: 150,
  },
  disclaimer: {
    textAlign: "center",
    backgroundColor: "royalblue",
    color: "white",
    padding: 10,
    paddingTop: 30,
    fontSize: 16,
    fontWeight: "bold"
  }
});
