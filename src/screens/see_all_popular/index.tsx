/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {Trending1} from '../../assests/constants/data/data1';
import {
  deviceHeight,
  deviceWidth,
} from '../../assests/constants/dimensions/dimensions';

const SeeAllPopular = () => {
  return (
    <View>
      <View style={styles.mainHeadingView}>
        <View style={styles.innerHeadingView}>
          <Text style={styles.heading}>Popular</Text>
        </View>
      </View>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        data={Trending1}
        renderItem={({item}) => (
          <>
            <View style={styles.outerListView}>
              <View style={styles.listView}>
                <View style={styles.innerImageView}>
                  <Image source={item.imageSource} style={styles.image} />
                </View>
                <View style={styles.itemNameView}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              </View>
              <View style={styles.whiteView}>
                <Text style={styles.title}>title:{item.title}</Text>
                <Text style={styles.para}>para:{item.para}</Text>
              </View>
            </View>
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainHeadingView: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  innerHeadingView: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  outerListView: {
    backgroundColor: 'black',
    // marginLeft: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  whiteView: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginLeft: 5,
  },
  para: {
    fontSize: 20,
    color: 'black',
    marginLeft: 5,
  },
  name: {
    fontSize: 20,
    color: 'white',
    // textAlign: 'center',
    fontWeight: 'bold',
    // marginLeft: 15,
  },
  itemNameView: {
    bottom: 15,
    width: '40%',
    // backgroundColor: 'red',
    marginLeft: 15,
  },
  image: {
    borderRadius: 8,
    height: deviceHeight / 2 - 200,
    width: deviceWidth / 2 - 20,
  },
  innerImageView: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  listView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default SeeAllPopular;
