import { ScrollView, StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import {Scrollbars} from 'react-custom-scrollbars'
const Menu = () => {


    return (
        <View style={{ backgroundColor: 'rgb(21, 203, 68)', marginV: 50 }}>
            <View style={{ backgroundColor: 'red', width: '100%', height: '100%' }}>
                <ScrollView  autoplay horizontal>
                    <View style={styles.box}>
                        <Icon style={styles.boxIcon} name='flash' size={25} color={'orange'} />
                        <Text style={styles.boxContent}>Khung Giờ Săn Sale</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon style={styles.boxIcon} name='flash' size={25} color={'orange'} />
                        <Text style={styles.boxContent}>Khung Giờ Săn Sale</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon style={styles.boxIcon} name='flash' size={25} color={'orange'} />
                        <Text style={styles.boxContent}>Khung Giờ Săn Sale</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon style={styles.boxIcon} name='flash' size={25} color={'orange'} />
                        <Text style={styles.boxContent}>Khung Giờ Săn Sale</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon style={styles.boxIcon} name='flash' size={25} color={'orange'} />
                        <Text style={styles.boxContent}>Khung Giờ Săn Sale</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon style={styles.boxIcon} name='flash' size={25} color={'orange'} />
                        <Text style={styles.boxContent}>Khung Giờ Săn Sale</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon style={styles.boxIcon} name='flash' size={25} color={'orange'} />
                        <Text style={styles.boxContent}>Khung Giờ Săn Sale</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon style={styles.boxIcon} name='flash' size={25} color={'orange'} />
                        <Text style={styles.boxContent}>Khung Giờ Săn Sale</Text>
                    </View>
                    <View style={styles.box}>
                        <Icon style={styles.boxIcon} name='flash' size={25} color={'orange'} />
                        <Text style={styles.boxContent}>Khung Giờ Săn Sale</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5
    },
    menuItems: {
        borderRightWidth: 1,
        maxHeight: 50,
        overflow: 'hidden',
        minHeight: 30,
        paddingHorizontal: 10,
        borderRightColor: 'rgb(61,56,59)'
    }
    ,
    content: {
        fontWeight: '400',
        fontSize: 11
    },
    box: {
        width: 90,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    },
    boxContent: {
        fontSize: 12,
        textAlign: 'center',
        color: 'white'
    },
    boxIcon: {
        backgroundColor: 'white',
        padding: 7,
        borderRadius: 15
    },
    boxLists: {
        flexDirection: 'row',
        height: 170,
        overflow: 'scroll',
        maxWidth: 550,
        flexWrap: 'wrap'
    },
    scrollBar: {
    }
})