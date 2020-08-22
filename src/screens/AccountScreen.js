import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import { Context as authContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';



const AccountScreen = () => {
    const { signout } = useContext(authContext);
    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
        <Spacer />
         <Spacer>
             <Button 
                 title="Sign out"
                 type='outline'
                 raised
                 onPress={ signout }
             />
         </Spacer>
        </SafeAreaView>
    );
}

AccountScreen.navigationOptions = {
    title: "Account",
    tabBarIcon: <FontAwesome name='gear' size={20} />
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default AccountScreen;