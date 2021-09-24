import React from 'react';
import renderer from 'react-test-renderer';
import ShowListScreen from '../src/Screens/ShowList/ShowList.screen';
import ReduxProvider from "../src/Components/Provider.wrapper";

test('Test ShowListScreen', () => {
    const tree = renderer.create(<ReduxProvider><ShowListScreen /></ReduxProvider>).toJSON();
  expect(tree).toMatchSnapshot();
});
