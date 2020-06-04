import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Context } from '../context/TrackContext';
import UserCredential from '../components/UserCredential';


const LoginScreen = ({ navigation }) => {
    const { state, signin } = useContext(Context);
    return (
        <View style={styles.containterStyle}> 
             <Button title='Go to signup screen' onPress={() => navigation.navigate('Signup')} />
             <UserCredential 
                 handleLogin={(email, password) => {signin({email, password})}}
                 state={state}
                 headerTitle="SigninScreen"
                 buttonText="sign in"
             />
        </View>
    );
}


const styles = StyleSheet.create({
    containterStyle: {
        flex:1
    }
});
export default LoginScreen;