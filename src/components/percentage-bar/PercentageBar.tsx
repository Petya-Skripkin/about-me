"use client";

import { useRandomColor } from "@/hooks/useRandomColor";
import "./styles.css";
import { useEffect, useState } from "react";

interface IPercentageBar {
  name: string,
  progress: number,
}

export default function PercentageBar({ name, progress }: IPercentageBar) {
  const [currentProgress, setProgress] = useState(0);
  const [currentColor, setCurrentColor] = useState("");
  const color = useRandomColor();

  useEffect(() => {
    if (!currentColor) {
      setCurrentColor(color);
    }
  }, [color, currentColor]);

  useEffect(() => {
    if (progress > currentProgress) {
      const timer = setTimeout(() => {
        setProgress((prev) => prev + 1);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [progress, currentProgress]);

  return (
    <div style={{ borderColor: currentColor }} className="percentage">
      <p>{name}</p>
      <p>{currentProgress}%</p>
      <div
        style={{ backgroundColor: currentColor + 31, width: `${currentProgress}%` }}
        className="percentage-filling"
      ></div>
    </div>
  );
}
