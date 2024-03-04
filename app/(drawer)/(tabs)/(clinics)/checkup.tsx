import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, styles } from '~/app/styles';
import TitleBar from '~/components/TitleBar';
import {
  Button,
  ButtonText,
  Card,
  Text,
  View,
  XStack,
  Checkbox,
  Label,
  CheckboxProps,
  SizeTokens,
  ScrollView,
  YStack,
} from 'tamagui';
import { Modal, TextInput, TouchableOpacity } from 'react-native';
import dayjs from 'dayjs';
import DateTimePicker, { DateType } from 'react-native-ui-datepicker';
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

const Page = () => {
  const [date, setDate] = useState<DateType>(dayjs());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const currDate = date ? dayjs(date).format('DD-MMM-YYYY') : 'Choose Follow-up Date';

  const data = [
    { key: '1', value: 'Root Canal' },
    { key: '2', value: 'CBC' },
    { key: '3', value: 'Injection' },
  ];

  const details = [
    { key: '1', value: 'Milk Teeth' },
    { key: '2', value: 'Teeth 3' },
    { key: '3', value: 'Teeth Extraction' },
  ];

  const [selected, setSelected] = useState([]);
  const [treatDetail, setTreatDetail] = useState([]);



  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <TitleBar title="Check Up" />
        <Card gap={10} padded backgroundColor={colors.white}>
          {/* Patient Details */}

          <XStack gap={5}>
            <Text fontFamily={'ArialB'} fontSize={20} color={colors.primary}>
              Name:
            </Text>
            <Text fontFamily={'ArialB'} fontSize={20} color={colors.yellow}>
              Anas
            </Text>
          </XStack>
          <XStack gap={5}>
            <Text fontFamily={'ArialB'} fontSize={20} color={colors.primary}>
              Age:
            </Text>
            <Text fontFamily={'ArialB'} fontSize={20} color={colors.yellow}>
              25
            </Text>
          </XStack>
          <XStack gap={5}>
            <Text fontFamily={'ArialB'} fontSize={20} color={colors.primary}>
              Visit Date:
            </Text>
            <Text fontFamily={'ArialB'} fontSize={20} color={colors.yellow}>
              12-12-12
            </Text>
          </XStack>
          <XStack gap={5}>
            <Text fontFamily={'ArialB'} fontSize={20} color={colors.primary}>
              Token:
            </Text>
            <Text fontFamily={'ArialB'} fontSize={20} color={colors.yellow}>
              1
            </Text>
          </XStack>
        </Card>

        {/* Checkup Card */}

        <Card padded flex={1} backgroundColor={colors.white}>
          {/* Vital Signs */}

          <ScrollView style={{ flex: 1 }}>
            <YStack gap={10}>
              <XStack alignItems="center" borderRadius={5} backgroundColor={'white'} gap={5}>
                <TextInput
                  placeholderTextColor={colors.primary}
                  placeholder="Upper BP"
                  style={{
                    fontFamily: 'ArialB',
                    flex: 1,
                    borderBottomColor: colors.yellow,
                    padding: 0,
                    borderBottomWidth: 2,
                  }}></TextInput>
                <TextInput
                  placeholderTextColor={colors.primary}
                  placeholder="Lower BP"
                  style={{
                    fontFamily: 'ArialB',
                    flex: 1,
                    borderBottomColor: colors.yellow,
                    padding: 0,
                    borderBottomWidth: 2,
                  }}></TextInput>
              </XStack>

              {/* Weight */}

              <XStack alignItems="center" borderRadius={5} backgroundColor={'white'} gap={5}>
                <TextInput
                  placeholder="Weight"
                  placeholderTextColor={colors.primary}
                  style={{
                    fontFamily: 'ArialB',
                    flex: 1,
                    borderBottomColor: colors.yellow,
                    padding: 0,
                    borderBottomWidth: 2,
                  }}></TextInput>
              </XStack>

              {/* Charges */}

              <XStack alignItems="center" borderRadius={5} backgroundColor={'white'} gap={5}>
                <TextInput
                  placeholder="Charges"
                  placeholderTextColor={colors.primary}
                  style={{
                    flex: 1,
                    fontFamily: 'ArialB',
                    borderBottomColor: colors.yellow,
                    padding: 0,
                    borderBottomWidth: 2,
                  }}></TextInput>
              </XStack>

              {/* Prescription */}

              <XStack alignItems="center" borderRadius={5} backgroundColor={'white'} gap={5}>
                <TextInput
                  placeholder="Prescription"
                  placeholderTextColor={colors.primary}
                  style={{
                    flex: 1,
                    fontFamily: 'ArialB',
                    borderBottomColor: colors.yellow,
                    padding: 0,
                    borderBottomWidth: 2,
                  }}></TextInput>
              </XStack>

              {/* Diagnosis */}

              <XStack alignItems="center" borderRadius={5} backgroundColor={'white'} gap={5}>
                <TextInput
                  placeholder="Diagnosis"
                  placeholderTextColor={colors.primary}
                  style={{
                    flex: 1,
                    fontFamily: 'ArialB',
                    borderBottomColor: colors.yellow,
                    padding: 0,
                    borderBottomWidth: 2,
                  }}></TextInput>
              </XStack>

              {/* Treatment Selector */}
              <MultipleSelectList
                boxStyles={{ borderColor: colors.yellow, borderWidth: 2 }}
                dropdownStyles={{ borderColor: colors.yellow, borderWidth: 2 }}
                dropdownTextStyles={{ color: colors.primary }}
                badgeStyles={{ backgroundColor: colors.yellow }}
                inputStyles={{ color: colors.primary, fontFamily: 'ArialB' }}
                labelStyles={{ color: colors.primary, fontFamily: 'ArialB' }}
                placeholder="Choose treatments"
                maxHeight={150}
                setSelected={(val:any) => setSelected(val)}
                data={data}
                save="value"
                onSelect={() => alert(selected)}
                label="Selected Treatments:"
              />

              <MultipleSelectList
                boxStyles={{ borderColor: colors.yellow, borderWidth: 2 }}
                dropdownStyles={{ borderColor: colors.yellow, borderWidth: 2 }}
                dropdownTextStyles={{ color: colors.primary }}
                badgeStyles={{ backgroundColor: colors.yellow }}
                inputStyles={{ color: colors.primary, fontFamily: 'ArialB' }}
                labelStyles={{ color: colors.primary, fontFamily: 'ArialB' }}
                placeholder="Treatment Type"
                maxHeight={150}
                setSelected={(val:any) => setTreatDetail(val)}
                data={details}
                save="value"
                onSelect={() => alert(treatDetail)}
                label="Treatment Type"
              />

              {/* Detail */}

              <XStack alignItems="center" borderRadius={5} backgroundColor={'white'} gap={5}>
                <TextInput
                  placeholder="Detail"
                  placeholderTextColor={colors.primary}
                  style={{
                    fontFamily: 'ArialB',
                    flex: 1,
                    borderBottomColor: colors.yellow,
                    padding: 0,
                    borderBottomWidth: 2,
                  }}></TextInput>
              </XStack>

              {/* Choose followup Date */}

              <Text fontFamily={'ArialB'} color={colors.primary} fontSize={18}>
                Choose Follow-up Date:
              </Text>
              <Button onPress={() => setIsModalVisible(true)} backgroundColor={colors.yellow}>
                <ButtonText fontFamily={'ArialB'}>{currDate}</ButtonText>
              </Button>

              {/*  Checkbox completed */}

              <CheckboxWithLabel size="$4" defaultChecked />

              {/* Checkup Completed */}

              <XStack gap={10}>
                <Button flex={1} backgroundColor={colors.yellow}>
                  <ButtonText fontFamily={'ArialB'}>Patient History</ButtonText>
                </Button>
                <Button flex={1} backgroundColor={colors.primary}>
                  <ButtonText fontFamily={'ArialB'}>Submit</ButtonText>
                </Button>
              </XStack>
            </YStack>
          </ScrollView>
        </Card>
      </SafeAreaView>
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
          <View alignItems="center" backgroundColor={'white'} padding={10} borderRadius={10}>
            <Text fontFamily={'ArialB'} fontSize={22} color={colors.primary} marginBottom={15}>
              Choose Follow-up Date
            </Text>
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
              <TouchableOpacity
                style={{
                  padding: 15,
                  borderRadius: 5,
                  alignItems: 'center',
                  backgroundColor: colors.primary,
                  flex: 1,
                }}
                onPress={() => setIsModalVisible(false)}>
                <Text color={colors.white} fontFamily={'ArialB'}>
                  Close
                </Text>
              </TouchableOpacity>
            </XStack>
          </View>
        </BlurView>
      </Modal>
    </>
  );
};

export default Page;

export function CheckboxWithLabel({
  size,
  label = 'Checkup Completed',
  ...checkboxProps
}: CheckboxProps & { size: SizeTokens; label?: string }) {
  const id = `checkbox-${size.toString().slice(1)}`;
  return (
    <XStack width={300} alignItems="center" space="$2">
      <Checkbox
        backgroundColor={colors.lightGray}
        borderColor={colors.primary}
        borderWidth={2}
        id={id}
        size={size}
        {...checkboxProps}>
        <Checkbox.Indicator>
          <AntDesign name="check" size={16} color={colors.primary} />
        </Checkbox.Indicator>
      </Checkbox>

      <Label fontFamily={'ArialB'} color={colors.primary} size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
}
