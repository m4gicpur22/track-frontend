import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const signupScreen = ({navigation}) =>{

    return (
        <>
            <Text style={{fontSize: 48}}>signupScreen</Text>
            <Button 
                title="Signin"
                onPress={ () => navigation.navigate('Signin')}
            />
            <Button
                title="Go to main flow"
                onPress={ () => navigation.navigate('mainFlow')}
            />
        </>
    );

}

const styles = StyleSheet.create({});

export default signupScreen;