import {View, Text, Button} from 'react-native';
import {Link} from 'expo-router';

export default function Profile(){
    return(
        <View>
            <Text>Profile Screen</Text>
            <Link href="/">Go Home</Link>
        </View>
    );
}