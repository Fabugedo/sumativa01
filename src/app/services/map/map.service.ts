
import { Geolocation } from '@capacitor/geolocation';

export async function obtenerUbicacion(): Promise<{ lat: number; lng: number }> {
  const pos = await Geolocation.getCurrentPosition({ timeout: 30000 });
  return {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude
  };
}
