import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Text } from 'react-native';


import HomeScreen from "../screens/home/HomeScreen";
import ManualScreen from "../screens/manual/ManualScreen";
import RecordScreen from "../screens/record/RecordScreen";
import RewardsScreen from "../screens/rewards/RewardsScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import { Colors } from '../constants/colors';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Manual" component={ManualScreen} />
            <Tab.Screen name="Record" component={RecordScreen}
                options={{tabBarButton: (props) => (
                <TouchableOpacity {...(props as any)} style={{top: -20, justifyContent: 'center',alignItems: 'center',}}>
                            <View style={{width: 70, height: 70, borderRadius: 35, backgroundColor: Colors.primary,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 4,
                                    elevation: 5,
                                }}
                            >
                                <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>+</Text>
                                <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>Record</Text>
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen name="Rewards" component={RewardsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}