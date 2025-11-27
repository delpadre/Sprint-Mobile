import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffffff',
        tabBarInactiveTintColor: '#000000ff',
        tabBarStyle: {
          backgroundColor: '#0079c8',
          borderTopWidth: 1,
          borderTopColor: '#0079c8',
          height: 75,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerStyle: {
          backgroundColor: '#0079c8',
        },
        headerTintColor: '#FFFFFF',
      }}>
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -20 }}>
              {/* Logo */}
              <Image 
                source={require('../../assets/images/images.png')} 
                style={{ width: 130, height: 130, marginLeft: 10, borderRadius: 6 }}
                resizeMode="contain"
              />
              {/* Título */}
              <Text style={{ color: '#FFFFFF', fontSize: 18, marginLeft: 180, fontWeight: 'bold' }}>
                DuoHealth
              </Text>
            </View>
          ),
        }}
      />
      
      <Tabs.Screen
        name="missions"
        options={{
          title: 'Missões',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-alt" size={size} color={color} />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -20 }}>
              {/* Logo */}
              <Image 
                source={require('../../assets/images/images.png')} 
                style={{ width: 130, height: 130, marginLeft: 10, borderRadius: 6 }}
                resizeMode="contain"
              />
              {/* Título */}
              <Text style={{ color: '#FFFFFF', fontSize: 18, marginLeft: 180, fontWeight: 'bold' }}>
                DuoHealth
              </Text>
            </View>
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -20 }}>
              {/* Logo */}
              <Image 
                source={require('../../assets/images/images.png')} 
                style={{ width: 130, height: 130, marginLeft: 10, borderRadius: 6 }}
                resizeMode="contain"
              />
              {/* Título */}
              <Text style={{ color: '#FFFFFF', fontSize: 18, marginLeft: 180, fontWeight: 'bold' }}>
                DuoHealth
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}