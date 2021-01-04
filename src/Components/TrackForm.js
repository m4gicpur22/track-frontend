import React, { useContext } from 'react';
import {Input, Button} from 'react-native-elements';
import Spacer from '../Components/Spacer';
import { Context as LocationContext } from '../Context/LocationContext';

const TrackForm = () => {
    const { state: {name, recording, locations}, changeName, startRecording, stopRecording } = useContext(LocationContext);

    console.log(locations.length);

    return <>
    <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="Enter Name" />
    </Spacer>
    {recording ? <Button title="Stop recording.." onPress={stopRecording} />: <Button title="Start recording.." onPress={startRecording} /> }
     </>
};

export default TrackForm;