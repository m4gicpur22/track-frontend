import React, { useContext } from 'react';
import {Input, Button} from 'react-native-elements';
import Spacer from '../Components/Spacer';
import { Context as LocationContext } from '../Context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';


const TrackForm = () => {
    const { state: {name, recording, locations}, changeName, startRecording, stopRecording } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    // console.log(locations.length);


    return <>
    <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="Enter Name" />
    </Spacer>
    <Spacer>
        {recording ? <Button title="Stop recording.." onPress={stopRecording} />: <Button title="Start recording.." onPress={startRecording} /> }
    </Spacer>
    <Spacer>
        {!recording && locations.length ? <Button title="Save Recording" onPress={saveTrack}/> : null}
     </Spacer>
     </>
};

export default TrackForm;