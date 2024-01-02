import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {Favourite_1} from '../../assests/constants/data/data1';
import {
  deviceHeight,
  deviceWidth,
} from '../../assests/constants/dimensions/dimensions';

const SeeAllFavourite = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.outerMainHaeding}>
        <View style={styles.innerHeading}>
          <Text style={styles.heading}>Favourite</Text>
        </View>
      </View>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        data={Favourite_1}
        renderItem={({item}) => (
          <>
            <View style={styles.outerListView}>
              <Image source={item.imageSource} style={styles.image} />
            </View>
            <View style={styles.innerTextView}>
              <Text style={styles.item}>{item.name}</Text>
              <Text style={styles.title}>{item.title}</Text>
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
  outerMainHaeding: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  innerHeading: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  outerListView: {
    alignSelf: 'center',
    // marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    borderRadius: 8,
    height: deviceHeight / 2 - 200,
    width: deviceWidth - 40,
  },
  innerTextView: {
    position: 'absolute',
    bottom: 15,
    width: '60%',
  },
  item: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  title: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    marginLeft: 15,
  },
});
export default SeeAllFavourite;
