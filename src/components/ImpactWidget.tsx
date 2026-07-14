import { View, Text } from 'react-native';
import { Colors } from '../constants/colors';

type ImpactWidgetProps = {
  title: string;
  progressToTon: number; // 0 to 1+
  co2SavedTons: number;
  milesEquivalent: number;
};

export default function ImpactWidget({ title, progressToTon, co2SavedTons, milesEquivalent }: ImpactWidgetProps) {
  const percent = Math.min(progressToTon, 1) * 100;

  return (
    <View style={{ backgroundColor: Colors.card, padding: 16, borderRadius: 8, marginBottom: 16, width: '100%' }}>
      <Text style={{ color: Colors.text, fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>{title}</Text>

      <View style={{ height: 12, backgroundColor: Colors.background, borderRadius: 6, overflow: 'hidden' }}>
        <View style={{ height: '100%', width: `${percent}%`, backgroundColor: Colors.text }} />
      </View>

      <Text style={{ color: Colors.text, fontSize: 12, marginTop: 6 }}>
        {percent.toFixed(1)}% toward 1 ton collected
      </Text>
      <Text style={{ color: Colors.text, fontSize: 12, marginTop: 4 }}>
        {co2SavedTons.toFixed(4)} metric tons CO₂e saved · ~{milesEquivalent.toFixed(1)} miles not driven
      </Text>
    </View>
  );
}