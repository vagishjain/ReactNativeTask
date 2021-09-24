import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {
  ProductColors,
  ProductInterface,
  ProductListInterface,
} from '../../Stores/types/productList.types';
import Styles from './ProductDetails.style';

const ProductDetails = ({navigation, route}) => {
  const {id} = route?.params;

  const productList = useSelector(
    (state: ProductListInterface) => state?.getProductListReducer?.productList,
  );

  const [productData, setProductData] = useState<ProductInterface>(
    productList.find((product: ProductInterface) => product.id == id),
  );

  useEffect(() => {
    navigation.setOptions({title: productData.name});
  }, [navigation]);

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.productImageContainer}>
        <Image
          resizeMode={'contain'}
          source={{uri: productData.image_link}}
          style={Styles.productImage}
        />
      </View>
      <Text style={Styles.nameText}>{productData.name}</Text>
      {productData.rating ? (
        <Text style={Styles.ratingsText}>⭐ {productData.rating} Out of 5</Text>
      ) : null}
      {productData.price ? (
        <Text style={Styles.nameText}>${productData.price}</Text>
      ) : null}
      {productData?.product_colors?.length ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={productData.product_colors}
          renderItem={({item}: {item: ProductColors}) => (
            <View style={Styles.colorContainer}>
              <View
                style={[Styles.colorView, {backgroundColor: item.hex_value}]}
              />
              <Text>{item.colour_name}</Text>
            </View>
          )}
        />
      ) : null}
      <Text style={Styles.descriptionHeadingText}>Product Description:</Text>
      <Text style={Styles.productDescriptionText}>
        {productData.description}
      </Text>
    </ScrollView>
  );
};

export default ProductDetails;
