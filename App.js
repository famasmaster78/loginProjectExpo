import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// Network / AXIOS
import axios from 'axios';

// Import Login til test af props
import Login from "./app/components/Login";
import NavBar from "./app/components/NavBar";

/* Opret const til URL */
let backendUrl = "http://192.168.1.147:4080";

// App
export default function App() {

  // States
  const [loggedIn, setloggedIn] = useState(0);
  const [loginUser, setloginUser] = useState("");

  // GetLogin
  const handleGetLogin = () => {
  		axios.get(`${backendUrl}/GetLogin`)
  		.then(res => res.data)
  		.then(data => {
  			/* alert(JSON.stringify(data)); */

  			// Opdater state
  			setloggedIn(data.success);
  			setloginUser(data.data.USER);

  		});
  }

  /* Når component mountes */
	useEffect(() => {
		// Get Login Status
		handleGetLogin();
	}, []);

  return(
    <View style={{ flex: 1 }}>

      {/* Tjek om bruger er logget ind */}
      {loggedIn ? (

        // Brugeren er logget ind
        // Vis tabs i toppen
        <NavBar loggedIn={[loggedIn,setloggedIn]} loginUser={[loginUser,setloginUser]} backendUrl={backendUrl} />

      ) : (

        // Bruger er ikke logget ind, vis login component.
        <Login loggedIn={[loggedIn,setloggedIn]} loginUser={[loginUser,setloginUser]} backendUrl={backendUrl} />

      )}



    </View>
  )

}
