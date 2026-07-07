import {View, Text, ScrollView} from 'react-native';
import StatCard from '../../components/StatCard';
import MapCard from '../../components/MapCard';
import ActivityCard from '../../components/ActivityCard';

const recentActivity = [
    { id: 1, name: 'John Doe', date: '2026-07-04', location: 'Central Park', itemsCollected: 20, distance: 5, time: 30, timeUnit: 'minutes', distanceUnit: 'miles' },
    { id: 2, name: 'Jane Smith', date: '2026-07-03', location: 'Brooklyn Bridge', itemsCollected: 15, distance: 3, time: 20, timeUnit: 'minutes', distanceUnit: 'miles' },
    { id: 3, name: 'Mike Johnson', date: '2026-07-02', location: 'Times Square', itemsCollected: 10, distance: 2, time: 15, timeUnit: 'minutes', distanceUnit: 'miles' },
];

export default function HomeScreen() {
    return (
        <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 60,
            alignItems: 'center',
        }}
        >
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, alignSelf: 'flex-start' }}>Home</Text>

        <Text style={{ marginTop: 20, fontSize: 16, marginBottom: 10 }}>Last Cleanup</Text>
        <MapCard itemCount={20} distance={5} time={30} timeUnit="minutes" distanceUnit="miles" />

        <Text style={{ marginTop: 20, fontSize: 16, marginBottom: 10 }}>Recent Activity</Text>
        {recentActivity.map((activity) => (
            <ActivityCard
                key={activity.id}
                name={activity.name}
                date={activity.date}
                location={activity.location}
                itemsCollected={activity.itemsCollected}
                distance={activity.distance}
                time={activity.time}
                timeUnit={activity.timeUnit}
                distanceUnit={activity.distanceUnit}
            />
        ))}


        <Text style={{ marginTop: 20, fontSize: 16, marginBottom: 10 }}>Community Impact</Text>
        <StatCard title="Total Litter Collected" value={1200} unit="pieces" />
        <StatCard title="Total Participants" value={50} unit="people" />

        </ScrollView>
    );
}