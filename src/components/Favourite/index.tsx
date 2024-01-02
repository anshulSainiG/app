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
import {Trending1} from '../../assests/constants/data/data1';
import {
  deviceHeight,
  deviceWidth,
} from '../../assests/constants/dimensions/dimensions';
type FavouriteProps = {
  navigateToSeeAllFavourite: () => void;
};

const Favourite: React.FC<FavouriteProps> = ({navigateToSeeAllFavourite}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHeadingView}>
        <Text style={styles.heading}>Favourite</Text>
        <View style={styles.seeView}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={navigateToSeeAllFavourite}>
            <Text style={styles.seeText}>See All</Text>

            <AntDesign name="right" size={20} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Trending1}
        renderItem={({item}) => (
          <>
            <View style={styles.mainListContainer}>
              <Image source={item.imageSource} style={styles.image} />
            </View>
            <View style={styles.itemView}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainHeadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  heading: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  seeView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
  },
  seeText: {
    fontSize: 15,
    color: 'gray',
    fontWeight: 'bold',
  },
  mainListContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  image: {
    borderRadius: 8,
    height: deviceHeight / 2 - 160,
    width: deviceWidth - 20,
  },
  itemView: {
    position: 'absolute',
    bottom: 5,
    marginLeft: 120,
  },
  item: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Favourite;
