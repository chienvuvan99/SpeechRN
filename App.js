// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Speech from './src/screen/Speech';
import WatchList from './src/screen/WatchList';
import OrderEntry from './src/screen/OrderEntry';
import MarkertOverview from './src/screen/MarkertOverview';
import News from './src/screen/News';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'transparent'},
          gestureEnabled: false
        }}>
        <Stack.Screen name="Speech" component={Speech} />
        <Stack.Screen name="WatchList" component={WatchList} />
        <Stack.Screen name="OrderEntry" component={OrderEntry} />
        <Stack.Screen name="MarkertOverview" component={MarkertOverview} />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
