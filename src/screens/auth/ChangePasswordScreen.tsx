import MainButton from '@/components/elements/buttons/MainButton';
import InputPassword from '@/components/elements/form/input/InputPassword';
import { horizontalScale, verticalScale } from '@/helpers/metrics';
import { ChangePasswordNavProps } from '@/navigators/AuthStack';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { StatusBar, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { changePasswordValidation } from './validations/changePasswordValidation';
import ControllerInputPassword from '@/components/elements/form/input/ControllerInputPassword';
interface ChangePasswordFormFields {
  password: string;
  repeatPassword: string;
}
const ChangePasswordScreen = ({ navigation }: ChangePasswordNavProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, disabled },
  } = useForm({
    resolver: yupResolver(changePasswordValidation),
  });
  const onSubmit = (data: ChangePasswordFormFields) => {
    console.log(data);
    navigation.navigate('SuccessChangePassword');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Card mode="elevated" contentStyle={{ padding: 12 }}>
        <Card.Content>
          <ControllerInputPassword
            control={control}
            name="password"
            error={errors.password?.message}
            label="Type your new Password"
          />
          <ControllerInputPassword
            control={control}
            name="repeatPassword"
            error={errors.repeatPassword?.message}
            label="Repeat Password"
            containerStyle={{ marginVertical: verticalScale(16) }}
          />
          <MainButton disabled={disabled} onPress={handleSubmit(onSubmit)}>
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
