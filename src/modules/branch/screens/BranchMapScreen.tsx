import MapView, { Marker } from 'react-native-maps';
import UseLocation from '../hooks/useLocation';
import { useNavigation } from '@react-navigation/native';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';
import { useRef, useState } from 'react';
import BottomSheetContainer from '@/components/elements/fragments/BottomSheetContainer';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import { colors } from '@/styles/color';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { markerList } from '../utlis/markersList';
import BranchMarkerCard from '../components/cards/BranchMarkerCard';
import InputText from '@/components/elements/form/input/InputText';
import { verticalScale } from '@/helpers/metrics';

const BranchMapScreen = () => {
  const navigation = useNavigation();
  const bottomRef = useRef<BottomSheet>(null);
  const [searchValue, setSearchValue] = useState('');
  const { locationDetails } = UseLocation({
    onError: (error) => {
      navigation.goBack();
    },
  });
  const [region, setRegion] = useState({
    latitude: 13.676791191101074,
    longitude: -89.21513366699219,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  });

  const handleCloseBottomSheet = () => {
    bottomRef.current?.close();
  };
  const handleOpenBottomSheet = () => {
    bottomRef.current?.expand();
  };
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: locationDetails?.coords.latitude ?? 0,
          longitude: locationDetails?.coords.longitude ?? 0,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        }}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
        onPress={handleOpenBottomSheet}
      >
        {markerList.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latLong}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
      <BottomSheetContainer ref={bottomRef}>
        <View style={styles.bottomSheetContainer}>
          <EvilIcons
            style={styles.closeButton}
            onPress={handleCloseBottomSheet}
            size={30}
            name="close"
          />
          <InputText
            placeholder="Search Branch"
            value={searchValue}
            onChangeText={(value) => setSearchValue(value)}
          />
          <FlatList
            data={markerList}
            renderItem={({ item, index }) => (
              <BranchMarkerCard
                style={{ marginTop: 12 }}
                title={item.title}
                onPress={() => {}}
                address="50m"
              />
            )}
          />
        </View>
      </BottomSheetContainer>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  closeButton: {
    position: 'absolute',
    top: verticalScale(-15),
    right: 0,
  },
  bottomSheetContainer: {
    flex: 1,
    padding: 12,
    marginTop: verticalScale(10),
    backgroundColor: colors.white,
  },
});

export default BranchMapScreen;
