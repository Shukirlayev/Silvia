import { useRef, useEffect, useState } from 'react';

export function CrossfadeVideo({ src }: { src: string }) {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeLayer, setActiveLayer] = useState<1 | 2>(1);

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2) return;

    // Slow down video playback
    v1.playbackRate = 0.5;
    v2.playbackRate = 0.5;

    let animationFrame: number;
    // Fade offset in video seconds. 0.8s video time = 1.6s real time at 0.5x speed.
    const fadeOffset = 0.8; 

    const currentVideo = activeLayer === 1 ? v1 : v2;
    const nextVideo = activeLayer === 1 ? v2 : v1;

    currentVideo.play().catch(() => {});

    // Clean up the hidden video after fade
    const timeout = setTimeout(() => {
      // Pause the video that is no longer active
      if (!nextVideo.paused) {
        nextVideo.pause();
      }
    }, 1600); // 1.6s real time for the transition

    const checkTime = () => {
      if (currentVideo.duration && currentVideo.currentTime >= currentVideo.duration - fadeOffset) {
        nextVideo.currentTime = 0;
        nextVideo.play().catch(() => {});
        setActiveLayer(activeLayer === 1 ? 2 : 1);
        return;
      }
      animationFrame = requestAnimationFrame(checkTime);
    };

    animationFrame = requestAnimationFrame(checkTime);
    
    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeout);
    };
  }, [activeLayer]);

  return (
    <div className="absolute inset-0 w-full h-full z-0 bg-[#050505]">
      <video
        ref={video1Ref}
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${activeLayer === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      >
        <source src={src} type="video/mp4" />
      </video>
      <video
        ref={video2Ref}
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${activeLayer === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
