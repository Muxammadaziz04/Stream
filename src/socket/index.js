import {io} from 'socket.io-client';

const options = {
  // "force new connection": true,
  // reconnectionAttempts: "Infinity", // avoid having user reconnect manually in order to prevent dead clients after a server restart
  // timeout : 10000, // before connect_error and connect_timeout are emitted.
  transports : ["websocket", 'polling']
}
const url = '192.168.0.102'
const socket = io('http://192.168.0.102:4000', options);

export default socket;