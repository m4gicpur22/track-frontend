import React, {useContext, useCallback} from 'react';
import {Text, StyleSheet} from 'react-native';
import Map from '../Components/Map';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import {Context as LocationContext} from '../Context/LocationContext';
import useLoction from '../hooks/useLocation';
import TrackForm from '../Components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

import '../_mockLocation';

const trackCreateScreen = ({ isFocused }) =>{
    const {state, addLocation} = useContext(LocationContext);

    const callback = useCallback( (location) => {
            addLocation(location, state.recording)
    }, [state.recording]);

    const [err] = useLoction(isFocused || state.recording, callback);

    //console.log(isFocused);

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text style={{fontSize: 36, textAlign: 'center'}}>trackCreateScreen</Text>
            <Map />
            {err ? <Text>Please enable location services</Text>: null}
            <TrackForm />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({});

trackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
};

export default withNavigationFocus(trackCreateScreen);