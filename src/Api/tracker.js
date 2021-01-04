import axios from 'axios';

//ngrok url link changes every 8 hours
//would be a good idea to add a script here that automates for closing, restarting, and bringing down the ulr link every 7-8 hours time-frame
export default axios.create({
    baseURL: 'http://02b7b629165e.ngrok.io'
});