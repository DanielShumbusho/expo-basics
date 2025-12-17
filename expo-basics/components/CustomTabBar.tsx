import {View, Text, Pressable, StyleSheet} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Tabs } from 'expo-router';

//Testing a custom bar
export default function CustomTabBar({state, navigation}: BottomTabBarProps){
    return(
        <>
        <View style={styles.container}>
            {state.routes.map((route, index) =>{
                const isFocused = state.index === index;
                const isHome = route.name === 'index';

                const animatedStyle = useAnimatedStyle(() => ({
                    width: withTiming(isFocused ? 120 : 50, { duration: 250 }),
                }));

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
                    <Pressable key = {route.key} onPress = {onPress} style={[styles.tab,isFocused && styles.tabExpanded,]}>
                        <Animated.View
                            style={[
                            styles.tab,
                            animatedStyle,
                            isFocused && styles.tabExpanded,
                            ]}
                        ></Animated.View>
                        <Text style = {styles.tabText}>
                            {route.name.toUpperCase()}
                        </Text>
                    </Pressable>
                )
            })}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    backgroundColor: '#ffffffff',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
  },

  tab: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#222',
  },

  tabExpanded: {
    paddingHorizontal: 1,
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
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -32 }],
    top: -20,
  },

  homeText: {
    fontSize: 28,
    color: 'white',
  },
})