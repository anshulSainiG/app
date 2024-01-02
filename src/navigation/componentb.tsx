import {Text, View} from 'react-native';
import React, {memo} from 'react';

const ComponentB = ({value}) => {
  console.log('componentb');
  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

export default memo(ComponentB);
