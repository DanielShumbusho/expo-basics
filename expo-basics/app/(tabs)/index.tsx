import { View, Text } from 'react-native';
import Navbar from '../../components/Navbar';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Hello Expo 👋</Text>
      <Navbar/>
    </View>
  );
}
