/*
 * Returns the collection that contains {key: Array, key2: Array....}
 * @param array An array of JSON objects that has key to filter on
 * @param key A string value on which groupBy will be applied
 * */
export const groupBy = <T>(array: T[], key: string): object =>
  array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue,
    );
    return result;
  }, {});

/*
 * Returns the array that contains {title: string, data: Array}
 * @param array An array of JSON objects that has key to filter on
 * @param key A string value on which groupBy will be applied
 * */
export const getSectionListDataFromSectionKey = <T>(
  array: T[],
  key: string,
): Array =>
  Object.entries(groupBy(array, key)).map((entry: Array) => {
    return {title: entry[0], data: entry[1]};
  });
