import {View, Text} from 'react-native';
import { Colors } from '../constants/colors';

type StatCardProps = {
    title: string;
    value: number;
    unit?: string;
}


export default function StatCard(prop: StatCardProps) {
    return(
        <View
        style={{
            backgroundColor: Colors.card,
            padding: 16,
            borderRadius: 8,
            borderColor: Colors.border,
            marginBottom: 16,
            width: '80%',
            alignItems: 'center',
        }}>
            <Text style={{color: Colors.text, fontSize: 18, fontWeight: 'bold'}}>{prop.title}</Text>
            <Text style={{color: Colors.text, fontSize: 24, fontWeight: 'bold'}}>{prop.value}</Text>
            <Text style={{color: Colors.text, fontSize: 16}}>{prop.unit}</Text>

        </View> 
    );



}