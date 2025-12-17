import {View, Text, Pressable, StyleSheet} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

//Testing a custom bar
export default function CustomTabBar({state, navigation}: BottomTabBarProps){
    return(
        <View style={styles.container}>
            {state.routes.map((route, index) =>{
                const isFocused = state.index === index;
                const isHome = route.name === 'index';

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };

                //The floating home button button
                if(isHome){
                    return(
                        <Pressable key = {route.key} onPress = {onPress} style = {styles.homeButton}>
                            <Text style = {styles.homeText}>🏠</Text>
                        </Pressable>
                    );
                }

                //Normal other expandable tab buttons
                return(
                    <Pressable key = {route.key} onPress = {onPress} style={[styles.tab,isFocused && styles.tabExpanded,]}
                    >
                        <Text style = {styles.tabText}>
                            {route.name.toUpperCase()}
                        </Text>
                    </Pressable>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    backgroundColor: '#111',
    padding: 12,
    margin: 16,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  tab: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#222',
  },

  tabExpanded: {
    paddingHorizontal: 26,
    backgroundColor: '#4f46e5',
  },

  tabText: {
    color: 'white',
    fontSize: 12,
  },

  homeButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#4f46e5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40, // FLOATING EFFECT
  },

  homeText: {
    fontSize: 28,
    color: 'white',
  },
})