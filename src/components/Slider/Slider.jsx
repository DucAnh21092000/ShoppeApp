import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import image1 from '../../../assets/images/image1.jpg'
import image2 from '../../../assets/images/image2.jpg'
import image3 from '../../../assets/images/image3.jpg'
import image4 from '../../../assets/images/image4.jpg'

import { Autoplay, Pagination, Navigation } from 'swiper'
const Slider = () => {
    return (
        <View>
            <View style={{ height: 200}}>
                <Swiper autoplay={true} horizontal={true} >
                    <View style={styles.slideImage}>
                        <ImageBackground style={styles.image} resizeMode='cover' height={10} source={image1} />
                    </View>
                    <View style={styles.slideImage}>
                        <ImageBackground style={styles.image} resizeMode='cover' source={image2} />
                    </View>
                    <View style={styles.slideImage}>
                        <ImageBackground style={styles.image} resizeMode='cover' source={image3} />
                    </View>
                    <View style={styles.slideImage}>
                        <ImageBackground style={styles.image} resizeMode='cover' source={image4} />
                    </View>
                </Swiper>
            </View>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    slideImage: {
        height: 300
    },
    image: {
        height: '100%',
        width: 810
    }
})