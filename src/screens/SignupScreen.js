import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import UserCredential from '../components/UserCredential';
import { Context } from '../context/TrackContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(Context);
    return (
        <View style={styles.containerStyle} >
            <UserCredential 
              handleLogin={(email, password) => signup({email, password}) }
              state={state}
              headerTitle="SignupScreen"
              buttonText="Sign up"               
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
    }
});

export default SignupScreen;