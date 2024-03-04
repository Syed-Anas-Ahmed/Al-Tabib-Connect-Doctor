import { FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, ButtonText, Card, Text, XStack } from 'tamagui';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { colors, styles } from '~/app/styles';
import * as Progress from 'react-native-progress';
import { url } from '~/env';
import TitleBar from '~/components/TitleBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import * as AsyncStorage from 'expo-secure-store';
import { SvgUri } from 'react-native-svg';
import Spinner from '~/components/Spinner';

const Page = () => {
  const checkToken = async () => {
    const token = AsyncStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  };
  const dispatch = useDispatch();
  const [clinicData, setclinicData] = useState([]);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);
  //USE YOUR OWN URL!!
  const uri = url;
  useEffect(() => {
    // Axios GET request to fetch doctors data
    axios
      .get(
        `http://192.168.10.6:8083/altabibconnect/getClinic?token=1658412004234568fec39-c43a-47d0-bb03-88cf68ae656d`
      )
      .then((res) => {
        console.log('Response:', JSON.stringify(res.data.data.doctorClinicDALS, null, 2));
        //setDoctorsData(res.data.data.doctors);
        setclinicData(res.data.data.doctorClinicDALS);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log('Docs Data: ', JSON.stringify(clinicData, null, 2));
  const handleGetAppointment = () => {
    //dispatch(addAppointment(doc, clinic));
    router.push('getAppointment');
  };
  return (

    

    <SafeAreaView style={styles.safeArea}>
      <TitleBar />
      <Card padding={10} gap={10} backgroundColor={colors.lightGray} alignItems="center">
        <Text fontFamily={'ArialB'} color={colors.linkBlue} fontSize={18}>
          Total Appointments today: <Text color={colors.green}>20</Text>
        </Text>
        <Text fontFamily={'ArialB'} color={colors.linkBlue} fontSize={18}>
          Completed Appointments today: <Text color={colors.green}>10</Text>
        </Text>
        <Text fontFamily={'ArialB'} color={colors.linkBlue} fontSize={18}>
          Pending Appointments today: <Text color={colors.yellow}>10</Text>
        </Text>
      </Card>
      <Card
        unstyled
        borderWidth={1}
        borderColor={colors.white}
        flex={1}
        padding={10}
        justifyContent="center"
        backgroundColor={colors.lightGray}
        animation="bouncy"
        gap={10}>
        {loading ? <Spinner title="Loading your Clinics"/> : (
          <>
            <Text fontFamily={'ArialB'} color={colors.linkBlue} alignSelf="center" fontSize={24}>
              Clinics List
            </Text>
            <FlatList
              refreshing={true}
              horizontal={false}
              decelerationRate="normal"
              data={clinicData}
              //keyExtractor={(item: any) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={{ paddingBottom: 10, gap: 5 }}>
                  {/* Doctor's information */}
                  <Card
                    style={{
                      borderWidth: 1,
                      borderColor: colors.border,
                      padding: 10,
                      paddingVertical: 15,
                      borderRadius: 10,
                      backgroundColor: colors.white,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{ gap: 10 }}>
                      <XStack gap={5}>
                        <Text fontFamily={'ArialB'} fontSize={'$6'} color={colors.yellow}>
                          Clinic Name:
                        </Text>
                        <Text fontFamily={'ArialB'} fontSize={'$6'} color={colors.linkBlue}>
                          {item.clinic.name}
                        </Text>
                      </XStack>
                      <XStack gap={5}>
                        <Text fontFamily={'ArialB'} fontSize={'$6'} color={colors.yellow}>
                          Clinic Address:
                        </Text>
                        <Text fontFamily={'ArialB'} fontSize={'$6'} color={colors.linkBlue}>
                          Street 123
                        </Text>
                      </XStack>
                      <XStack gap={5}>
                        <Text fontFamily={'ArialB'} fontSize={'$6'} color={colors.yellow}>
                          Clinic Timings:
                        </Text>
                        <Text fontFamily={'ArialB'} fontSize={'$6'} color={colors.linkBlue}>
                          {item.startTime} - {item.endTime}
                        </Text>
                      </XStack>
                      <XStack gap={5}>
                        <Text fontFamily={'ArialB'} fontSize={'$6'} color={colors.yellow}>
                          Charges:
                        </Text>
                        <Text fontFamily={'ArialB'} fontSize={'$6'} color={colors.linkBlue}>
                          {item.charges}
                        </Text>
                      </XStack>
                    </View>
                  </Card>
                  {/* Check Appointment Button */}
                  <XStack gap={5}>
                    <Button onPress={handleGetAppointment} flex={1} backgroundColor={colors.yellow}>
                      <ButtonText fontFamily={'ArialB'}>Get Token</ButtonText>
                    </Button>
                    <Button flex={1} backgroundColor={colors.linkBlue}>
                      <ButtonText fontFamily={'ArialB'}>View Appoinments</ButtonText>
                    </Button>
                  </XStack>
                </View>
              )}
            />
          </>
        )}
      </Card>
    </SafeAreaView>
  );
};
export default Page;
