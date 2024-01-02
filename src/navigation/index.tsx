/* eslint-disable react/react-in-jsx-scope */
// import React, {Suspense, lazy} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from '../screens/home_screen';
import SavedLocation from '../screens/saved_location';
import Detailscreen from '../screens/details_screen';
// import {View, Text} from 'react-native';

// const Home = lazy(() => import('../screens/home_screen'));

// Define types for your screens' parameters
export type RootStackParamList = {
  navigate(arg0: string): unknown;
  homescreen: undefined;
  savedLocation: {name: string};
  detailscreen: {data: string}; // Adjust the type based on the data you're passing
};
// const LoadingComponent = () => (
//   <View>
//     <Text>Loading...</Text>
//   </View>
// );

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation1() {
  return (
    // <Suspense fallback={<LoadingComponent />}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="homescreen"
          options={{headerShown: false}}
          component={Homescreen}
        />
        <Stack.Screen
          name="savedLocation"
          options={{headerShown: false}}
          component={SavedLocation}
        />
        <Stack.Screen
          name="detailscreen"
          options={{headerShown: false}}
          component={Detailscreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </Suspense>
  );
}
