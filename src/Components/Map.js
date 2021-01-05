import React, {useContext} from 'react';
import { ActivityIndicator } from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import MapView, { Polyline, Circle} from 'react-native-maps';
import { Context as LocationContext } from '../Context/LocationContext';

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext);

    if(!currentLocation)
        return <ActivityIndicator size="large" style={{marginTop: 200}} />

    //console.log(state); <= for some reason printing this throws an error, want to figure out why: Lecture 241 //ReferenceError: Can't find variable: state

    return (
        <MapView 
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            >
                <Circle 
                    center={currentLocation.coords}
                    radius={30}
                    strokeColor="rgba(158, 158, 255, 1.0)"
                    fillColor="rgba(158, 158, 255, 0.3)"
                />
                <Polyline coordinates={locations.map( (loc) => loc.coords )} />
        </MapView>
    );
}

const styles = StyleSheet.create({
    map : {
        height: 300
    }
});

export default Map;