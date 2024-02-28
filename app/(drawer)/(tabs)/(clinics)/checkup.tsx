import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, styles } from '~/app/styles';
import TitleBar from '~/components/TitleBar';
import { Button, ButtonText, Card, Text, View, XStack } from 'tamagui';
import { Modal, TextInput, TouchableOpacity } from 'react-native';
import dayjs from 'dayjs';
import DateTimePicker, { DateType } from 'react-native-ui-datepicker';
import { BlurView } from 'expo-blur';


const Page = () => {

  const [date, setDate] = useState<DateType>(dayjs());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const currDate = date ? dayjs(date).format('DD-MMM-YYYY') : 'Choose Follow-up Date';

  return (
    <SafeAreaView style={styles.safeArea}>
      <TitleBar title="Check Up" />
      <Card gap={10} padded backgroundColor={colors.lightGray}>
        <XStack gap={5}>
          <Text fontSize={20} color={colors.primary}>
            Name:
          </Text>
          <Text fontSize={20} color={colors.yellow}>
            Anas
          </Text>
        </XStack>
        <XStack gap={5}>
          <Text fontSize={20} color={colors.primary}>
            Age:
          </Text>
          <Text fontSize={20} color={colors.yellow}>
            25
          </Text>
        </XStack>
        <XStack gap={5}>
          <Text fontSize={20} color={colors.primary}>
            Phone:
          </Text>
          <Text fontSize={20} color={colors.yellow}>
            1321321456654
          </Text>
        </XStack>
        <XStack gap={5}>
          <Text fontSize={20} color={colors.primary}>
            Gender:
          </Text>
          <Text fontSize={20} color={colors.yellow}>
            Male
          </Text>
        </XStack>

        <Card unstyled gap={10}>
          <XStack
            alignItems="center"
            padding={10}
            borderRadius={5}
            backgroundColor={'white'}
            gap={5}>
            <Text fontSize={18} color={colors.primary}>
              BP:
            </Text>
            <TextInput
              style={{
                flex: 1,
                borderBottomColor: colors.yellow,
                padding: 0,
                borderBottomWidth: 2,
              }}></TextInput>
          </XStack>

          <XStack
            alignItems="center"
            padding={10}
            borderRadius={5}
            backgroundColor={'white'}
            gap={5}>
            <Text fontSize={18} color={colors.primary}>
              Weight:
            </Text>
            <TextInput
              style={{
                flex: 1,
                borderBottomColor: colors.yellow,
                padding: 0,
                borderBottomWidth: 2,
              }}></TextInput>
          </XStack>

          <XStack
            alignItems="center"
            padding={10}
            borderRadius={5}
            backgroundColor={'white'}
            gap={5}>
            <Text fontSize={18} color={colors.primary}>
              Charges:
            </Text>
            <TextInput
              style={{
                flex: 1,
                borderBottomColor: colors.yellow,
                padding: 0,
                borderBottomWidth: 2,
              }}></TextInput>
          </XStack>
          <XStack
            alignItems="center"
            padding={10}
            borderRadius={5}
            backgroundColor={'white'}
            gap={5}>
            <Text fontSize={18} color={colors.primary}>
              Prescription:
            </Text>
            <TextInput
              style={{
                flex: 1,
                borderBottomColor: colors.yellow,
                padding: 0,
                borderBottomWidth: 2,
              }}></TextInput>
          </XStack>
          <XStack
            alignItems="center"
            padding={10}
            borderRadius={5}
            backgroundColor={'white'}
            gap={5}>
            <Text fontSize={18} color={colors.primary}>
              Diagnosis:
            </Text>
            <TextInput
              style={{
                flex: 1,
                borderBottomColor: colors.yellow,
                padding: 0,
                borderBottomWidth: 2,
              }}></TextInput>
          </XStack>

          {/* Treatment Selector */}

          <XStack
            alignItems="center"
            padding={10}
            borderRadius={5}
            backgroundColor={'white'}
            gap={5}>
            <Text fontSize={18} color={colors.primary}>
              Detail:
            </Text>
            <TextInput
              style={{
                flex: 1,
                borderBottomColor: colors.yellow,
                padding: 0,
                borderBottomWidth: 2,
              }}></TextInput>
          </XStack>

          <Button onPress={() => setIsModalVisible(true)} backgroundColor={colors.primary}>
            <ButtonText>{currDate}</ButtonText>
          </Button>
        </Card>
      </Card>

      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="fade">
        <BlurView
          style={{
            padding: 15,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          experimentalBlurMethod="dimezisBlurView">
          <View alignItems='center' backgroundColor={'white'} padding={10} borderRadius={10}>
            <Text fontFamily={"ArialB"} fontSize={22} color={colors.primary} marginBottom={15}>Choose Follow-up Date</Text>
            <DateTimePicker
              dayContainerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                backgroundColor: 'white',
                borderColor: colors.primary,
              }}
              headerButtonStyle={{ backgroundColor: 'white', borderRadius: 7 }}
              headerContainerStyle={{
                paddingHorizontal: 5,
                backgroundColor: colors.primary,
                borderRadius: 10,
              }}
              headerTextStyle={{
                color: 'white',
                fontSize: 20,
                fontFamily: 'ArialB',
              }}
              displayFullDays={true}
              weekDaysTextStyle={{ color: colors.primary, fontFamily: 'ArialB' }}
              todayTextStyle={{ color: colors.primary, fontFamily: 'ArialB' }}
              headerButtonColor={colors.primary}
              selectedItemColor={colors.primary}
              mode="single"
              date={date}
              onChange={(date) => setDate(date.date)}
            />
            <XStack>
              <TouchableOpacity style={{padding:15, borderRadius:5, alignItems:"center", backgroundColor:colors.primary, flex: 1 }} onPress={() => setIsModalVisible(false)}>
                <Text color={colors.white} fontFamily={"ArialB"}>Close</Text>
              </TouchableOpacity>
            </XStack>
          </View>
        </BlurView>
      </Modal>
    </SafeAreaView>
  );
};

export default Page;