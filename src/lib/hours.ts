import { site } from "./config";

export type DayHours = { open: string; close: string };

/** Return current day + minutes in Asia/Jakarta regardless of visitor timezone. */
export function getJakartaNow() {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timezone,
    hour12: false,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
  const parts = fmt.formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const dayMap: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };
  const dayIndex = dayMap[get("weekday")] ?? 0;
  const hour = parseInt(get("hour"), 10) % 24;
  const minute = parseInt(get("minute"), 10);
  return { dayIndex, minutes: hour * 60 + minute };
}

const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

export function getOpenStatus() {
  const { dayIndex, minutes } = getJakartaNow();
  const today = site.hours[dayIndex as keyof typeof site.hours] as DayHours;
  const isOpen =
    today && minutes >= toMin(today.open) && minutes < toMin(today.close);

  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timezone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return {
    isOpen,
    todayLabel: isOpen ? `Open until ${fmt.format(minutesToDate(today.close))}` : "Closed now",
    nextOpen: isOpen ? null : getNextOpen(dayIndex, minutes),
  };
}

function minutesToDate(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d;
}

function getNextOpen(dayIndex: number, minutes: number): string {
  for (let i = 0; i < 8; i++) {
    const d = (dayIndex + i) % 7;
    const h = site.hours[d as keyof typeof site.hours] as DayHours;
    if (!h) continue;
    if (i === 0 && minutes < toMin(h.open)) return `Opens today at ${h.open}`;
    if (i > 0) {
      const names = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      return `Opens ${names[d]} at ${h.open}`;
    }
  }
  return "";
}

export const dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
];

export function formatHour(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hr = h % 12 === 0 ? 12 : h % 12;
  return `${hr}:${String(m).padStart(2, "0")} ${ampm}`;
}
