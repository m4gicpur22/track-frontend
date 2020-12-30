import React, {useContext, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../Components/Spacer';
import { Context as authContext } from '../Context/authContext';

const signupScreen = ({navigation}) =>{
    const { state, signup } = useContext(authContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>  
            <Spacer>
                <Text h3 style={{textAlign: 'center'}}>Sign up for Tracker</Text>
            </Spacer>
                <Input 
                    label="Email" 
                    value={email} 
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Input 
                    secureTextEntry
                    label="Password" 
                    value={password} 
                    onChangeText={setPassword}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
            <Spacer>
            {state.errorMessage ? <Text style={styles.errMssg}>{state.errorMessage}</Text> : null }
                <Button title="Sign up"  onPress={() => signup({email, password})}/>
            </Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Spacer>
                    <Text style={styles.link}>Already have an account? Sign in instead</Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    );

}

signupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container : {
        borderColor: 'red',
        borderWidth: 10,
        flex: 1,
        justifyContent: 'center'
        // marginBottom: 250
    },
    errMssg : {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    link : {
        color: 'blue'
    }
});

export default signupScreen;