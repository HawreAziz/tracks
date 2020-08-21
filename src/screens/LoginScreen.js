import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import UserCredential from '../components/UserCredential';
import NavLink from "../components/NavLink";


const LoginScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(Context);
    return (
        <View style={styles.containterStyle}> 
             <NavigationEvents onWillFocus={clearErrorMessage} />
             <UserCredential 
                 handleLogin={(email, password) => {signin({email, password})}}
                 errorMessage={state.errorMessage}
                 headerTitle="SigninScreen"
                 buttonText="Sign in"
             />
             <NavLink 
               goto='Signup'
               text="Do not have an account? Go back to sign up."
             />
        </View>
    );
}


LoginScreen.navigationOptions = () => {
    return {
        headerShown: false 
    };
};

const styles = StyleSheet.create({
    containterStyle: {
        flex:1
    }
});
export default LoginScreen;