import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, ButtonText, Card, Text, XStack, YStack } from 'tamagui';
import { colors } from '~/app/styles';
import TitleBar from '~/components/TitleBar';

export default function Page() {
  const [activeTab, setActiveTab] = useState('PENDING');

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <SafeAreaView style={{ rowGap: 10, padding: 10, backgroundColor: colors.linkBlue, flex: 1 }}>
      {/* Title Bar */}
      <TitleBar title="Get Appointment" />

      {/* Total Income Card */}
      <Card
        paddingVertical={10}
        borderRadius={10}
        backgroundColor={colors.lightGray}
        justifyContent={'center'}
        alignItems={'center'}>
        <Text fontFamily={'ArialB'} fontSize={18} color={colors.primary}>
          Total Income: 0
        </Text>
      </Card>

      {/* Tab Bar */}

      {/* Content */}
      <Card
        gap={20}
        padding={10}
        borderRadius={10}
        backgroundColor={colors.lightGray}
        flex={1}
        alignItems={'center'}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tabItem, activeTab === 'PENDING' && styles.activeTabItem]}
            onPress={() => handleTabPress('PENDING')}>
            <Text fontFamily={'ArialB'} fontSize={18} color={colors.primary}>
              Pending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabItem, activeTab === 'SUCCESSFUL' && styles.activeTabItem]}
            onPress={() => handleTabPress('SUCCESSFUL')}>
            <Text fontFamily={'ArialB'} fontSize={18} color={colors.primary}>
              Successful
            </Text>
          </TouchableOpacity>
        </View>
        {activeTab === 'PENDING' ? (
          <Card
            padded
            gap={10}
            width={'100%'}
            flexDirection="column"
            backgroundColor={colors.white}>
            <XStack gap={5}>
              <Text fontFamily={'ArialB'} fontSize={18} color={colors.yellow}>
                Name:
              </Text>
              <Text fontFamily={'ArialB'} fontSize={18} color={colors.primary}>
                Hashir
              </Text>
            </XStack>
            <XStack gap={5}>
              <Text fontFamily={'ArialB'} fontSize={18} color={colors.yellow}>
                Age:
              </Text>
              <Text fontFamily={'ArialB'} fontSize={18} color={colors.primary}>
                36
              </Text>
            </XStack>
            <XStack gap={5}>
              <Text fontFamily={'ArialB'} fontSize={18} color={colors.yellow}>
                Phone:
              </Text>
              <Text fontFamily={'ArialB'} fontSize={18} color={colors.primary}>
                +923323403109
              </Text>
            </XStack>
            <XStack gap={5}>
              <Text fontFamily={'ArialB'} fontSize={18} color={colors.yellow}>
                Token:
              </Text>
              <Text fontFamily={'ArialB'} fontSize={18} color={colors.primary}>
                1
              </Text>
            </XStack>
            <XStack gap={10}>
              <Button onPress={()=>router.push('/patientHistory')} flex={1} backgroundColor={colors.yellow}>
                <ButtonText fontFamily={'ArialB'} fontSize={14} color={colors.white}>
                  Patient History
                </ButtonText>
              </Button>
              <Button onPress={()=>router.push("checkup")} flex={1} backgroundColor={colors.primary}>
                <ButtonText fontFamily={'ArialB'} fontSize={14} color={colors.white}>
                  Checkup
                </ButtonText>
              </Button>
            </XStack>
          </Card>
        ) : (
          <Text>Successful Data</Text>
        )}
      </Card>
    </SafeAreaView>
  );
}

const styles = {
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabBar: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabItem: {
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: colors.yellow,
  },
};
