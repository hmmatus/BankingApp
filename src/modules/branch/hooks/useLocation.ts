import Geolocation, {
  GeolocationError,
  GeolocationResponse,
} from '@react-native-community/geolocation';
import { useCallback, useEffect, useState } from 'react';

interface UseLocationProps {
  onError?: (error: GeolocationError) => void;
}
export default function UseLocation({ onError }: UseLocationProps) {
  const [locationDetails, setLocationDetails] = useState<GeolocationResponse>();

  const requestLocationPermission = useCallback(async () => {
    Geolocation.requestAuthorization(
      () => {
        getCurrentPosition();
      },
      (error) => {
        if (onError) {
          onError(error);
        }
      }
    );
  }, [onError]);
  const getCurrentPosition = async () => {
    Geolocation.getCurrentPosition(
      (info) => {
        setLocationDetails(info);
      },
      (error) => {
        if (onError) {
          onError(error);
        }
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };
  useEffect(() => {
    requestLocationPermission();
  }, []);

  return { locationDetails, requestLocationPermission };
}
