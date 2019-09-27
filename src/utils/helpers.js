export const groupBy = key => array =>
  // https://gist.github.com/JamieMason/0566f8412af9fe6a1d470aa1e089a752
  array.reduce(
    (objectsByKeyValue, obj) => ({
      ...objectsByKeyValue,
      [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj)
    }),
    {}
  );

export const toObj = (array = [], key = "id") =>
  array.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
