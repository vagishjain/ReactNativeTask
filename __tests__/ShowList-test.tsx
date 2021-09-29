import React from 'react';
import renderer from 'react-test-renderer';
import ShowListScreen from '../src/Screens/ShowList/ShowList.screen';
import ReduxProvider from '../src/Components/Provider.wrapper';
import ProductCard from '../src/Components/ProductCard.component';
import PaperProductCard from '../src/Components/PaperProductCard.component';

const onPress = jest.fn();
const id: number = 24;
const name: string = 'Maybeline';
const price: string = '';
const image_link: string = '';
const rating: number = 5;

test('Test ShowListScreen', () => {
  const tree = renderer
    .create(
      <ReduxProvider>
        <ShowListScreen />
      </ReduxProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test ProductCard component', () => {
  const tree = renderer
    .create(
      <ProductCard
        id={id}
        name={name}
        price={price}
        image_link={image_link}
        rating={rating}
        onPress={onPress}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test PaperProductCard component', () => {
  const tree = renderer
    .create(
      <PaperProductCard
        id={id}
        name={name}
        price={price}
        image_link={image_link}
        rating={rating}
        onPress={onPress}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
