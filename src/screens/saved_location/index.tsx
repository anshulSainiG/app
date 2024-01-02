// /* eslint-disable react-native/no-inline-styles */
// import {Button, View} from 'react-native';
// import React from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../../navigation';

// type SavedLocationProps = NativeStackScreenProps<
//   RootStackParamList,
//   'savedLocation'
// >;

// const SavedLocation: React.FC<SavedLocation  `Props> = props => {
//   const cityName = props?.route?.params?.name;

//   const storeData = async () => {
//     try {
//       await AsyncStorage.setItem('city', cityName);
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };

//   const getData = async () => {
//     try {
//       const city = await AsyncStorage.getItem('city');
//       if (city !== null) {
//         console.log('Stored city:', city);
//         props.navigation.navigate('detailscreen', {data: cityName}); // Navigate to 'Details' screen and pass the city
//       } else {
//         console.log('City not found in storage');
//       }
//     } catch (error) {
//       console.error('Error retrieving data:', error);
//     }
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         margin: 20,
//         marginVertical: 20,
//       }}>
//       <Button title="SET LOCATION" onPress={storeData} />
//       <Button title="Get Location" onPress={getData} />
//     </View>
//   );
// };

// export default SavedLocation;
