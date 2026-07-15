import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/colors';

const litterTypes = ['Plastic', 'Glass', 'Metal', 'Paper/Cardboard', 'Cigarettes', 'Organic', 'Other'];

type LitterLogFormProps = {
    selectedType: string;
    setSelectedType: (type: string) => void;
    count: number;
    setCount: (count: number) => void;
};

export default function LitterLogForm({ selectedType, setSelectedType, count, setCount }: LitterLogFormProps) {
    return (
        <View>
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
        </View>
    );
}