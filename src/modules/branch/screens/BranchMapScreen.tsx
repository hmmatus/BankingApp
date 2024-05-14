import MapView, { Marker } from 'react-native-maps';
import UseLocation from '../hooks/useLocation';
import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  KeyboardAvoidingView,
  Linking,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import BottomSheetContainer from '@/components/elements/fragments/BottomSheetContainer';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import { colors } from '@/styles/color';
import { markerList } from '../utlis/markersList';
import BranchMarkerCard from '../components/cards/BranchMarkerCard';
import InputText from '@/components/elements/form/input/InputText';
import { verticalScale } from '@/helpers/metrics';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import * as geolib from 'geolib';

const BranchMapScreen = () => {
  const navigation = useNavigation();
  const bottomRef = useRef<BottomSheet>(null);
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(markerList);
  const { locationDetails, loadingLocation } = UseLocation({
    onError: (error) => {
      navigation.goBack();
    },
  });
  const [region, setRegion] = useState({
    latitude: locationDetails?.coords.latitude ?? 0,
    longitude: locationDetails?.coords.longitude ?? 0,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  });

  useEffect(() => {
    setRegion({
      latitude: locationDetails?.coords.latitude ?? 0,
      longitude: locationDetails?.coords.longitude ?? 0,
      latitudeDelta: 0.04,
      longitudeDelta: 0.05,
    });
  }, [locationDetails]);

  const handleOpenBottomSheet = () => {
    bottomRef.current?.expand();
  };

  const openMapsApp = (lat: number, long: number) => {
    const isIos = Platform.OS === 'ios';
    if (isIos) {
      Linking.openURL(`maps://app?saddr=${lat},${long}`);
    } else {
      Linking.openURL(`google.navigation:q=${lat},${long}`);
    }
  };
  const onPressCalloutMarker = (title: string) => {
    const item = markerList.find((marker) => marker.title === title);
    openMapsApp(item?.latLong.latitude ?? 0, item?.latLong.longitude ?? 0);
  };
  const handlePressItem = (title: string) => {
    const item = markerList.find((marker) => marker.title === title);
    setRegion({
      latitude: item?.latLong.latitude ?? 0,
      longitude: item?.latLong.longitude ?? 0,
      latitudeDelta: 0.04,
      longitudeDelta: 0.05,
    });
    bottomRef.current?.close();
  };
  const handleSearch = (value: string) => {
    const newFilteredList = markerList.filter((item) => item.title.includes(value));
    setFilteredData(newFilteredList);
  };
  if (loadingLocation) {
    return (
      <View>
        <ActivityIndicator size="large" color={colors.primary.main} />
      </View>
    );
  }
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      {region && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: locationDetails?.coords.latitude ?? 0,
            longitude: locationDetails?.coords.longitude ?? 0,
            latitudeDelta: 0.5,
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
              onPress={handleOpenBottomSheet}
              onCalloutPress={() => onPressCalloutMarker(marker.title)}
            />
          ))}
        </MapView>
      )}
      <BottomSheetContainer ref={bottomRef}>
        <KeyboardAvoidingView style={styles.bottomSheetContainer}>
          <InputText
            placeholder="Search Branch"
            value={searchValue}
            onChangeText={(value) => setSearchValue(value)}
            onEndEditing={() => handleSearch(searchValue)}
            right={
              searchValue.length > 0 && (
                <TextInput.Icon
                  icon="close"
                  color={colors.neutral.main}
                  size={24}
                  onPress={() => {
                    handleSearch('');
                    setSearchValue('');
                  }}
                />
              )
            }
          />
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            extraData={searchValue}
            refreshing
            renderItem={({ item, index }) => (
              <BranchMarkerCard
                style={{ marginTop: 12 }}
                title={item.title}
                onPress={() => handlePressItem(item.title)}
                currentPosition={{
                  latitude: locationDetails?.coords.latitude ?? 0,
                  longitude: locationDetails?.coords.longitude ?? 0,
                }}
                markerPosition={item.latLong}
              />
            )}
          />
        </KeyboardAvoidingView>
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
