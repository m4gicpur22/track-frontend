import { useContext } from 'react';
import { Context as TrackContext } from '../Context/TrackContext';
import { Context as LocationContext } from '../Context/LocationContext';

export default () => {

    const { createTrack } = useContext(TrackContext);

    const { state: { locations, name }, reset } = useContext(LocationContext);

    const saveTrack = async () => {
        await createTrack(name, locations);
        reset();
    };

    return [saveTrack];
};