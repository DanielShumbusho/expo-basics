import {View, Text, Button} from 'react-native';
import {Link} from 'expo-router';

export default function Profile(){
    return(
        <View style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
            <Text>Profile Screen</Text>
            <Link href="/">Go Home</Link>
        </View>
    );
}