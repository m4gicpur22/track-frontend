import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from "../Components/Spacer";
import {Context as authContext} from '../Context/authContext';
import { SafeAreaView } from 'react-navigation';

const accountScreen = () =>{

    const { signout } = useContext(authContext);

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text style={{fontSize: 48, textAlign: 'center'}}>Account Screen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({});

export default accountScreen;