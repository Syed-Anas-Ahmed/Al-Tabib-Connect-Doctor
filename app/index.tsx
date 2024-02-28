import { ImageBackground, Keyboard, Pressable } from 'react-native';
import React from 'react';
import { Text } from 'tamagui';
import { styles } from './styles';
import LoginCard from '~/components/loginRegister/LoginCard';

const index = () => {
  return (
    <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.backGround}
        imageStyle={styles.imgStyle}
        resizeMode="cover"
        source={require('../assets/patternBackground.png')}>
          <Text fontFamily={'ArialB'} fontSize={28} color={'white'}>
            Log in to your Account
          </Text>
          <LoginCard />
      </ImageBackground>
    </Pressable>
  );
};

export default index;
