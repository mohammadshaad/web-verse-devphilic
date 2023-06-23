import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RoomDetails = () => {
    const [roomDetails, setRoomDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRoomDetails();
    }, []);

    const fetchRoomDetails = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/v1/student/mess-details/', {
                headers: {
                    'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicmVnTm8iOiIyMUJDRTE1NDIiLCJuYW1lIjoiTW9oYW1tYWQgU2hhYWQiLCJibG9jayI6IkMiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY4NzU1NjQwMiwiZXhwIjoxNjg3NjQyODAyfQ.dfQB2NvTCWujS9qzpGzBBkFo7UnCDr1opLXs-FFviwc',
                },
            });

            if (response.status === 200) {
                setRoomDetails(response.data);
                setLoading(false);
            } else {
                console.log('Failed to fetch room details');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    if (loading) {
        return <div className='flex items-center justify-center w-screen h-screen'>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
            <h1 className="text-2xl font-bold mb-4">Mess Details</h1>
            {roomDetails ? (
                <div className="border border-gray-400 rounded-md p-4">
                    {/* <h2 className="text-lg font-bold mb-2">Room Number: {roomDetails.roomNumber}</h2>
                    <p className="text-sm">Building: {roomDetails.building}</p>
                    <p className="text-sm">Floor: {roomDetails.floor}</p>
                    <p className="text-sm">Capacity: {roomDetails.capacity}</p> */}
                </div>
            ) : (
                <p>No room details available</p>
            )}
        </div>
    );
};

export default RoomDetails;
