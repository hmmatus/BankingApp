import SimpleOverlappedLayout from '@/components/layouts/SimpleOverlappedLayout';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { authStyles } from './styles/authStyles';
import { horizontalScale, verticalScale } from '@/helpers/metrics';
import SignUpLogo from '@/assets/images/signup-logo.svg';
import InputText from '@/components/elements/form/input/InputText';
import InputPassword from '@/components/elements/form/input/InputPassword';
import { useState } from 'react';
import TermsCheckbox from '@/components/elements/form/checkbox/TermsCheckbox';
import MainButton from '@/components/elements/buttons/MainButton';
import { getFontSize } from '@/utils/getFontSize';
import { colors } from '@/styles/color';
import { SignUpNavProps } from '@/navigators/AuthStack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FormSubmitHandler, useForm } from 'react-hook-form';
import ControllerInputText from '@/components/elements/form/input/ControllerInputText';
import ControllerInputPassword from '@/components/elements/form/input/ControllerInputPassword';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from './validations/signupValidation';

interface SignUpFormFields {
  username: string;
  phone: string;
  password: string;
}
const SignUpScreen = ({ navigation }: SignUpNavProps) => {
  const [checked, setChecked] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, disabled },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit = (data: SignUpFormFields) => {
    console.log(data);
    navigation.navigate('Login');
  };
  return (
    <SimpleOverlappedLayout>
      <KeyboardAwareScrollView contentContainerStyle={styles.container} extraHeight={100}>
        <Text style={authStyles.title}>Welcome to us,</Text>
        <Text style={authStyles.subtitle}>Hello there, create New account</Text>
        <View style={[authStyles.imageContainer, { marginTop: verticalScale(48) }]}>
          <SignUpLogo width={horizontalScale(213)} height={verticalScale(175)} />
        </View>
        <View>
          <ControllerInputText
            control={control}
            label="Username"
            name="username"
            error={errors.username?.message}
            inputProps={{ placeholder: 'Username' }}
          />
          <ControllerInputText
            control={control}
            name="phone"
            error={errors.phone?.message}
            label="Phone"
            inputProps={{
              keyboardType: 'phone-pad',
              placeholder: 'Phone Number',
            }}
            containerStyle={{ marginVertical: verticalScale(16) }}
          />
          <ControllerInputPassword
            label="Password"
            control={control}
            name="password"
            error={errors.password?.message}
          />
          <TermsCheckbox
            label=""
            containerStyle={{ marginVertical: verticalScale(16) }}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
          <MainButton
            disabled={disabled && !checked}
            onPress={handleSubmit(onSubmit)}
            style={{ marginTop: verticalScale(4) }}
            contentStyle={{ paddingVertical: verticalScale(5) }}
          >
            Sign up
          </MainButton>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: verticalScale(8),
            }}
          >
            <Text style={{ fontSize: getFontSize(12), color: colors.neutral.main }}>
              Have an account?{' '}
            </Text>
            <Text
              style={{ color: colors.primary.main, fontWeight: '700' }}
              onPress={() => navigation.navigate('Login')}
            >
              Sign In
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SimpleOverlappedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(16),
    paddingBottom: verticalScale(16),
  },
});

export default SignUpScreen;
