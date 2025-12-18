import { IconSymbol } from '@/components/ui/icon-symbol';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function TabLayout(){
    return(
        <Tabs screenOptions = {{
            headerShown: false,
            tabBarActiveTintColor: '#4f46e5',
            tabBarInactiveTintColor: '#999',
            tabBarStyle:{
                backgroundColor: '#c8e6faff',
                borderTopWidth: 0,
                elevation: 0,
                height: 70,
                borderRadius: 30,
                marginHorizontal: 16,
                marginBottom: 16,
                position: 'absolute',
            }
            }}>
            <Tabs.Screen
                name='index'
                options = {{
                    title: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Animated.View
                        style={{
                        transform: [{ scale: focused ? 1.2 : 1 }],
                        }}
                    >
                    <IconSymbol 
                        size={30} 
                        // name={focused ? 'house.fill' :'house' }
                        name='house.fill'
                        color={color} /></Animated.View>),
                }}
            />
            <Tabs.Screen
                name='profile'
                options = {{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                    <Animated.View
                        style={{
                        transform: [{ scale: focused ? 1.2 : 1 }],
                        }}
                    >
                        <Ionicons
                        size={28}
                        name={focused ? 'person' : 'person-outline'}
                        color={color}
                        />
                    </Animated.View>),
                }}
            />
        </Tabs>
    )
}