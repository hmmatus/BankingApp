import MainButton from '@/components/elements/buttons/MainButton';
import InputText from '@/components/elements/form/input/InputText';
import { horizontalScale, verticalScale } from '@/helpers/metrics';
import { ForgotPasswordNavProps } from '@/navigators/AuthStack';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';

const themeCardStyle: ThemeProp = {
  roundness: 2,
};
const ForgotPasswordNumberCard = ({
  value,
  onChangeValue,
  onPress,
}: {
  value: string;
  onChangeValue(val: string): void;
  onPress(): void;
}) => {
  return (
    <Card style={styles.cardContainer} mode="elevated">
      <Card.Title title="Type your phone number" titleStyle={{ fontWeight: 'bold' }} />
      <Card.Content>
        <View>
          <InputText
            placeholder="Phone Number"
            value={value}
            onChangeText={(val) => onChangeValue(val)}
            keyboardType="number-pad"
          />
          <Text style={styles.descriptionText}>
            We texted you a code to verify your phone number
          </Text>
        </View>
        <MainButton onPress={onPress}>Send</MainButton>
      </Card.Content>
    </Card>
  );
};

const ForgotPasswordCodeCard = ({
  phoneValue,
  value,
  onChangeValue,
  onPressResend,
  onPress,
}: {
  phoneValue: string;
  value: string;
  onChangeValue(val: string): void;
  onPressResend(): void;
  onPress(): void;
}) => {
  return (
    <Card style={styles.cardContainer} mode="elevated" theme={themeCardStyle}>
      <Card.Title title="Type a code" titleStyle={{ fontWeight: 'bold' }} />
      <Card.Content style={{ borderRadius: 25 }}>
        <View>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
            <InputText
              style={{ flex: 3, marginRight: horizontalScale(8) }}
              label=""
              placeholder="Code"
              value={value}
              onChangeText={(val) => onChangeValue(val)}
              maxLength={6}
              keyboardType="number-pad"
            />
            <MainButton
              style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
              onPress={onPressResend}
            >
              Resend
            </MainButton>
          </View>
          <Text style={styles.descriptionText}>
            We texted you a code to verify your phone number
            <Text style={{ fontWeight: 'bold', color: colors.primary.main }}>{phoneValue}</Text>
          </Text>
          <Text style={styles.descriptionText}>
            This code will expired 10 minutes after this message. If you don't get a message.
          </Text>
        </View>
        <MainButton onPress={onPress}>Change Password</MainButton>
      </Card.Content>
    </Card>
  );
};

const ForgotPasswordScreen = ({ navigation }: ForgotPasswordNavProps) => {
  const [showCodeCard, setShowCodeCard] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      {showCodeCard ? (
        <ForgotPasswordCodeCard
          phoneValue={phoneNumber}
          value={code}
          onChangeValue={(val) => setCode(val)}
          onPress={() => navigation.navigate('ChangePassword')}
          onPressResend={() => {}}
        />
      ) : (
        <ForgotPasswordNumberCard
          value={phoneNumber}
          onChangeValue={(val) => setPhoneNumber(val)}
          onPress={() => setShowCodeCard(true)}
        />
      )}
      {showCodeCard && (
        <Text
          style={[
            styles.descriptionText,
            { color: colors.primary.main, fontWeight: '700', textAlign: 'center' },
          ]}
          onPress={() => setShowCodeCard(false)}
        >
          Change your phone number
        </Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(12),
  },
  cardContainer: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(12),
    borderRadius: 10, // Set your desired border radius here
    shadowColor: colors.neutral.light, // Set your desired shadow color here
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 1,
  },
  headerText: {
    fontSize: getFontSize(12),
    color: colors.neutral.third,
  },
  descriptionText: {
    fontSize: getFontSize(14),
    color: colors.neutral.main,
    marginVertical: verticalScale(16),
  },
});

export default ForgotPasswordScreen;
