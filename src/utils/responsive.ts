import {Dimensions, PixelRatio} from 'react-native';

const uiDesignDeviceWidth = 414;
const uiDesignDeviceHeight = 736;

const uiDesignMinCompatibleDeviceWidth = 375; // iPhone SE (2nd Generation)
const uiDesignMinCompatibleDeviceHeight = 667; // iPhone SE (2nd Generation)

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const deviceTooSmallForDesignBaseValues =
  deviceHeight < uiDesignMinCompatibleDeviceHeight;

const scaleToDeviceWidth = (designBaseValue: number): number => {
  let scaledValue = designBaseValue;
  if (deviceTooSmallForDesignBaseValues && designBaseValue !== 0) {
    scaledValue = (deviceWidth * designBaseValue) / uiDesignDeviceWidth;
  }
  return PixelRatio.roundToNearestPixel(scaledValue);
};

const scaleToDeviceHeight = (designBaseValue: number): number => {
  let scaledValue = designBaseValue;
  if (deviceTooSmallForDesignBaseValues && designBaseValue !== 0) {
    scaledValue = (deviceHeight * designBaseValue) / uiDesignDeviceHeight;
  }
  return PixelRatio.roundToNearestPixel(scaledValue);
};

export {scaleToDeviceWidth, scaleToDeviceHeight, deviceWidth, deviceHeight};
