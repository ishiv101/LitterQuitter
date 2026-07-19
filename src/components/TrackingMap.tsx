import { useEffect, useState, useRef } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

function getDistanceInMiles(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 3958.8;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

type TrackingMapProps = {
  onDistanceUpdate?: (distance: number) => void;
};

export default function TrackingMap({ onDistanceUpdate }: TrackingMapProps) {
  const [region, setRegion] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [totalDistance, setTotalDistance] = useState(0);
  const lastLocation = useRef<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    let subscription: Location.LocationSubscription;

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Location permission denied');
        return;
      }

      subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 5,
        },
        (newLocation) => {
          const newLat = newLocation.coords.latitude;
          const newLon = newLocation.coords.longitude;

          if (lastLocation.current) {
            const increment = getDistanceInMiles(
              lastLocation.current.latitude,
              lastLocation.current.longitude,
              newLat,
              newLon
            );
            setTotalDistance((prev) => {
              const updated = prev + increment;
              onDistanceUpdate?.(updated);
              return updated;
            });
          }

          lastLocation.current = { latitude: newLat, longitude: newLon };

          setRegion({
            latitude: newLat,
            longitude: newLon,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        }
      );
    })();

    return () => {
      subscription?.remove();
    };
  }, []);

  if (errorMsg) {
    return (
      <View style={{ height: 250, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!region) {
    return (
      <View style={{ height: 250, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ height: 250, width: '100%', borderRadius: 8, overflow: 'hidden' }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={region}
        showsUserLocation
      />
    </View>
  );
}