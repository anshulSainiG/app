/* eslint-disable react/react-in-jsx-scope */
// import React, {Suspense, lazy} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../../screens/dashboard_screen';
import SeeAllFavourite from '../../screens/see_all_favourite';
import SeeAllCurrently from '../../screens/see_all_currently';
import SeeAllTrending from '../../screens/see_all_trending';
import SeeAllPopular from '../../screens/see_all_popular';

export type RootStackParamList = {
  dashboard: undefined;
  seeallcurrently: undefined;
  seealltrending: undefined;
  seeallpopular: undefined;
  seeallfavourite: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation1() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="dashboard"
          options={{headerShown: false}}
          component={DashboardScreen}
        />
        <Stack.Screen
          name="seeallcurrently"
          options={{headerShown: false}}
          component={SeeAllCurrently}
        />
        <Stack.Screen
          name="seealltrending"
          options={{headerShown: false}}
          component={SeeAllTrending}
        />
        <Stack.Screen
          name="seeallpopular"
          options={{headerShown: false}}
          component={SeeAllPopular}
        />
        <Stack.Screen
          name="seeallfavourite"
          options={{headerShown: false}}
          component={SeeAllFavourite}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
