"use client";
import { useEffect, useRef } from "react";

const VideoModal = ({ isOpen, onClose, src, poster, youtubeId, startSeconds }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (youtubeId) return;
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen, youtubeId]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(9, 31, 27, 0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <button
        onClick={onClose}
        aria-label="close video"
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "none",
          background: "#fff",
          color: "#091f1b",
          fontSize: 20,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className="fa-solid fa-xmark" />
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: 960 }}
      >
        {youtubeId ? (
          <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0${
                startSeconds ? `&start=${startSeconds}` : ""
              }`}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
                borderRadius: 8,
              }}
            />
          </div>
        ) : (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls
            playsInline
            style={{ width: "100%", maxHeight: "80vh", borderRadius: 8, background: "#000" }}
          />
        )}
      </div>
    </div>
  );
};

export default VideoModal;
