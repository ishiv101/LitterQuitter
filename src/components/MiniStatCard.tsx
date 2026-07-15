import { View, Text } from 'react-native';

type MiniStatCardProps = {
    value: number | string;
    unit?: string;
};

export default function MiniStatCard({ value, unit }: MiniStatCardProps) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        {value}
      </Text>
      <Text style={{ fontSize: 14, fontWeight: 'normal' }}>{unit}</Text>
    </View>
  );
}