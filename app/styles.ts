import { StyleSheet } from 'react-native';

export const fontSizes = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export const colors = {
  primary: '#0066a1',
  primaryDark: '#2d3181',
  gradSec: '#23333a',
  black: '#525252',
  white: '#ffffff',
  labelGray: '#8a8a8a',
  linkBlue: '#0066a1',
  yellow: '#ffa600',
  green: '#0ab99c',
  red: '#ff0000',
  lightGray: '#f5f5f5',
  border: '#e6e6e6',
};

export const styles = StyleSheet.create({
  safeArea: {
    gap: 10,
    padding: 10,
    backgroundColor: colors.linkBlue,
    flex: 1,
  },
  imgStyle: {
    opacity: 0.5,
  },
  backGround: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  buttonPrimary: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 10,
  },
});
