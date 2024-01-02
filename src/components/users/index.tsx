/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Trending1} from '../../assests/constants/data/data1';
import {
  deviceHeight,
  deviceWidth,
} from '../../assests/constants/dimensions/dimensions';

const Users = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHeadingView}>
        <View>
          <Text style={styles.mainHeadingText}>Get Inspired by others</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 4,
          }}
        />
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Trending1}
          renderItem={({item}) => (
            <View style={styles.outerListView}>
              <View style={styles.innerView} />
              <View style={styles.circleView}>
                <Image source={item.imageSource} style={styles.image} />
              </View>
              <View style={styles.outerItemView}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={styles.outerTitleView}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemPara}>{item.para}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
  mainHeadingText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  outerListView: {
    width: deviceWidth / 2 - 10,
    height: deviceHeight / 2 - 200,
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    // borderWidth: 1,
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 10,
  },
  innerView: {
    backgroundColor: 'black',
    width: 200,
    height: 50,
    opacity: 0.7,
  },
  circleView: {
    backgroundColor: 'white',
    width: 60,
    height: 55,
    borderRadius: 50,
    position: 'absolute',
    marginTop: 20,
  },
  image: {
    height: deviceHeight / 2 - 340,
    width: deviceWidth / 2 - 140,
    borderRadius: 50,
    // position: 'absolute',
    // marginTop: 20,
    //   marginTop: 10,
    marginTop: 2,
    marginLeft: 2,
  },
  outerItemView: {
    paddingBottom: 10,
    marginLeft: 5,
  },
  itemName: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
  },
  outerTitleView: {
    flexDirection: 'row',
  },
  itemTitle: {
    fontSize: 40,
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemPara: {
    fontSize: 19,
    color: 'blue',
    //   textAlign: 'center',
    //   fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Users;
