/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DATA from '../../assests/constants/data/cities.json';
import Entypo from 'react-native-vector-icons/Entypo';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import {API_KEY} from '../../assests/constants/api_key';
import {
  deviceHeight,
  deviceWidth,
} from '../../assests/constants/dimensions/dimensions';
import {getWeatherImage} from '../../components/weather_condition';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
type HomescreenProps = NativeStackScreenProps<RootStackParamList, 'homescreen'>;

const Homescreen: React.FC<HomescreenProps> = props => {
  const [states, setStates] = useState<CitiesData[]>([]);
  const [temp, setTemp] = useState<CitiesData[]>([]);
  const [search, setSearch] = useState<string>('');
  console.log('search', search);
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, SetSelected] = useState<boolean>();
  const [data, setData] = useState<ApiResponse | null>(null);
  const [weatherCondition, setWeatherCondition] = useState<string>('');
  type ApiResponse = {
    name: string;
    sys: {
      country: string;
    };
    main: {
      temp: number;
      humidity: number;
      pressure: number;
    };
    wind: {
      speed: number;
    };
    weather: {
      description: string;
    }[];
  };
  const ApiHandrler = () => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(res => {
        console.log('res', res);
        setData(res);
        setWeatherCondition(res.weather[0]?.description);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };
  const backButtonHandler = () => {
    setData(null);
  };
  const onFilter = (text: string) => {
    if (text.length > 0) {
      let temptation = temp.filter(item => {
        return (
          item.cityName.toLowerCase().includes(text.toLowerCase()) ||
          item.countryName.toLowerCase().includes(text.toLowerCase())
        );
      });
      setStates(temptation);
    } else {
      setStates(temp);
    }
  };
  type CitiesData = {
    cityName: string;
    countryName: string;
  };
  const dataList: CitiesData[] = [];

  React.useEffect(() => {
    for (var key in DATA) {
      if (DATA.hasOwnProperty(key)) {
        const CITY = DATA[key];

        for (let index = 0; index < CITY.length; index++) {
          const element = CITY[index];
          const cityData: CitiesData = {
            cityName: element,
            countryName: key,
          };

          dataList.push(cityData);
        }
      }
    }

    console.log('CITY_COUNTRY_LIST ====>', JSON.stringify(dataList));
    setStates(dataList);
    setTemp(dataList);
  }, []);

  const alertHandler = () => {
    Alert.alert('DETAILS', 'DO YOU WANT TO SAVE THIS LOCATION ', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          // Navigate to the 'savedLocation' screen
          props.navigation.navigate('savedLocation', {name: search});
        },
      },
    ]);
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator color={'red'} size={'large'} />
      ) : (
        !data && (
          <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
            <View
              style={{
                borderWidth: 2,
                width: '80%',
                height: '80%',
                borderRadius: 10,
                marginLeft: 20,
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'white',
              }}>
              <TextInput
                onFocus={() => {
                  SetSelected(true);
                }}
                value={search}
                onChangeText={text => {
                  setSearch(text);
                  onFilter(text);
                }}
                style={{width: '85%', fontSize: 20}}
                placeholder="search"
              />
              <TouchableOpacity onPress={ApiHandrler}>
                <FontAwesome6
                  style={{
                    paddingRight: 15,
                    paddingTop: 18,
                    backgroundColor: 'white',
                  }}
                  name="magnifying-glass"
                  size={22}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                alertHandler();
              }}
              style={{
                // width: '20%',
                // marginLeft: '80%',
                // marginTop: 20,
                // marginRight: '2%',
                paddingTop: 20,
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}>
              <Entypo name="menu" size={45} color="black" />
            </TouchableOpacity>
          </View>
        )
      )}
      {selected && search ? (
        <View
          style={{
            width: '80%',
            borderWidth: 1,
            height: '40%',
            marginHorizontal: 20,
            marginTop: 15,
          }}>
          <View
            style={{
              borderWidth: 1,
              width: '80%',
              borderRadius: 10,
              marginTop: 20,
              marginLeft: 20,
              flexDirection: 'row',
              marginBottom: 10,
              backgroundColor: 'white',
            }}>
            <FlatList
              data={states}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    setSearch(`${item.cityName}, ${item.countryName}`);
                    // ApiHandrler();
                    SetSelected(false);
                  }}
                  style={{
                    width: '90%',
                    height: 40,
                    marginVertical: 10,
                    borderBottomWidth: 0.3,
                    borderWidth: 1,
                    marginLeft: 20,
                    backgroundColor: 'black',
                    flexDirection: 'row',
                  }}>
                  <Entypo name="location-pin" size={25} color="red" />
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    {item.cityName}, {item.countryName}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      ) : null}

      {data ? (
        <View style={{height: '10%'}}>
          <TouchableOpacity
            onPress={backButtonHandler}
            style={{
              backgroundColor: 'white',
              width: '40%',
              height: '35%',
              borderRadius: 10,
              marginTop: 10,
              marginLeft: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                textAlign: 'center',
                paddingVertical: 5,
              }}>
              Back Button
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {data ? (
        <View
          style={{
            justifyContent: 'center',
            marginVertical: 30,
            // backgroundColor: 'green',
            marginLeft: 10,
            width: '100%',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 35,
              fontWeight: 'bold',
              marginHorizontal: 60,
              textAlign: 'center',
              // backgroundColor: 'red',
            }}>
            {data?.name},{data?.sys?.country}
          </Text>
        </View>
      ) : null}

      {data ? (
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            marginVertical: 40,
            height: '20%',
            justifyContent: 'center',
            // backgroundColor: 'red',
          }}>
          {getWeatherImage(weatherCondition)}
        </View>
      ) : null}
      {data ? (
        <Text
          style={{
            fontSize: 80,
            color: 'black',
            fontWeight: 'bold',
            // backgroundColor: 'blue',
            textAlign: 'center',
          }}>
          {Math.round(data?.main?.temp - 273)}&deg;C
        </Text>
      ) : null}
      {/* <Text style={{textAlign: 'center', color: 'black', fontSize: 20}}>
        {data?.weather[0]?.description}
      </Text> */}
      {data ? (
        <View
          style={{
            // backgroundColor: 'blue',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: 40,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 80,
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../../assests/images/svg/windy.jpg')}
            />
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              {data?.wind?.speed}km
            </Text>
            <Text>Windy</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 80,
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              style={{height: 50, width: 50, backgroundColor: 'black'}}
              source={require('../../assests/images/svg/humidity.jpeg')}
            />
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              {data?.main?.humidity}%
            </Text>
            <Text style={{color: 'black'}}>Humidity</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 80,
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../../assests/images/svg/Pressure.png')}
            />
            <Text style={{color: 'black'}}>{data?.main?.pressure}</Text>
            <Text style={{color: 'black'}}>Pressure</Text>
          </View>
        </View>
      ) : (
        <View style={{alignItems: 'center'}}>
          <Image
            style={{
              height: deviceHeight,
              width: deviceWidth,
              zIndex: -1,
              position: 'absolute',
            }}
            source={require('../../assests/images/svg/bg.png')}
          />
          <Text
            style={{
              fontSize: 40,
              marginVertical: 350,
              color: 'white',
            }}>
            Weather App
          </Text>
        </View>
      )}
    </>
  );
};

export default Homescreen;
