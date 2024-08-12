import { useState, useEffect } from 'react';

export const useUserMedia = (constraints: MediaStreamConstraints) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let didCancel = false;

    const getUserMedia = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        if (!didCancel) {
          setStream(mediaStream);
        }
      } catch (e) {
        if (!didCancel) {
          setError('Error accessing media devices: ' + (e as Error).message);
        }
      }
    };

    getUserMedia();

    return () => {
      didCancel = true;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [constraints, stream]);

  return { stream, error };
};
