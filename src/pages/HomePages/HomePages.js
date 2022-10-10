import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import Menu from '../../layouts/Menu/Menu'

const HomePages = () => {
    return (
        <View>
           <View>
                <Header />  
           </View>
            <View>
                <Menu />
            </View>
        </View>
    )
}

export default HomePages

const styles = StyleSheet.create({})