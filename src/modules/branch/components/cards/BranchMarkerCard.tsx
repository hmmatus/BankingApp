import { verticalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { typography } from '@/styles/typography';
import { useMemo } from 'react';
import { StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import * as geolib from 'geolib';
type Point = {
  latitude: number;
  longitude: number;
};
interface BranchMarkerCardProps {
  title: string;
  currentPosition: Point;
  markerPosition: Point;
  onPress?: () => void;
  style?: TouchableOpacity['props']['style'];
}
const BranchMarkerCard = ({
  title,
  currentPosition,
  markerPosition,
  onPress,
  style,
}: BranchMarkerCardProps) => {
  const distanceValue = useMemo(() => {
    return geolib.getPreciseDistance(currentPosition, markerPosition);
  }, [currentPosition, markerPosition]);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      <View style={{ flexDirection: 'row' }}>
        <Entypo name="location-pin" size={25} color={colors.primary.main} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description}>{`${(distanceValue / 1000).toFixed(0)} km`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral.third,
    height: verticalScale(37),
  },
  title: {
    ...typography.body1,
  },
  description: {
    ...typography.caption1,
  },
});

export default BranchMarkerCard;
