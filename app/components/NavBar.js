import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Import player til afspilning af videor osv.
import Player from "./Player";

// Stack Navigation
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Importer skærmene
import Home from "./NavBarScreens/Home";
import Film from "./NavBarScreens/Film";
import Serier from "./NavBarScreens/Serier";
import Settings from "./NavBarScreens/Settings";

const Tab = createMaterialTopTabNavigator();

function AppNavigator({navigation, route}) {

  console.log("Route App", route.params.props);

  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Hjem" children={()=><Home navigation={navigation} loggedIn={[route.params.props.loggedIn[0],props.loggedIn[1]]} loginUser={[props.loginUser[0], props.loginUser[1]]} backendUrl={props.backendUrl} />} />
      <Tab.Screen name="Film" children={()=><Film navigation={navigation} loggedIn={[props.loggedIn[0],props.loggedIn[1]]} loginUser={[props.loginUser[0], props.loginUser[1]]} backendUrl={props.backendUrl} />} />
      <Tab.Screen name="Serier" children={()=><Serier navigation={navigation} loggedIn={[props.loggedIn[0],props.loggedIn[1]]} loginUser={[props.loginUser[0], props.loginUser[1]]} backendUrl={props.backendUrl} />} />
      <Tab.Screen name="Settings" children={()=><Settings navigation={navigation} loggedIn={[props.loggedIn[0],props.loggedIn[1]]} loginUser={[props.loginUser[0], props.loginUser[1]]} backendUrl={props.backendUrl} />} /> */}
      <Tab.Screen name="Hjem" component={Home} initialParams={{props: route.params.props, navigation: navigation}} />
      <Tab.Screen name="Film" component={Film} initialParams={{props: route.params.props, navigation: navigation}} />
      <Tab.Screen name="Serier" component={Serier} initialParams={{props: route.params.props, navigation: navigation}} />
      <Tab.Screen name="Settings" component={Settings} initialParams={{props: route.params.props, navigation: navigation}} />
    </Tab.Navigator>
  );
}

export default function Navigator(props) {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Famplay" component={() => <AppNavigator loggedIn={[props.loggedIn[0],props.loggedIn[1]]} loginUser={[props.loginUser[0], props.loginUser[1]]} backendUrl={props.backendUrl} />} />
        <Stack.Screen name="Player" component={() => <Player loggedIn={[props.loggedIn[0],props.loggedIn[1]]} loginUser={[props.loginUser[0], props.loginUser[1]]} backendUrl={props.backendUrl} />} /> */}
        <Stack.Screen name="Famplay" component={AppNavigator} initialParams={{ props: props }} />
        <Stack.Screen name="Player" component={Player} initialParams={{ props: props }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
