import {View, Text} from 'react-native';
import { Colors } from '../constants/colors';


type MapCardProps = {
    itemCount: number;
    distance: number;
    time: number;
    timeUnit: string;
    distanceUnit: string;
}

export default function MapCard(prop: MapCardProps) {
    return(
        <View
        style={{
            backgroundColor: Colors.card,
            padding: 16,
            borderRadius: 8,
            marginBottom: 16,
            alignItems: 'center',
            width: '80%',
        }}>
            <View style={{ height: 250, backgroundColor: Colors.background, borderRadius: 8, marginBottom: 12, width: '100%' }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: Colors.text, fontSize: 20, fontWeight: 'bold' }}>{prop.itemCount}</Text>
                    <Text style={{ color: Colors.text, fontSize: 12 }}>items</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: Colors.text, fontSize: 20, fontWeight: 'bold' }}>{prop.distance}</Text>
                    <Text style={{ color: Colors.text, fontSize: 12 }}>{prop.distanceUnit}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: Colors.text, fontSize: 20, fontWeight: 'bold' }}>{prop.time}</Text>
                    <Text style={{ color: Colors.text, fontSize: 12 }}>{prop.timeUnit}</Text>
                </View>
            </View>
        </View>
    );
}