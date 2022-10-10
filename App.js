import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeRouter, Route, Router, Routes, Link } from 'react-router-native';
import HomePages from './src/pages/HomePages/HomePages';
import Profile from './src/pages/Profile/Profile';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View>
      <NativeRouter>
        <Routes>
          <Route path='/' element={<HomePages />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </NativeRouter>
      <StatusBar ></StatusBar>
    </View>
  );
}
