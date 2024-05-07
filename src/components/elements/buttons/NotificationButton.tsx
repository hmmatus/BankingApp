import { colors } from '@/styles/color';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-paper';
import FA from 'react-native-vector-icons/FontAwesome5';

interface NotificationButtonProps {
  onPress(): void;
  count: number;
}
const NotificationButton = (props: NotificationButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <FA name="bell" size={24} color={colors.white} />
      <Badge style={styles.badge}>{props.count}</Badge>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  badge: {
    position: 'absolute',
    top: -8,
    right: -5,
    color: colors.white,
    backgroundColor: colors.semantic.danger,
  },
});

export default NotificationButton;
