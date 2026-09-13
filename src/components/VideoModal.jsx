"use client";
import { useEffect, useRef } from "react";

const VideoModal = ({ isOpen, onClose, src, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

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
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          playsInline
          style={{ width: "100%", maxHeight: "80vh", borderRadius: 8, background: "#000" }}
        />
      </div>
    </div>
  );
};

export default VideoModal;
