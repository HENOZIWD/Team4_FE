import { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MarkerInfo } from '../../types/map';
import Marker from '../molecules/marker';
import { useGeolocation } from '../../hooks/geolocation';
import Button from '../atoms/button';
import { getStoresInBound } from '../../apis/map';
import { fetchWithHandler } from '../../utils/fetchWithHandler';

const containerStyle = {
  width: '100%',
  height: '100%',
};

export default function MyGoogleMap() {
  const [map, setMap] = useState<google.maps.Map>();
  const [bound, setBound] = useState<google.maps.LatLngBounds>();
  const [stores, setStores] = useState<MarkerInfo[]>([]);
  const [tilesLoaded, setTilesLoaded] = useState(false);
  const [isStoreLoading, setIsStoreLoading] = useState(false);
  const { location } = useGeolocation();

  const fetchStores = async (curentBound: google.maps.LatLngBounds) => {
    const lowLat = curentBound.getSouthWest().lat();
    const lowLng = curentBound.getSouthWest().lng();
    const highLat = curentBound.getNorthEast().lat();
    const highLng = curentBound.getNorthEast().lng();

    fetchWithHandler(
      async () => {
        setIsStoreLoading(true);
        const response = await getStoresInBound({
          lowLat, lowLng, highLat, highLng,
        });

        return response;
      },
      {
        onSuccess: (response) => {
          const data = response?.data.response;
          setStores(data);
          setIsStoreLoading(false);
        },
        onError: (error) => {
          console.error(error);
          setIsStoreLoading(false);
        },
      },
    );
  };

  const handleLoad = (loadedMap: google.maps.Map) => {
    setMap(loadedMap);
  };

  const handleTilesLoaded = () => {
    if (!tilesLoaded) { // initial load
      const currentBound = map?.getBounds();
      setBound(currentBound);

      fetchStores(currentBound!);
      setTilesLoaded(true);
    }
  };

  const handleDragEnd = () => {
    const currentBound = map?.getBounds();
    if (currentBound) {
      setBound(currentBound);
    }
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
  });

  return (
    isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={18}
        onTilesLoaded={handleTilesLoaded}
        onLoad={handleLoad}
        onDragEnd={handleDragEnd}
        options={{
          mapTypeControl: false,
          streetViewControl: false,
          styles: [{
            featureType: 'poi',
            elementType: 'all',
            stylers: [{
              visibility: 'off',
            }],
          }],
          minZoom: 14,
        }}
      >
        <Button
          extraStyle={`absolute bottom-4 left-1/2 -translate-x-1/2 ${isStoreLoading ? 'bg-matgpt-gray' : ''}`}
          onClick={() => fetchStores(bound!)}
          disabled={isStoreLoading}
        >
          범위 내 음식점 검색
        </Button>
        {stores.map(({
          lat, lng, storeId, storeName, image,
        }) => (
          <Marker
            key={storeId}
            lat={lat}
            lng={lng}
            storeName={storeName}
            image={image}
            storeId={storeId}
          />
        ))}
      </GoogleMap>
    ) : null
  );
}
