/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { StyleSheet } from 'react-native';
import SignIn from './SignIn'
import OnBoarding from './OnBoarding'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewSlide from './NewSlide';
const Stack = createNativeStackNavigator();

const App = () => {
      const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(true);
  React.useEffect = (async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    console.log(appData)
    if(appData == null) {
      setIsAppFirstLaunched(true);  
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    }
    else {
      setIsAppFirstLaunched(false);
    }
  },
    []);
  return (
isAppFirstLaunched != null &&  (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isAppFirstLaunched && (
          <Stack.Screen name="OnBoarding" component={OnBoarding} />)}
          <Stack.Screen component={SignIn} name="SignIn" />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  icon: {
    color: 'orange',
    textAlign: 'center',
  },
});

export default App;

