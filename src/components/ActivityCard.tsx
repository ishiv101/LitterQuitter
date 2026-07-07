import { View, Text } from 'react-native';
import { Colors } from '../constants/colors';

type ActivityCardProps = {
    name: string;
    date: string;
    location: string;
    itemsCollected: number;
    distance: number;
    distanceUnit: string;
    time: number;
    timeUnit: string;
}

export default function ActivityCard(prop: ActivityCardProps) {
    const initials = prop.name.split(' ').map((word) => word[0]).join('');

    return (
        <View style={{
            backgroundColor: Colors.card,
            padding: 16,
            borderRadius: 8,
            marginBottom: 16,
            width: '92%',
            borderColor: Colors.border,
            borderWidth: 1,
        }}>
            {/* Row 1: left group (circle + name/location) vs right badge */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>

                {/* Left group */}
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                    <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>{initials}</Text>
                    </View>
                    <Text style={{ marginLeft: 10, overflow: 'hidden' }} numberOfLines={1}>{prop.name} · {prop.location}</Text>
                </View>

                {/* Right badge */}
                <Text style={{ color: Colors.primary, fontWeight: 'bold', marginLeft: 10 }}>{prop.itemsCollected} items</Text>
            </View>

            {/* Row 2: stats line */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: Colors.secondaryText, fontSize: 12 }}>{prop.date}</Text>
                <Text style={{ color: Colors.secondaryText, fontSize: 12 }}>{prop.distance} {prop.distanceUnit} · {prop.time} {prop.timeUnit}</Text>
            </View>
        </View>
    );
}