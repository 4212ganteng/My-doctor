import AsyncStorage from "@react-native-async-storage/async-storage";
// to save data to localStorage
export const storeData = async (key, value) => {
  try {
    // convert from json tpo string
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

//   Get data from localStorage

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    //   conv str to json
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    // error reading value
  }
};
