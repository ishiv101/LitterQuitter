import { View, Text, TouchableOpacity } from 'react-native';
import TrackingMap from '../../components/TrackingMap';
import { useState, useEffect } from 'react';
import MiniStatCard from '../../components/MiniStatCard';
import LitterLogForm from '../../components/LitterLogForm';
import CleanupSummary from '../../components/CleanupSummary';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';

type RecordScreenProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

export default function RecordScreen({ navigation }: RecordScreenProps) {
  const [items, setItems] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [selectedType, setSelectedType] = useState('Plastic');
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (isPaused || isLogging || isFinished) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, isLogging, isFinished]);

  const hour = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) % 60;
  const displaySeconds = seconds % 60;
  const formattedTime = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;

  function handleAddPin() {
    setItems(items + count);
    setCount(1);
    setSelectedType('Plastic');
    setIsLogging(false);
  }

  function handleFinish() {
    setIsFinished(true);
  }

  if (isFinished) {
    return (
      <CleanupSummary
        itemsCount={items}
        distance={0}
        distanceUnit="miles"
        totalSeconds={seconds}
        location="Greenwood Park, north path"
        onCancel={() => setIsFinished(false)}
        onDone={() => {
          setIsFinished(false);
          setSeconds(0);
          setItems(0);
          navigation.navigate('Profile');
        }}
      />
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>Record Screen</Text>

      <View style={{ marginTop: 200, height: 300, width: '100%' }}>
        <TrackingMap />
      </View>

      <Text>{formattedTime}</Text>

      <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
        <MiniStatCard value={items} unit="pieces" />
        <MiniStatCard value={0} unit="miles" />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginTop: 20 }}>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => setIsPaused(!isPaused)}
            style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#9E9E9E', justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="pause" size={28} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 14, marginTop: 6 }}>Pause</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => setIsLogging(true)}
            style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="location" size={28} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 14, marginTop: 6 }}>Drop a Pin</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            onPress={handleFinish}
            style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: 'white', borderWidth: 1, borderColor: Colors.border, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="checkmark" size={28} color="#FF5252" />
          </TouchableOpacity>
          <Text style={{ fontSize: 14, marginTop: 6 }}>Finish</Text>
        </View>

      </View>

      {isPaused && (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 24, borderRadius: 12, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>Paused</Text>
            <TouchableOpacity onPress={() => setIsPaused(false)} style={{ backgroundColor: Colors.primary, paddingVertical: 12, paddingHorizontal: 40, borderRadius: 8, marginBottom: 12 }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Resume</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {isLogging && (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
            <LitterLogForm
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              count={count}
              setCount={setCount}
            />
            <TouchableOpacity onPress={handleAddPin} style={{ backgroundColor: Colors.primary, borderRadius: 8, paddingVertical: 12, alignItems: 'center', marginTop: 16 }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}