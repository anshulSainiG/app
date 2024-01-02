/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {ABC} from '../../assests/constants/data/data1';
import {
  deviceHeight,
  deviceWidth,
} from '../../assests/constants/dimensions/dimensions';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation';
const AllTimeFavourite = () => {
  const [toggle, setToggle] = useState(false);
  const navigation = useNavigation<RootStackParamList>();

  const toggleHandler = () => {
    setToggle(!toggle);
    navigation.navigate('seeallfavourite');
  };

  const renderIcon = () => (
    <AntDesign name={toggle ? 'down' : 'right'} size={20} color="grey" />
  );

  const renderItem = ({item}) => (
    <View style={{marginLeft: 8, marginTop: 10, marginRight: 10}}>
      <Image
        source={item.imageSource}
        style={{
          borderRadius: 8,
          height: deviceHeight / 2 - 200,
          width: deviceWidth / 2 - 50,
        }}
      />
      <TouchableOpacity
        style={{
          height: 20,
          width: 20,
          backgroundColor: 'grey',
          opacity: 0.5,
          borderRadius: 10,
          position: 'absolute',
          right: 8,
          top: 8,
        }}
        onPress={() => {
          // Handle cross button press
        }}>
        <Entypo name="cross" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
            All Time Favourite
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 4}}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={toggleHandler}>
            <Text style={{fontSize: 15, color: 'gray', fontWeight: 'bold'}}>
              See All
            </Text>
            {renderIcon()}
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={ABC}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default AllTimeFavourite;
