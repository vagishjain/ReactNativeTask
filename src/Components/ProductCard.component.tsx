import React, {FC, memo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ProductInterface} from '../Stores/types/productList.types';
import {getDeviceHeight, getDeviceWidth} from '../Utils/getDimensions';

const deviceHeight: number = getDeviceHeight();
const deviceWidth: number = getDeviceWidth();

const ProductCard: FC<ProductInterface> = ({
  name,
  price,
  image_link,
  rating,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: image_link}}
          resizeMode={'contain'}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text adjustsFontSizeToFit numberOfLines={2} style={styles.nameText}>
          {name}
        </Text>
        <View style={styles.priceContainer}>
          {rating ? (
            <Text adjustsFontSizeToFit style={styles.priceText}>
              ⭐ {rating}{' '}
            </Text>
          ) : null}
          {price ? (
            <Text adjustsFontSizeToFit style={styles.priceText}>
              ${price}
            </Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    borderRadius: 10,
    width: deviceWidth * 0.3,
    height: deviceHeight * 0.15,
  },
  textContainer: {
    justifyContent: 'center',
    paddingHorizontal: 5,
    width: deviceWidth * 0.68,
  },
  image: {
    flex: 1,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 2,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  priceText: {
    fontSize: 15,
  },
});

export default memo(ProductCard);
