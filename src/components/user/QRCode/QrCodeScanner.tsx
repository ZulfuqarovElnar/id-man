import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BrowserMultiFormatReader, Result } from '@zxing/library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import LightIcon from '../../svg/LightIcon';
import { Link, useNavigate } from 'react-router-dom';

const corners = [
  { className: 'corner-top-left' },
  { className: 'corner-top-right' },
  { className: 'corner-bottom-left' },
  { className: 'corner-bottom-right' }
];

const debounce = <T extends (...args: any[]) => void>(func: T, wait: number): T => {
  let timeout: NodeJS.Timeout;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as T;
};

const QRCodeScanner: React.FC = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const codeReader = useRef<BrowserMultiFormatReader | null>(null);
  const navigate = useNavigate(); 

  const handleLightToggle = () => {
    setIsLightOn(prev => !prev);
  };

  const handleScan = useCallback((result: Result) => {
    if (result) {
      const url = result.getText();
      console.log('QR code scanned:', url);
      navigate(url); 
    }
  }, [navigate]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleError = useCallback(
    debounce((error: any) => {
      if (error) {
        console.error('QR code scan error:', error);
      }
    }, 2000),
    []
  );

  useEffect(() => {
    const startScanning = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        const rearCamera = videoDevices.find(device => device.label.toLowerCase().includes('back')) || videoDevices[0];

        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { deviceId: rearCamera?.deviceId ? { exact: rearCamera.deviceId } : undefined } 
        });

        stream.getTracks().forEach(track => track.stop()); 

        if (rearCamera) {
          codeReader.current = new BrowserMultiFormatReader();
          const reader = codeReader.current;

          if (videoRef.current && reader) {
            reader.decodeFromVideoDevice(rearCamera.deviceId, videoRef.current, (result, error) => {
              if (result) {
                handleScan(result);
              }
              if (error) {
                handleError(error);
              }
            });
          }
        } else {
          console.error('No rear camera found');
        }
      } catch (e) {
        console.error('Error accessing camera:', e);
      }
    };

    startScanning();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const currentVideoRef = videoRef.current;
      if (currentVideoRef && currentVideoRef.srcObject) {
        const stream = currentVideoRef.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }

      if (codeReader.current) {
        codeReader.current.reset();
      }
    };
  }, [handleScan, handleError]);

  return (
    <div className="flex flex-col items-center py-12 px-6 bg-slate-600 h-screen">
      <div className="max-w-[430px] w-full px-3 flex flex-col justify-between h-screen">
        <div className="flex justify-start">
          <Link to="/">
            <button
              className="flex justify-center items-center w-12 h-12 border border-white rounded-full focus:outline-none hover:bg-gray-700"
              title="Close"
              type="button"
            >
              <FontAwesomeIcon className="text-2xl w-6 text-white" icon={faXmark} />
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 relative">
          <div className="relative mb-5 w-60 h-60">
            <video ref={videoRef} className={`w-60 h-60 object-cover ${isLightOn ? 'brightness-125' : 'brightness-100'}`} />
            {corners.map((corner, index) => (
              <div
                key={index}
                className={`absolute w-20 h-20 ${corner.className}`}
              ></div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button
              className={`flex justify-center items-center w-11 h-11 rounded-full ${isLightOn ? 'bg-yellow-300 hover:bg-yellow-400' : 'bg-white'} focus:outline-none hover:bg-gray-200`}
              aria-label="Toggle light"
              type="button"
              onClick={handleLightToggle}
            >
              <LightIcon />
            </button>
          </div>
        </div>
        <Link to="/password">
          <button
            className="flex items-center gap-4 mx-auto bg-gray-800 rounded-xl text-white px-5 py-3.5 mb-10 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            type="button"
          >
            <FontAwesomeIcon icon={faPen} />
            Şifrə ilə daxil ol
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QRCodeScanner;
