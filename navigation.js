import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screens/ExploreScreen';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const DummyScreen = () => <View style={{ flex: 1, backgroundColor: 'white' }} />;

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home-outline';
          if (route.name === 'Explore') iconName = 'search-outline';
          else if (route.name === 'Cart') iconName = 'cart-outline';
          else if (route.name === 'Favourite') iconName = 'heart-outline';
          else if (route.name === 'Account') iconName = 'person-outline';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00AA6C',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Shop" component={DummyScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Cart" component={DummyScreen} />
      <Tab.Screen name="Favourite" component={DummyScreen} />
      <Tab.Screen name="Account" component={DummyScreen} />
    </Tab.Navigator>
  );
}
