import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {StackNavigationOptions} from '@react-navigation/stack/lib/typescript/src/types';
import ScreenConstants from '../Utils/screenNames';
import ShowListScreen from '../Screens/ShowList/ShowList.screen';
import ProductDetails from '../Screens/ProductDetails/ProductDetails.screen';

const Stack = createStackNavigator();

const commonStackOptions: StackNavigationOptions = {
  // headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
  gestureDirection: 'horizontal',
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenConstants.SHOW_LIST_SCREEN}
          component={ShowListScreen}
          options={{
            ...commonStackOptions,
            title: 'Product List',
            headerTitleAlign: 'left',
          }}
        />
        <Stack.Screen
          name={ScreenConstants.PRODUCT_DETAILS_SCREEN}
          component={ProductDetails}
          options={{...commonStackOptions, title: 'Product Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
