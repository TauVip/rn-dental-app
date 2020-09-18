import axios from 'axios';
import Constants from "expo-constants";
const { manifest } = Constants;

axios.defaults.baseURL = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
? manifest.debuggerHost.split(`:`).shift().concat(`:6666`)
: `192.168.0.105:6666`;

export default axios;
