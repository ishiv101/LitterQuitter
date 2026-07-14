import { View, Text } from 'react-native';
import TrackingMap from '../../components/TrackingMap';

export default function RecordScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Record Screen</Text>
      <TrackingMap />
    </View>
  );
}