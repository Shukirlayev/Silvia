import { useEffect, useRef, useState } from "react";

export function CrossfadeVideo({ src }: { src: string }) {
  const [activeVideo, setActiveVideo] = useState<0 | 1>(0);
  const video0Ref = useRef<HTMLVideoElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v0 = video0Ref.current;
    const v1 = video1Ref.current;
    if (!v0 || !v1) return;

    let isTransitioning = false;
    const FADE_DURATION = 0.5;

    const handleTimeUpdate = (e: Event) => {
      const activeElement = e.target as HTMLVideoElement;
      const inactiveElement = activeElement === v0 ? v1 : v0;
      
      const duration = activeElement.duration;
      const currentTime = activeElement.currentTime;
      
      if (!duration) return;

      if (!isTransitioning && duration - currentTime < FADE_DURATION) {
        isTransitioning = true;
        inactiveElement.currentTime = 0;
        inactiveElement.play().catch(() => {});
        setActiveVideo(activeElement === v0 ? 1 : 0);
      }
      
      if (isTransitioning && duration - currentTime < 0.1) {
        isTransitioning = false;
      }
    };

    v0.addEventListener('timeupdate', handleTimeUpdate);
    v1.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      v0.removeEventListener('timeupdate', handleTimeUpdate);
      v1.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 bg-[#050505]">
      <video
        ref={video0Ref}
        src={src}
        autoPlay
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 custom-video ${
          activeVideo === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      />
      <video
        ref={video1Ref}
        src={src}
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 custom-video ${
          activeVideo === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      />
      <style>{`
        .custom-video {
          /* Workaround for some mobile Safari blink issues */
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
      `}</style>
    </div>
  );
}
