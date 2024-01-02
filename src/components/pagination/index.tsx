/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import {ABC} from '../../assests/constants/data/data1';

const Pagination = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        // backgroundColor: 'red',
        // position: 'relative',
        alignSelf: 'center',
      }}>
      {ABC.map(id => (
        <View
          key={id.toString()}
          style={{
            width: 10,
            height: 10,
            backgroundColor: 'blue',
            borderRadius: 10,
            marginLeft: 10,
          }}
        />
      ))}
    </View>
  );
};

export default Pagination;
