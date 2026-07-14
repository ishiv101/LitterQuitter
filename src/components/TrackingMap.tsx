import { View } from 'react-native';
import MapView from 'react-native-maps';

export default function TrackingMap() {
  return (
    <View style={{ height: 250, width: '100%', borderRadius: 8, overflow: 'hidden' }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 35.9132,
          longitude: -79.0558,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
    </View>
  );
}