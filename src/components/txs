"use client";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { site } from "@/lib/config";
import { dayNames, formatHour, getJakartaNow } from "@/lib/hours";

export default function OpenStatus({ large = false }: { large?: boolean }) {
  const [status, setStatus] = useState<{ open: boolean; today: number } | null>(null);

  useEffect(() => {
    const update = () => {
      const { dayIndex, minutes } = getJakartaNow();
      const h = site.hours[dayIndex as keyof typeof site.hours];
      const [oh, om] = h.open.split(":").map(Number);
      const [ch, cm] = h.close.split(":").map(Number);
      const open = minutes >= oh * 60 + om && minutes < ch * 60 + cm;
      setStatus({ open, today: dayIndex });
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) {
    return (
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest opacity-60">
        <Clock size={13} /> Checking hours…
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 ${
        large ? "text-sm font-bold uppercase tracking-widest" : "text-xs uppercase tracking-widest"
      }`}
    >
      <span
        className={`relative flex h-2.5 w-2.5 rounded-full ${
          status.open ? "bg-green-500" : "bg-red-400"
        }`}
      >
        <span
          className={`absolute inset-0 rounded-full animate-ping ${
            status.open ? "bg-green-500" : "bg-red-400"
          } opacity-60`}
        />
      </span>
      {status.open ? "Open Now" : "Closed Now"}
    </span>
  );
}

export function OpeningHoursTable() {
  return (
    <div className="space-y-2">
      {dayNames.map((d, i) => {
        const h = site.hours[i as keyof typeof site.hours];
        return (
          <div
            key={d}
            className="flex justify-between items-center border-b border-charcoal/10 py-2.5 text-sm"
          >
            <span className="uppercase tracking-widest text-charcoal/60 text-xs">{d}</span>
            <span className="font-medium text-charcoal">
              {formatHour(h.open)} – {formatHour(h.close)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
