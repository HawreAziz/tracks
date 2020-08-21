import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import UserCredential from '../components/UserCredential';
import { Context } from '../context/AuthContext';
import Spacer from "../components/Spacer";
import NavLink from "../components/NavLink";
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(Context);

    return (
        <View style={styles.containerStyle} >
            <NavigationEvents onWillFocus={clearErrorMessage} /> 
            <UserCredential 
              handleLogin={(email, password) => signup({email, password}) }
              errorMessage={state.errorMessage}
              headerTitle="SignupScreen"
              buttonText="Sign up"               
            />
            <NavLink
              goto='Login'
              text='Already have an account? Go to login instead.'
            />
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false 
    };
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    textStyle: {
        color: "blue",
    }
});

export default SignupScreen;