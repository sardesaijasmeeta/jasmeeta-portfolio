import { ReactNode } from "react";

export default function GlassCard({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-fit  z-10 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl">
      {children}
    </div>
  );
}