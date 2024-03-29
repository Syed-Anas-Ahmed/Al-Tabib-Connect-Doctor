import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';
import * as SecureStore from 'expo-secure-store';
import { Button, ButtonText, Card, Separator, Text, XStack, YStack } from 'tamagui';
import { AntDesign } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import axios from 'axios';
import * as Progress from 'react-native-progress';
import { url } from '~/env';
import { useDispatch } from 'react-redux';
import { addToken } from '~/context/actions/tokenActions';
import { addUser } from '~/context/actions/userActions';
import { colors, styles } from '~/app/styles';

const LoginCard = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState('03323403109');
  const [pass, setPass] = useState('password123');
  const [showPass, setShowPass] = useState(true);

  const validateNum = (num: string) => num.length >= 11;
  const isEmptyString = (str: string) => str.trim() === '';

  const emptyFields = (num: string, password: string) => ![num, password].some(isEmptyString);

  const validateSubmit = (num: string, password: string) =>
    validateNum(num) && emptyFields(num, password);

  const handleNumChange = (text: string) => {
    setNum(text);
  };

  const handlePassChange = (text: string) => {
    setPass(text);
  };

  const handleSubmit = () => {
    if (!validateSubmit(num, pass)) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please fill all details correctly',
        button: 'Close',
      });
    } else {
      setLoading(true);
      fetchLoginData();
    }
  };

  const getCurrentTimestamp = () => {
    const now = new Date();
    const date = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${date}-${month}-${year}-${hours}-${minutes}-${seconds}`;
  };

  const currentTimeStamp = getCurrentTimestamp();

  //USE YOUR OWN URL!!

  const uri = url;

  const loginUrl = `${uri}login?username=${num}&password=${pass}&UUID=${currentTimeStamp}&type=3`;

  const fetchLoginData = () => {
    setLoading(true);
    axios
      .get(loginUrl)
      .then((response) => {
        //console log token
        console.log('RESPONSE: ', JSON.stringify(response, null, 2));
        if (response.status === 200) {
          const USER = {
            name: num,
            pass: pass,
            token: response.data.data.token,
          };

          dispatch(addToken(response.data.data.token));
          dispatch(addUser(USER));

          console.log('RESPONSE STATUS: ', JSON.stringify(response.status, null, 2));
          console.log('TOKEN: ', JSON.stringify(response.data.data.token, null, 2));
          SecureStore.setItemAsync('token', response.data.data.token)
            .then(() => {
              console.log('Token stored successfully');
              router.replace('/(drawer)');
              setLoading(false);
            })
            .catch((error) => {
              console.error('Error storing token: ', error);
              setLoading(false);
            });
        } else {
          console.log('Error, Status code: ', response.status);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error('Server Error:', error.response.data);
          console.error('Status Code:', error.response.status);
          console.error('Headers:', error.response.headers);
          setLoading(false);
        } else if (error.request) {
          console.error('No response received:', error.request);
          setLoading(false);
        } else {
          console.error('Request Error:', error.message);
          setLoading(false);
        }
      });
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={10}
      style={{ width: '100%' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Card borderRadius={10} width={'100%'} padding={10} backgroundColor={colors.lightGray}>
        <YStack gap={20}>
          <XStack backgroundColor={colors.white} borderRadius={5} padding={10} gap={10}>
            <AntDesign name="phone" size={24} color={colors.primary} />
            <Separator vertical borderColor={'lightgray'} />
            <TextInput
              value={num}
              keyboardType="numeric"
              maxLength={11}
              style={{ padding: 0, flex: 1, fontFamily: 'ArialB' }}
              placeholder="Phone"
              onChangeText={handleNumChange}
              placeholderTextColor="#808080a4"
            />
          </XStack>
          <XStack backgroundColor={colors.white} borderRadius={5} padding={10} gap={10}>
            <AntDesign name="lock" size={24} color={colors.primary} />
            <Separator vertical borderColor={'lightgray'} />
            <TextInput
              value={pass}
              autoCapitalize="none"
              style={{ padding: 0, flex: 1, fontFamily: 'ArialB' }}
              placeholder="Password"
              onChangeText={handlePassChange}
              placeholderTextColor="#808080a4"
              secureTextEntry={showPass ? true : false}
            />
            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              <AntDesign name={showPass ? 'eye' : 'eyeo'} size={24} color={colors.primary} />
            </TouchableOpacity>
          </XStack>
          <TouchableOpacity onPress={fetchLoginData} style={styles.buttonPrimary}>
            {loading ? (
              (Keyboard.dismiss(),
              (<Progress.CircleSnail thickness={2} size={22} color={['white']} />))
            ) : (
              <Text color={colors.white} fontSize={20} fontFamily={'ArialB'}>
                Login
              </Text>
            )}
          </TouchableOpacity>
        </YStack>
      </Card>
    </KeyboardAvoidingView>
  );
};

export default LoginCard;
