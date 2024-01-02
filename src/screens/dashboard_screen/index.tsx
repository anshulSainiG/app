import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SliderFlatlist from '../../components/slider_flatlist';
import CurrentlyWatching from '../../components/curently_watching';
import Trending from '../../components/trending';
import Favourite from '../../components/Favourite';
import Popular from '../../components/Popular';
import AllTimeFavourite from '../../components/all_time_favourite';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/navigation_friendspire';
import Users from '../../components/users';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  deviceHeight,
  deviceWidth,
} from '../../assests/constants/dimensions/dimensions';
type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'dashboard'
>;
const DashboardScreen: React.FC<DashboardScreenProps> = props => {
  const navigateToSeeAllCurrently = () => {
    props.navigation.navigate('seeallcurrently');
  };
  const navigateToSeeAllFavourite = () => {
    props.navigation.navigate('seeallfavourite');
  };
  const navigateToSeeAllPopular = () => {
    props.navigation.navigate('seeallpopular');
  };
  const navigateToSeeAllTrending = () => {
    props.navigation.navigate('seealltrending');
  };
  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Friendspire</Text>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.circleView} />
            <View style={styles.innerPeopleIconView}>
              <Ionicons name="people" size={26} color="black" />
            </View>

            <View style={styles.bellCircleView} />
            <View style={styles.bellIconView}>
              <FontAwesome name="bell" size={20} color="black" />
            </View>
          </View>
        </View>
        <SliderFlatlist />
        <CurrentlyWatching navigateToSeeAll={navigateToSeeAllCurrently} />
        <Trending navigateToSeeAllTrending={navigateToSeeAllTrending} />
        <Users />
        <Favourite navigateToSeeAllFavourite={navigateToSeeAllFavourite} />
        <Popular naviagteToSeeAllPopular={navigateToSeeAllPopular} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    height: deviceHeight,
    width: deviceWidth,
    marginBottom: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  textContainer: {
    width: deviceWidth / 2,
  },
  text: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    width: '20%',
    justifyContent: 'space-around',
  },
  circleView: {
    backgroundColor: 'black',
    opacity: 0.2,
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
  },
  innerPeopleIconView: {
    position: 'absolute',
    marginLeft: 2,
  },
  bellCircleView: {
    backgroundColor: 'black',
    opacity: 0.2,
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    paddingTop: 3,
  },
  bellIconView: {
    position: 'absolute',
    marginLeft: 40,
    top: 4,
  },
});
export default DashboardScreen;
