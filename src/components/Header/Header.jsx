import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native'
import React from 'react'
import Slider from '../Slider/Slider'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFeather from 'react-native-vector-icons/Feather'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
const width = Dimensions.get('screen').width

const Header = () => {
    const [valueSearch, setValueSearch] = useState("Nhận ưu đãi hoàn xu đến 50%")
    const hi = () => {
        alert(123)
    }
    return (
        <View>
            <View style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.headerItems}>
                        <View style={styles.itemsLayout}>
                            <View style={styles.searchLayout}>
                                <TextInput style={styles.inputSearch} value={valueSearch} onChange={setValueSearch} />
                                <Icon name='camera-outline' size={30} style={styles.btnSearch} onPress={() => hi} />
                            </View>
                            <Icon name='cart-outline' size={30} color={'white'} style={{ backgroundColor: 'none' }} />
                            <IconFeather name='message-circle' size={30} color={'white'} style={{ backgroundColor: 'none' }} />
                        </View>
                    </View>
                    <Slider />
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerItems: {
        position: 'absolute',
        top: 50,
        zIndex: 99,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        left: 0,
        right: 0
    },
    itemsLayout: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    inputSearch: {
        backgroundColor: 'white',
        width: 250,
        height: 35,
        paddingLeft: 10,
        color: 'orange',
        borderRadius: 5
    },
    searchLayout: {
        position: 'relative',

    },
    btnSearch: {
        position: 'absolute',
        right: 10,
        top: 3,
        color: 'rgb(83,81,98)',

    }

})