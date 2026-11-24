import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44 text-cream">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=2000&q=80&auto=format&fit=crop"
          alt="Bakmi noodles being lifted with chopsticks"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
      </
