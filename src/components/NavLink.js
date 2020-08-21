import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation'; 



const NavLink = ({navigation, text, goto}) => {
    return <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate(goto)}>
          <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    </View>
}


const styles = StyleSheet.create({
    container: {
       margin: 10 
    },
    textStyle: {
        color: 'blue'
    }
})
export default withNavigation(NavLink);