/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import a from '../assests/constants/data/cities.json';

type CityData = {
  [key: string]: string[];
};

const convertObjectToArray = (object: CityData) => {
  // Convert the object into an array of objects
  return Object.entries(object).map(([country, cities]) => ({
    title: country,
    data: cities,
  }));
};

const callback = () => {
  const [search, setSearch] = useState<string>('');

  // Convert the object to an array
  const dataArray = convertObjectToArray(a);

  return (
    <View style={{flex: 1}}>
      <TextInput
        style={{borderWidth: 2, fontWeight: 'bold', borderRadius: 10}}
        placeholder="Search..."
        placeholderTextColor={'black'}
        onChangeText={text => setSearch(text)}
        value={search}
      />
      {search ? (
        <SectionList
          sections={dataArray}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{height: 20, width: 80, backgroundColor: 'red'}}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          renderSectionHeader={({section: {title}}) => (
            <View style={{backgroundColor: 'blue'}}>
              <Text>{title}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default callback;
