import React, { useContext } from 'react';
import {FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext} from '../Context/TrackContext';
import { ListItem } from 'react-native-elements';

const trackListScreen = ({ navigation }) =>{

    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={ ({item}) => {
                    return (
                    <TouchableOpacity onPress={ ()=> {
                        navigation.navigate('TrackDetail', { _id: item._id });
                    }}>
                        <Text>{item.name}</Text>
                        <ListItem chevron title={item.name} />
                    </TouchableOpacity>
                    );
                }}
            />
        </>
    );

}

trackListScreen.navigationOptions = {
    title: 'Tracks'
};

const styles = StyleSheet.create({});

export default trackListScreen;