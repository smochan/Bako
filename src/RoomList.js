import React, { useEffect, useState } from 'react';
import RoomName from './RoomName';
import io from 'socket.io-client';
import Cookies from 'js-cookie';
let socket;
const RoomList = () => {
	const [ rooms, setRooms ] = useState(null);
	const ENDPOINT = 'http://localhost:3001';
	useEffect(
		() => {
			socket = io(ENDPOINT);
		},
		[ ENDPOINT ]
	);
	useEffect(() => {
		socket.on('sendList', (data) => {
			setRooms(data.data.roomName);
			console.log(data.data.roomName);
		});
	}, []);
	return (
		<div>
			<RoomName room={rooms} />
		</div>
	);
};
export default RoomList;
