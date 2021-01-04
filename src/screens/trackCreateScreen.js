import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Map from '../Components/Map';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';

import '../_mockLocation';


const trackCreateScreen = () =>{

    const[err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) 
                throw new Error('Location permission not granted');

            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                console.log(location);
            });

        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() => {
        startWatching();
    }, []);

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text style={{fontSize: 36, textAlign: 'center'}}>trackCreateScreen</Text>
            <Map />
            {err ? <Text>Please enable location services</Text>: null}
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({});

export default trackCreateScreen;