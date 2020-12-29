import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
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
                <Button title="Sign up"  onPress={() => signup({email, password})}/>
            </Spacer>
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
    }
});

export default signupScreen;