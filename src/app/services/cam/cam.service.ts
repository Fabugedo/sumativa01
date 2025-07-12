// services/cam/cam.service.ts
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export async function tomarFoto(): Promise<string | null> {
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    return image.dataUrl ?? null;
  } catch (error) {
    console.error('Error al tomar foto:', error);
    return null;
  }
}
