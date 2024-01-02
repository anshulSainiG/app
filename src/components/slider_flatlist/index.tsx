/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {View, FlatList, Image, Dimensions, StyleSheet} from 'react-native';
import {Dashboard} from '../../assests/constants/data/data1';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

type DashboardSOURCE = {
  id: string;
  imageSource: any;
};

const SliderFlatlist: React.FC = () => {
  const flatlistRef = useRef<FlatList | null>(null);
  const [index, setIndex] = useState<number>(0);

  const renderItem = ({item}: {item: DashboardSOURCE}) => (
    <View style={styles.container}>
      <Image source={item.imageSource} style={styles.image} />
    </View>
  );

  const renderDots = () => (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 10,
        position: 'absolute',
        bottom: 0,
      }}>
      {Dashboard.map((_: any, i: number) => (
        <View
          key={i.toString()}
          style={{
            width: index === i ? 20 : 10,
            height: index === i ? 12 : 10,
            backgroundColor: index === i ? 'black' : 'grey',
            borderRadius: index === i ? 30 : 10,
            marginLeft: 10,
          }}
        />
      ))}
    </View>
  );

  return (
    <View>
      <FlatList
        ref={ref => (flatlistRef.current = ref)}
        showsHorizontalScrollIndicator={false}
        data={Dashboard}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={event => {
          const x = event.nativeEvent.contentOffset.x;
          const calculatedIndex = Math.round(x / deviceWidth);
          setIndex(calculatedIndex);
        }}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      {renderDots()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    alignItems: 'center',
  },
  image: {
    width: deviceWidth - 20,
    height: deviceHeight / 2,
  },
});

export default SliderFlatlist;
