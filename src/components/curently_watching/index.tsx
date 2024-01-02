/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Currently} from '../../assests/constants/data/data1';
import {
  deviceHeight,
  deviceWidth,
} from '../../assests/constants/dimensions/dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
type CurrentlyWatchingProps = {
  navigateToSeeAll: () => void;
};
const CurrentlyWatching: React.FC<CurrentlyWatchingProps> = ({
  navigateToSeeAll,
}) => {
  return (
    <View style={styles.outerView}>
      <View style={styles.textView}>
        <View style={styles.textCurrentlyView}>
          <Text style={styles.textCurrent}>Currently Watching</Text>
        </View>
        <View style={styles.outerSeeView}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={navigateToSeeAll}>
            <Text style={styles.seeText}>See All</Text>
            <AntDesign name="right" size={20} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Moved FlatList outside the above View */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Currently}
        renderItem={({item}) => (
          <View style={styles.outerContainer}>
            <Image source={item.imageSource} style={styles.image} />
            <View style={styles.crossView}>
              <Entypo name="cross" size={20} color="black" />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    marginBottom: 10,
    // backgroundColor: 'red',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  textCurrentlyView: {
    alignItems: 'center',
  },
  textCurrent: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  outerSeeView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
  },
  seeText: {
    fontSize: 15,
    color: 'gray',
    fontWeight: 'bold',
  },
  crossView: {
    height: 20,
    width: 20,
    backgroundColor: 'grey',
    opacity: 0.5,
    borderRadius: 10,
    position: 'absolute',
    right: 8,
    top: 8,
  },
  image: {
    borderRadius: 8,
    height: deviceHeight / 2 - 200,
    width: deviceWidth / 2 - 50,
  },
  outerContainer: {
    marginLeft: 15,
    marginTop: 10,
    marginRight: 8,
  },
});

export default CurrentlyWatching;
