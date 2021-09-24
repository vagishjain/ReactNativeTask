import React from 'react';
import renderer from 'react-test-renderer';
import ProductDetails from '../src/Screens/ProductDetails/ProductDetails.screen';
import ReduxProvider from "../src/Components/Provider.wrapper";

test('Test ProductDetails', () => {
  const tree = renderer
      .create(<ReduxProvider><ProductDetails route={{params: {id: 24}}} /></ReduxProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
