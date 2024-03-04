import React from 'react';
import { Stack } from 'expo-router';
import TitleBar from '~/components/TitleBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, styles } from '~/app/styles';
import { Card, Image, Text, XStack } from 'tamagui';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Layout = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TitleBar title="Profile" />
      <Card gap={20} unstyled padded backgroundColor={'white'}>
        <Image
          alignSelf="center"
          height={100}
          width={100}
          borderRadius={50}
          source={{
            uri: 'https://lh3.googleusercontent.com/pw/ABLVV87DzwHP62UImU7R1nHuilbogC05sWMFkxIszzTzyME0YlXojhRgXQsDdn6S-ZQLVJhAlabuAEXUhNfJKTk5yYeYEGOmcfj0usKvHCrRv_SwepxHDhKCoVInKg-4nhSkmOMjjWtXDTZu-ut6e-NtC3fnhQ=w607-h607-s-no-gm',
          }}
        />
        <XStack>
          <Text color={colors.yellow} fontFamily={"ArialB"}>Name: </Text>
          <Text color={colors.primary} fontFamily={"ArialB"}>Moin Ansari</Text>
        </XStack>
        <XStack>
          <Text color={colors.yellow} fontFamily={"ArialB"}>Address: </Text>
          <Text color={colors.primary} fontFamily={"ArialB"}>123 Street</Text>
        </XStack>
        <XStack>
          <Text color={colors.yellow} fontFamily={"ArialB"}>Qualifications: </Text>
          <Text color={colors.primary} fontFamily={"ArialB"}>BDS, MBBS, FCPS</Text>
        </XStack>
        <TouchableOpacity style={styles.primBtn} onPress={() => {}}>
          <Text  fontFamily={"ArialB"} color={colors.white}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secBtn} onPress={() => {}}>
          <Text  fontFamily={"ArialB"} color={colors.white}>Logout</Text>
        </TouchableOpacity>
      </Card>
    </SafeAreaView>
  );
};

export default Layout;
