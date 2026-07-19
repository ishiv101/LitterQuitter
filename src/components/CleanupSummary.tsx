import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import MiniStatCard from './MiniStatCard';
import Button from './Buttons';

type CleanupSummaryProps = {
    itemsCount: number;
    distance: number;
    distanceUnit: string;
    totalSeconds: number;
    location: string;
    onCancel: () => void;
    onDone: () => void;
    onDiscard?: () => void;
    cancelLabel?: string;
    doneLabel?: string;
    discardLabel?: string;
    children?: React.ReactNode;
};

export default function CleanupSummary({
    itemsCount,
    distance,
    distanceUnit,
    totalSeconds,
    location,
    onCancel,
    onDone,
    onDiscard,
    cancelLabel = 'Cancel',
    doneLabel = 'Done',
    discardLabel = 'Discard',
    children,
}: CleanupSummaryProps) {

    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = Math.floor(totalSeconds % 60);
    const durationDisplay = hours > 0 ? `${hours}h ${mins}m ${secs}s` : `${mins}m ${secs}s`;

    const pace = distance > 0 ? ((totalSeconds / 60) / distance).toFixed(2) : '0';

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
            <View style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Ionicons name="checkmark" size={48} color="white" />
            </View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>Cleanup Complete!</Text>
            <Text style={{ fontSize: 14, color: Colors.secondaryText, marginBottom: 8 }}>Great work. Every piece counts.</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <Ionicons name="location-outline" size={16} color={Colors.secondaryText} />
                <Text style={{ fontSize: 14, color: Colors.secondaryText, marginLeft: 4 }}>{location}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 12 }}>
                <MiniStatCard value={itemsCount} unit="items" />
                <MiniStatCard value={distance.toFixed(2)} unit={distanceUnit} />
                <MiniStatCard value={durationDisplay} unit="duration" />
            </View>

            <Text style={{ fontSize: 14, color: Colors.secondaryText, marginBottom: 20 }}>
                Pace: {pace} min/{distanceUnit}
            </Text>

            {children}

            <View style={{ width: '100%' }}>
                <Button title={cancelLabel} onPress={onCancel} />
                {onDiscard && (
                    <View style={{ marginTop: 12 }}>
                        <Button title={discardLabel} onPress={onDiscard} />
                    </View>
                )}
                <View style={{ marginTop: 12 }}>
                    <Button title={doneLabel} onPress={onDone} />
                </View>
            </View>
        </View>
    );
}