"use client";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);
  return (
    <>
      <div className="flex h-[70vh] flex-col items-center justify-start gap-10 bg-background py-40">
        <p className="text-4xl font-bold">Not Found</p>
        <p className="text-2xl">This page does not exist</p>
      </div>
    </>
  );
}
