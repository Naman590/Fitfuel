import React, { useState, useEffect, useRef } from 'react';
import { RECEPTION_HERO_IMG } from '../data/mockData';

interface DoorEntryExperienceProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const DoorEntryExperience: React.FC<DoorEntryExperienceProps> = ({
  isOpen,
  onOpen
}) => {
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  const audioPlayedRef = useRef<boolean>(false);

  const playEntryAudio = () => {
    if (audioPlayedRef.current) return;
    audioPlayedRef.current = true;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const now = ctx.currentTime;

      const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 1.1), ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < noiseBuffer.length; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.35));
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(280, now);
      filter.frequency.exponentialRampToValueAtTime(90, now + 0.9);

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.035, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.0);

      whiteNoise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);
      whiteNoise.start(now);
    } catch {
      // Audio playback blocked or unavailable
    }
  };

  const handleSkip = () => {
    setIsOpening(true);
    playEntryAudio();
    setTimeout(() => {
      onOpen();
      setIsDismissed(true);
    }, 350);
  };

  useEffect(() => {
    setIsOpening(false);
    setIsDismissed(false);
    setProgress(0);
    audioPlayedRef.current = false;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 14;
      });
    }, 45);

    const doorOpenTimer = setTimeout(() => {
      setIsOpening(true);
      playEntryAudio();
    }, 620);

    const completeTimer = setTimeout(() => {
      onOpen();
      setIsDismissed(true);
    }, 1750);

    return () => {
      clearInterval(interval);
      clearTimeout(doorOpenTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (isDismissed || (isOpen && !isOpening)) {
    return null;
  }

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 overflow-hidden perspective-container select-none transition-opacity duration-600 cursor-pointer ${
        isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      title="Click anywhere to enter"
    >
      {/* Reception Lounge Visible Behind Opening Doors */}
      <div className="absolute inset-0 bg-[#0B0B0B]">
        <img
          src={RECEPTION_HERO_IMG}
          alt="FitFuel Reception"
          className={`w-full h-full object-cover brightness-[0.95] transition-transform duration-1200 ease-out ${
            isOpening ? 'scale-103' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      {/* Top Strip */}
      <div className="absolute top-4 sm:top-6 inset-x-0 z-30 flex justify-between items-center gap-2 px-4 sm:px-6 md:px-12 pointer-events-auto">
        <span className="text-[11px] uppercase tracking-[0.18em] text-[#F5F5F5]/80 font-medium whitespace-nowrap">
          Sector 15 · Faridabad
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleSkip();
          }}
          className="text-[11px] uppercase tracking-wider text-[#F5F5F5]/80 hover:text-[#FFD200] px-3 py-1.5 border border-[#2D2D2D] bg-[#0B0B0B]/90 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Skip Intro
        </button>
      </div>

      {/* Left Architectural Steel & Timber Door */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-1/2 bg-[#0E0E0E] border-r border-[#2D2D2D] door-left-panel z-20 ${
          isOpening ? 'door-open-left' : ''
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] to-[#161616]" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-[#FFD200]/70" />
        <div className="absolute right-7 sm:right-10 top-1/2 -translate-y-1/2 w-1.5 h-32 sm:h-40 bg-[#2D2D2D]" />
      </div>

      {/* Right Architectural Steel & Timber Door */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-1/2 bg-[#0E0E0E] border-l border-[#2D2D2D] door-right-panel z-20 ${
          isOpening ? 'door-open-right' : ''
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-[#0B0B0B] to-[#161616]" />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[#FFD200]/70" />
        <div className="absolute left-7 sm:left-10 top-1/2 -translate-y-1/2 w-1.5 h-32 sm:h-40 bg-[#2D2D2D]" />
      </div>

      {/* Quiet Editorial Preloader Lockup */}
      <div
        className={`absolute inset-0 z-30 flex flex-col items-center justify-center p-6 pointer-events-none transition-all duration-500 ${
          isOpening ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="bg-[#0B0B0B] border border-[#2D2D2D] px-8 py-8 sm:px-10 sm:py-9 text-center max-w-xs sm:max-w-sm w-full">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#787878] mb-2">
            Athletic Club · Est. 2019
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-[#F5F5F5] mb-6">
            FITFUEL<span className="text-[#FFD200]">.</span>
          </div>

          <div className="w-full bg-[#1A1A1A] h-[2px] overflow-hidden">
            <div
              className="h-full bg-[#FFD200] transition-all duration-100 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
