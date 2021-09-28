import React, {FC, memo} from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-paper';
import {ProductInterface} from '../Stores/types/productList.types';

const PaperProductCard: FC<ProductInterface> = ({
  name,
  price,
  image_link,
  rating,
  onPress,
}) => {
  return (
    <Card style={{marginHorizontal: 10}} onPress={onPress}>
      <Card.Title
        title={name}
        subtitle={
          <Text>
            {rating ? (
              <Text adjustsFontSizeToFit>
                ⭐ {rating}
                {' | '}
              </Text>
            ) : null}
            {price ? <Text adjustsFontSizeToFit>${price}</Text> : null}
          </Text>
        }
        titleNumberOfLines={2}
        left={() => (
          <Image
            source={{uri: image_link}}
            resizeMode={'contain'}
            style={{flex: 1}}
          />
        )}
        leftStyle={styles.paperTitleLeft}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  paperTitleLeft: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderColor: 'black',
    // borderWidth: 1,
    marginHorizontal: -10,
    marginVertical: 10,
  },
});

export default memo(PaperProductCard);
