import React from 'react';
import {StyleSheet, TextProps, TextStyle, Text as RNText} from 'react-native';

interface IText extends TextProps {
  children?: React.ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  p?: boolean;
  size?: TextStyle['fontSize'];
  fontSize?: TextStyle['fontSize'];
  bold?: boolean;
  semibold?: boolean;
  weight?: TextStyle['fontWeight'];
  fontWeight?: TextStyle['fontWeight'];
  center?: boolean;
  color?: TextStyle['color'];
  opacity?: TextStyle['opacity'];
  font?: TextStyle['fontFamily'];
  fontFamily?: TextStyle['fontFamily'];
  align?: TextStyle['textAlign'];
  textAlign?: TextStyle['textAlign'];
  transform?: TextStyle['textTransform'];
  textTransform?: TextStyle['textTransform'];
  lineHeight?: TextStyle['lineHeight'];
  position?: TextStyle['position'];
  top?: TextStyle['top'];
  right?: TextStyle['right'];
  bottom?: TextStyle['bottom'];
  left?: TextStyle['left'];
}

const Text = ({
  children,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  size,
  fontSize,
  bold,
  semibold,
  weight,
  fontWeight,
  center,
  color,
  opacity,
  font,
  fontFamily,
  align,
  textAlign,
  transform,
  textTransform,
  lineHeight,
  position,
  top,
  right,
  bottom,
  left,
  style,
  ...props
}: IText) => {
  const textStyle = StyleSheet.flatten([
    h1 && {
      fontSize: 30,
      fontWeight: '700',
      fontFamily: fontFamily || font || 'PlusJakartaSans-Bold',
    },
    h2 && {
      fontSize: 16,
      fontWeight: '600',
      fontFamily: fontFamily || font || 'PlusJakartaSans-SemiBold',
    },
    h3 && {
      fontSize: 15,
      fontWeight: '500',
      fontFamily: fontFamily || font || 'PlusJakartaSans-Regular',
    },
    h4 && {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: fontFamily || font || 'PlusJakartaSans-Regular',
    },
    h5 && {
      fontSize: 14,
      fontWeight: '500',
      fontFamily: fontFamily || font || 'PlusJakartaSans-Medium',
    },
    p && {
      fontSize: 12,
      fontWeight: '400',
      fontFamily: fontFamily || font || 'PlusJakartaSans-Regular',
    },
    center && {textAlign: 'center'},
    (align || textAlign) && {textAlign: textAlign || align},
    bold && {fontWeight: '800'},
    semibold && {fontWeight: '600'},
    (weight || fontWeight) && {fontWeight: fontWeight || weight},
    (transform || textTransform) && {
      textTransform: textTransform || transform,
    },
    (size || fontSize) && {fontSize: fontSize || size},
    color && {color},
    opacity && {opacity},
    lineHeight && {lineHeight},
    position && {position},
    right !== undefined && {right},
    left !== undefined && {left},
    top !== undefined && {top},
    bottom !== undefined && {bottom},
    style,
  ]) as TextStyle;

  return (
    <RNText style={textStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
