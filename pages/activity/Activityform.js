/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import qrcode from 'qrcode';
import { useEffect } from 'react';

const Activityform = () => {
  const [activityName, setActivityName] = useState('');
  const [activityDescription, setActivityDescription] = useState('');
  const [activityDate, setActivityDate] = useState('');
  const [qrCode, setQRCode] = useState('');
  const [coordinates, setCoordinates] = useState({});
  const [isClose, setIsClose] = useState(false);
  const radius = 150;
  const router = useRouter();

   useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isClose) {
      try {
        const qr = await qrcode.toDataURL(JSON.stringify({
          activityName,
          activityDescription,
          activityDate,
          coordinates,
        }));
        setQRCode(qr);
        await axios.post('/api/activity', {
          activityName,
          activityDescription,
          activityDate,
          coordinates,
          qr,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("you are too close to the location please move away and try again ")
    }
  };
    




  function getDistanceFromLatLonInM(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
    Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d * 1000;
    }
    
    function deg2rad(deg) {
    return deg * (Math.PI / 180);
    }




  return (
    <div className="bg-white p-4 rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Activity Name
          </label>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            type="text"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Activity Description
          </label>
          <textarea
            className="bg-gray-200 p-2 rounded-lg w-full"
            value={activityDescription}
            onChange={(e) => setActivityDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Activity Date
          </label>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            type="date"
            value={activityDate}
            onChange={(e) => setActivityDate(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-lg" disabled={isClose}>
Save Activity</button>
    
</form>
{qrCode && (
<div className="my-4">
<label className="block text-gray-700 font-medium mb-2">
QR Code
</label>
<img src={qrCode} alt="QR code" className="w-full" />
</div>
)}
</div>
);
};

export default Activityform;


