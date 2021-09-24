import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import {getDeviceHeight} from '../../Utils/getDimensions';

const deviceHeight: number = getDeviceHeight();

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  productImageContainer: {
    height: deviceHeight * 0.4,
  },
  productImage: {
    flex: 1,
  },
  nameText: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ratingsText: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  colorContainer: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorView: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  descriptionHeadingText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  productDescriptionText: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
});
