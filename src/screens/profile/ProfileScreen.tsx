import {View, Text} from 'react-native';
import StatCard from '../../components/StatCard';

export default function ProfileScreen() {
    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <Text>Profile Screen</Text>
        <Text style={{ marginTop: 20 }}>Your Progress</Text> 
        <StatCard title="Day Streak" value={5} unit="days" />
    
    </View>
        

    );
}