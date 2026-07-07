import { TouchableOpacity, Text } from 'react-native';
import { Colors } from '../constants/colors';

type ButtonProps = {
    title: string;
    onPress: () => void;
}

export default function Button(prop: ButtonProps) {
    return (
        <TouchableOpacity style={{
            backgroundColor: Colors.primary,
            padding: 12,
            borderRadius: 8,
            alignItems: 'center',
            marginTop: 20,
        }} onPress={prop.onPress}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{prop.title}</Text>
        </TouchableOpacity>
    );
}