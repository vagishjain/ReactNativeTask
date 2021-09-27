import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Keyboard,
  SectionList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Styles from './ShowList.style';
import ProductCard from '../../Components/ProductCard.component';
import {
  ProductInterface,
  ProductListInterface,
} from '../../Stores/types/productList.types';
import screenNames from '../../Utils/screenNames';
import {getSectionListDataFromSectionKey} from '../../Utils/helperFunctions';
import colors from '../../Utils/colors';
import {fetchProductList} from '../../Stores/actions/productList.action';
import {useDebounce} from '../../Hooks/useDebounce';

const progressViewOffset: number = 60;

const ShowListScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const productList = useSelector(
    (state: ProductListInterface) => state?.getProductListReducer?.productList,
  );
  const isProductListLoading = useSelector(
    (state: ProductListInterface) => state?.getProductListReducer?.isLoading,
  );

  const [isFilterByType, setIsFilterByType] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [filteredDataList, setFilteredDataList] = useState<ProductInterface[]>(
    [],
  );

  const [debounce] = useDebounce(500);

  useEffect(() => {
    if (!productList?.length) {
      dispatchFetchProductList();
    } else {
      setFilteredDataList(productList);
    }
  }, [productList]);

  const dispatchFetchProductList = (): void => {
    if (isSearch) {
      dismissKeyboard();
      setIsSearch(isSearch => !isSearch);
      setSearch('');
      setFilteredDataList(productList);
    }
    dispatch(fetchProductList());
  };

  const searchText = (text: string): void => {
    if (text) {
      const newData: ProductInterface[] = productList.filter(
        (item: ProductInterface) => {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        },
      );
      setFilteredDataList(newData);
      setSearch(text);
    } else {
      setFilteredDataList(productList);
      setSearch(text);
    }
  };

  const dismissKeyboard = (): void => Keyboard.dismiss();

  const toggleFilter = (): void =>
    setIsFilterByType(isFilterByType => !isFilterByType);

  const onPressSearch = (): void => {
    if (isSearch) {
      dismissKeyboard();
      setSearch('');
      setFilteredDataList(productList);
    }
    setIsSearch(isSearch => !isSearch);
  };

  const onPressProduct = (id: number): void =>
    navigation.push(screenNames.PRODUCT_DETAILS_SCREEN, {id});

  const renderProductList = useCallback(
    ({item}: {item: ProductInterface}) => (
      <ProductCard {...item} onPress={() => onPressProduct(item.id)} />
    ),
    [productList],
  );

  return (
    <View style={Styles.container}>
      {isSearch ? (
        <View>
          <TextInput
            style={Styles.textInputStyle}
            onChangeText={text => searchText(text)}
            value={search}
            placeholder={'Search'}
            placeholderTextColor={colors.lightGrey}
            underlineColorAndroid={'transparent'}
          />
        </View>
      ) : null}
      {isFilterByType ? (
        <SectionList
          refreshing={isProductListLoading}
          progressViewOffset={progressViewOffset}
          onRefresh={dispatchFetchProductList}
          sections={getSectionListDataFromSectionKey(
            filteredDataList,
            'product_type',
          )}
          onMomentumScrollBegin={dismissKeyboard}
          renderItem={renderProductList}
          ItemSeparatorComponent={() => (
            <View style={Styles.productItemSeparator} />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={Styles.header}>{title}</Text>
          )}
        />
      ) : (
        <FlatList
          refreshing={isProductListLoading}
          progressViewOffset={progressViewOffset}
          onRefresh={dispatchFetchProductList}
          data={filteredDataList}
          onMomentumScrollBegin={dismissKeyboard}
          renderItem={renderProductList}
          ItemSeparatorComponent={() => (
            <View style={Styles.productItemSeparator} />
          )}
        />
      )}
      {productList?.length ? (
        <View style={Styles.footerContainer}>
          <TouchableOpacity
            onPress={() => debounce(onPressSearch)}
            style={Styles.filterTouchable}>
            <Text
              style={[
                Styles.filterText,
                isSearch ? {color: colors.darkBlue} : {},
              ]}>
              {isSearch ? 'Hide Search' : 'Show Search'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => debounce(toggleFilter)}
            style={Styles.filterTouchable}>
            <Text
              style={[
                Styles.filterText,
                isFilterByType ? {color: colors.darkBlue} : {},
              ]}>
              {isFilterByType ? 'Remove Filter' : 'Filter By Type'}
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default ShowListScreen;
