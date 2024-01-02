/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Trending1} from '../../assests/constants/data/data1';
import {
  deviceHeight,
  deviceWidth,
} from '../../assests/constants/dimensions/dimensions';
type TrendingProps = {
  navigateToSeeAllTrending: () => void;
};

const Trending: React.FC<TrendingProps> = ({navigateToSeeAllTrending}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.outerTextView}>
        <View style={styles.trendingView}>
          <Text style={styles.trendingText}>Trending</Text>
        </View>
        <View style={styles.outerSeeView}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={navigateToSeeAllTrending}>
            <Text style={styles.seeText}>See All</Text>
            <AntDesign name="right" size={20} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Trending1}
          renderItem={({item}) => (
            <View style={styles.outerListView}>
              <Image source={item.imageSource} style={styles.image} />
              <View style={styles.outerItemView}>
                <Text style={styles.item}>{item.name}</Text>
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
  outerTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  trendingView: {
    alignItems: 'center',
  },
  trendingText: {
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
  outerListView: {
    width: deviceWidth / 2 - 40,
    height: deviceHeight / 2 - 200,
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 1,
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    height: deviceHeight / 2,
    width: deviceWidth / 2,
  },
  outerItemView: {
    position: 'absolute',
    bottom: 2,
  },
  item: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Trending;
