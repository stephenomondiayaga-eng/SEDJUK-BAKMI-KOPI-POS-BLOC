"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { site } from "@/lib/config";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-charcoal text-cream">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552611052-33e04de081de?w=2000&q=85&auto=format&fit=crop"
          alt="Steaming bowl of Indonesian bak
