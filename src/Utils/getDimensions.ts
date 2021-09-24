import {Dimensions} from 'react-native';

/*
 * Returns the width of device in number
 * */
export const getDeviceWidth = (): number => Dimensions.get('window').width;

/*
 * Returns the height of device in number
 * */
export const getDeviceHeight = (): number => Dimensions.get('window').height;
