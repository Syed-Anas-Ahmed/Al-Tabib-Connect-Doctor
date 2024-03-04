import { AntDesign, FontAwesome, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { colors } from '~/app/styles';

// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={styles.tabBarIcon} {...props} />;
// }

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.yellow,
        tabBarStyle: {
          backgroundColor: colors.white,
          height: '9%',
          paddingTop: 10,
        },
      }}>
      <Tabs.Screen
        name="(clinics)"
        options={{
          headerShown: false,
          tabBarLabel: 'Clinics',
          tabBarIcon: ({color}) => <AntDesign name="home" size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(summary)"
        options={{
          headerShown: false,
          tabBarLabel: 'Summary',
          tabBarIcon: ({color}) => <SimpleLineIcons name="graph" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <FontAwesome name="user-md" size={24} color={color} />
        }}
      />
    </Tabs>
  );
}