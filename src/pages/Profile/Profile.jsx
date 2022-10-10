import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'react-router-native'
const Profile = () => {
    return (
        <View>
            <View style={{ margin: 50 }}>
                <Link to={'/'} >
                    <Text>Go to HomePages</Text>
                </Link>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})