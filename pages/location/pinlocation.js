import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 13.7563,
  lng: 100.5018
};


function Map() {
  const [form] = Form.useForm();
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
  });

  const onMapClick = (event) => {
    setSelectedPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  }

  const onFinish = async (values) => {
    try {
      await axios.post('/api/location/', {
        name: values.name,
        position: selectedPosition
      });
      setIsSaved(true);
    } catch (error) {
      console.error(error);
    }
  }

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={8}
        center={center}
        onClick={onMapClick}
      >
        {selectedPosition && <Marker position={selectedPosition} />}
      </GoogleMap>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="name" rules={[{ required: true, message: 'Please input location name' }]}>
          <Input placeholder="Enter location name" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!selectedPosition}>Save</Button>
        </Form.Item>
      </Form>
      {isSaved && <p>Location saved!</p>}
    </div>
  );
}

export default Map;
