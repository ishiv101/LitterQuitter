import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { Colors } from '../../constants/colors';
import Button from '../../components/Buttons';

const litterTypes = ['Plastic', 'Glass', 'Metal', 'Paper/Cardboard', 'Cigarettes', 'Organic', 'Other'];

export default function ManualScreen() {
    const [count, setCount] = useState(3);
    const [selectedType, setSelectedType] = useState('Plastic');
    const [note, setNote] = useState('');
    const [totalItems, setTotalItems] = useState(0);
    const [miles, setMiles] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    function handleAdd() {
        const newLine = `${count}x ${selectedType}`;
        setNote(note ? note + '\n' + newLine : newLine);
        setTotalItems(totalItems + count);
        setCount(0);
        
    }

    return (

        submitted ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Thank you for your submission!</Text>
                <Text style={{ fontSize: 16, color: Colors.secondaryText, textAlign: 'center', marginBottom: 20 }}>
                    You have logged a total of {totalItems} items.
                    <Text> You traveled {miles || 0} miles and spent {hours || 0} hours and {minutes || 0} minutes collecting litter. </Text>
                    <Text> Pace: {miles > 0 ? ((hours * 60 + minutes) / miles).toFixed(2) : 0} min/mile </Text>
                </Text>
                <Text style={{ fontSize: 16, color: Colors.secondaryText, textAlign: 'center', marginBottom: 20 }}>
                    Notes: {note || 'No notes provided.'}
                </Text>
                <Button title="Log Another" onPress={() => {
                    setSubmitted(false);
                    setCount(0);
                    setSelectedType('Plastic');
                    setNote('');
                    setTotalItems(0);
                    setMiles(0);
                    setHours(0);
                    setMinutes(0);
                }} />
            </View>
        ) : (   
        <View
            style={{
                flex: 1,
                paddingHorizontal: 20,
                paddingTop: 60,
            }}
        >
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Manual Log</Text>

            <Text style={{ fontSize: 14, color: Colors.secondaryText, marginBottom: 8 }}>WHAT LITTER?</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {litterTypes.map((type) => (
                    <TouchableOpacity
                        key={type}
                        onPress={() => setSelectedType(type)}
                        style={{
                            backgroundColor: selectedType === type ? Colors.primary : Colors.card,
                            borderColor: Colors.border,
                            borderWidth: 1,
                            paddingVertical: 8,
                            paddingHorizontal: 16,
                            borderRadius: 20,
                            marginRight: 8,
                            marginBottom: 8,
                        }}
                    >
                        <Text style={{ color: selectedType === type ? 'white' : Colors.text }}>
                            {type}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={{ fontSize: 14, color: Colors.secondaryText, marginTop: 20, marginBottom: 8 }}>HOW MANY ITEMS?</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: Colors.card,
                borderColor: Colors.border,
                borderWidth: 1,
                borderRadius: 8,
                padding: 16,
            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: Colors.card,
                        borderColor: Colors.primary,
                        borderWidth: 1,
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={() => setCount(count > 0 ? count - 1 : count)}
                >
                    <Text style={{ color: Colors.primary, fontSize: 18 }}>−</Text>
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: Colors.text }}>{count}</Text>
                    <Text style={{ fontSize: 12, color: Colors.secondaryText }}>items</Text>
                </View>

                <TouchableOpacity
                    style={{
                        backgroundColor: Colors.primary,
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={{ color: 'white', fontSize: 18 }}>+</Text>
                </TouchableOpacity>
            </View>

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

            <Text style= {{marginTop: 20}}>Location</Text>
            <TextInput
                placeholder="Current Location"
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
                value = {miles.toString()}
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
            <Text style={{ fontSize: 12, color: Colors.secondaryText, marginTop: 20, marginBottom: 8, marginHorizontal: 10 }}>Distance (miles)</Text>
            <TextInput
                placeholder="Time: Hours"
                value = {hours.toString()}
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
            <Text style={{ fontSize: 12, color: Colors.secondaryText, marginTop: 20, marginBottom: 8, marginHorizontal: 10 }}>Time (hrs)</Text>

            <TextInput
                placeholder="Time: Minutes"
                value = {minutes.toString()}
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
            <Text style={{ fontSize: 12, color: Colors.secondaryText, marginTop: 20, marginBottom: 8, marginHorizontal: 10 }}>Time (mins)</Text>
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
    ));
}