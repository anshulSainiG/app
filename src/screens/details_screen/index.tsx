/* eslint-disable react-native/no-inline-styles */
import {FlatList, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';

// Assuming you have a types file for your navigation
type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'detailscreen'
>;

const Detailscreen: React.FC<DetailScreenProps> = ({route}) => {
  const {data} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
      <View
        style={{
          alignItems: 'center',
          // backgroundColor: 'red',
          width: '90%',
          height: 50,
          paddingTop: 5,
          borderWidth: 2,
          borderRadius: 10,
          // justifyContent: 'center',
        }}>
        <FlatList
          horizontal
          data={data}
          renderItem={({item}) => (
            <View
              style={
                {
                  // marginVertical: 10,
                  // borderWidth: 2,
                  // width: '80%',
                  // height: 50,
                  // backgroundColor: 'red',
                }
              }>
              <Text style={{color: 'black', fontSize: 20}}>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Detailscreen;
