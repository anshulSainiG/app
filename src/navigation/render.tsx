import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Render = ({value}) => {
  console.log('value');
  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

export default Render;
