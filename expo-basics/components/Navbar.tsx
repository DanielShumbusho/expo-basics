import {View, Text, StyleSheet} from 'react-native';

export default function Navbar() {
    return(
        <View style={styles.nav}>
            <Text style={styles.title}>My App Navbar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    nav:{
        height: 60,
        backgroundColor: '#222',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    title:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});