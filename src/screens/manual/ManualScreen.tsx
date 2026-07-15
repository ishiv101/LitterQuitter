import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../constants/colors';
import Button from '../../components/Buttons';
import LitterLogForm from '../../components/LitterLogForm';
import CleanupSummary from '../../components/CleanupSummary';

export default function ManualScreen() {
    const [count, setCount] = useState(3);
    const [selectedType, setSelectedType] = useState('Plastic');
    const [note, setNote] = useState('');
    const [totalItems, setTotalItems] = useState(0);
    const [miles, setMiles] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [location, setLocation] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleAdd() {
        const newLine = `${count}x ${selectedType}`;
        setNote(note ? note + '\n' + newLine : newLine);
        setTotalItems(totalItems + count);
        setCount(0);
    }

    if (submitted) {
        return (
            <CleanupSummary
                itemsCount={totalItems}
                distance={miles}
                distanceUnit="miles"
                totalSeconds={hours * 3600 + minutes*60}
                location={location || 'No location provided'}
                onCancel={() => setSubmitted(false)}
                onDone={() => {
                    setSubmitted(false);
                    setCount(0);
                    setSelectedType('Plastic');
                    setNote('');
                    setTotalItems(0);
                    setMiles(0);
                    setHours(0);
                    setMinutes(0);
                    setLocation('');
                }}
                doneLabel="Log Another"
            >
                <Text style={{ fontSize: 14, color: Colors.secondaryText, textAlign: 'center', marginBottom: 20 }}>
                    Notes: {note || 'No notes provided.'}
                </Text>
            </CleanupSummary>
        );
    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 60 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Manual Log</Text>

            <LitterLogForm
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                count={count}
                setCount={setCount}
            />

            <TouchableOpacity
                onPress={handleAdd}
                style={{
                    backgroundColor: Colors.primary,
                    borderRadius: 8,
                    paddingVertical: 10,
                    alignItems: 'center',
                    marginTop: 12,
                }}
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Add</Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 20 }}>Location</Text>
            <TextInput
                placeholder="Current Location"
                value={location}
                onChangeText={setLocation}
                style={{
                    backgroundColor: Colors.card,
                    borderColor: Colors.border,
                    borderWidth: 1,
                    borderRadius: 8,
                    padding: 12,
                    marginTop: 8,
                }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, width: '100%' }}>
                <TextInput
                    value={miles.toString()}
                    onChangeText={(text) => setMiles(parseFloat(text) || 0)}
                    keyboardType="numeric"
                    style={{
                        backgroundColor: Colors.card,
                        borderColor: Colors.border,
                        borderWidth: 1,
                        borderRadius: 8,
                        padding: 12,
                        marginTop: 8,
                    }}
                />

                <Text> Miles </Text>
                <TextInput
                    value={hours.toString()}
                    onChangeText={(text) => setHours(parseFloat(text) || 0)}
                    keyboardType="numeric"
                    style={{
                        backgroundColor: Colors.card,
                        borderColor: Colors.border,
                        borderWidth: 1,
                        borderRadius: 8,
                        padding: 12,
                        marginTop: 8,
                    }}
                />
                <Text> Hours </Text>
                <TextInput
                    value={minutes.toString()}
                    onChangeText={(text) => setMinutes(parseFloat(text) || 0)}
                    keyboardType="numeric"
                    style={{
                        backgroundColor: Colors.card,
                        borderColor: Colors.border,
                        borderWidth: 1,
                        borderRadius: 8,
                        padding: 12,
                        marginTop: 8,
                    }}
                />
                <Text> Minutes </Text>
            </View>


            <Text style={{ fontSize: 14, color: Colors.secondaryText, marginTop: 20, marginBottom: 8 }}>
                NOTES <Text style={{ fontStyle: 'italic' }}>(optional)</Text>
            </Text>
            <TextInput
                value={note}
                onChangeText={setNote}
                placeholder="Bottles near the bench..."
                multiline
                style={{
                    backgroundColor: Colors.card,
                    borderColor: Colors.border,
                    borderWidth: 1,
                    borderRadius: 8,
                    padding: 12,
                    minHeight: 100,
                    textAlignVertical: 'top',
                }}
            />

            <View>
                <Button title="Finish and Save" onPress={() => setSubmitted(true)} />
            </View>
        </View>
    );
}