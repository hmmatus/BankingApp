import MainButton from '@/components/elements/buttons/MainButton';
import InputPassword from '@/components/elements/form/input/InputPassword';
import { horizontalScale, verticalScale } from '@/helpers/metrics';
import { ChangePasswordNavProps } from '@/navigators/AuthStack';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import { useState } from 'react';
import { StatusBar, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChangePasswordScreen = ({ navigation }: ChangePasswordNavProps) => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Card mode="elevated" contentStyle={{ padding: 12 }}>
        <Card.Content>
          <Text style={styles.headerText}>Type your new password</Text>
          <InputPassword
            label=""
            placeholder="Password"
            value={password}
            onChangeText={(val) => setPassword(val)}
          />
          <Text style={[styles.headerText, { marginTop: verticalScale(16) }]}>
            Confirm password
          </Text>
          <InputPassword
            label=""
            placeholder="Repeat Password"
            value={repeatPassword}
            onChangeText={(val) => setRepeatPassword(val)}
          />
          <MainButton
            style={{ marginTop: verticalScale(32) }}
            onPress={() => navigation.navigate('SuccessChangePassword')}
          >
            Change Password
          </MainButton>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(16),
    backgroundColor: 'white',
  },
  headerText: {
    color: colors.neutral.third,
    fontSize: getFontSize(12),
  },
});

export default ChangePasswordScreen;
