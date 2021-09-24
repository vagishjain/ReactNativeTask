import {StyleSheet} from 'react-native';
import colors from "../../Utils/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  productItemSeparator: {
    height: 5,
    // backgroundColor: 'black',
  },
  header: {
    fontSize: 32,
    paddingLeft: 20,
    paddingVertical: 10,
    backgroundColor: colors.white
  },
  footerContainer: {
    height: 50,
    borderTopWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    // alignContent: 'space-around',
    justifyContent: 'space-around',
  },
  filterTouchable: {
    flex: 0.5,
    height: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'cyan',
  },
  filterText: {
    fontSize: 20,
  },
  textInputStyle: {
    borderRadius: 5,
    borderWidth: 2,
    paddingLeft: 20,
    margin: 5,
    color: colors.lightGrey,
    borderColor: colors.darkBlue,
    backgroundColor: colors.white,
  },
});