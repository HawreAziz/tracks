import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import Spacer from './Spacer';


const UserCredential =  ({ handleLogin, state, screenTitle, buttonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.containerStyle}>
            <Spacer>
             <Text style={{ color: '#4391DF'}} h3>{screenTitle}</Text>
            </Spacer>
            <Spacer>
             <Input 
             label="Email" 
             value={email}
             onChangeText={setEmail}
             outoCorrect={false}
             autoCapitalize="none" />

            </Spacer>
            <Spacer>
             <Input label="Password"
              onChangeText={setPassword}
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              value={password} />
            </Spacer>
            <Spacer>
            { state.errorMessage ? <Text style={styles.errorStyle}>{state.errorMessage}</Text> : null }
            <Button title='Sign Up' onPress={ () => handleLogin(email, password)} />
            </Spacer>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    errorStyle: {
        color: 'red',
        margin: 5
    }
});

export default UserCredential;