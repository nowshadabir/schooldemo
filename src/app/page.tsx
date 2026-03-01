"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  GraduationCap,
  Play,
  Users,
  BookOpen,
  Award,
  Bell,
  CheckCircle2,
  Clock,
  ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";

const MotionNumber = ({ value, label }: { value: string, label: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center lg:items-start space-y-1"
    >
      <span className="text-4xl lg:text-5xl font-black text-zinc-950 tracking-tighter">{value}</span>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{label}</span>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans selection:bg-primary selection:text-white bg-white">
      <Navbar />

      {/* Premium Notice Ticker */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-zinc-50 border-b border-zinc-100 py-2.5 overflow-hidden flex items-center"
      >
        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 flex items-center">
          {/* Label Badge */}
          <div className="flex items-center gap-3 bg-white border border-zinc-200 px-4 py-1.5 rounded-full z-10 shadow-sm shrink-0 mr-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-950 flex items-center gap-2">
              <Bell className="w-3 h-3 text-primary" />
              Notices
            </span>
          </div>

          {/* Marquee Content */}
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee-fast md:animate-marquee whitespace-nowrap flex items-center py-1">
              {[
                "Admission for 2026 Academic Session is officially OPEN! Apply by March 30th.",
                "The Annual Cultural Fest 'Rhythm 2026' starts from April 15th.",
                "Result of Terminal Examination 2025 has been published. Check your portal.",
                "New STEM Research Lab to be inaugurated by the Ministry of Education next week."
              ].map((text, i) => (
                <div key={i} className="inline-flex items-center mx-8 group cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mr-4 group-hover:bg-primary transition-colors"></span>
                  <span className="text-sm font-bold text-zinc-600 group-hover:text-zinc-950 transition-colors tracking-tight">
                    {text}
                  </span>
                  <ArrowUpRight className="w-3 h-3 ml-2 text-zinc-400 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <main className="flex-1">
        {/* Academic Hero Section */}
        <section className="relative pt-12 md:pt-16 lg:pt-8 pb-20 md:pb-24 lg:pb-32 overflow-hidden bg-white border-b border-zinc-100">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content - Institutional Authority */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">2026 Admissions Now Open</span>
                </motion.div>

                <div className="space-y-6">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-zinc-950 tracking-tight leading-[1.1] md:leading-[1.05]"
                  >
                    Pioneering Excellence <br className="hidden sm:block" />
                    <span className="text-primary italic">In Global Education</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg text-zinc-600 font-medium max-w-xl leading-relaxed"
                  >
                    With a legacy of three decades, SchoolDemo Institute provides a rigorous academic environment paired with world-class facilities to nurture the leaders of tomorrow.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button className="h-14 px-8 rounded-xl text-md font-bold shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all">
                    Apply for Admission
                  </Button>
                  <Button variant="outline" className="h-14 px-8 rounded-xl text-md font-bold border-zinc-200 hover:bg-zinc-50 transition-all">
                    Download Prospectus
                  </Button>
                </motion.div>

                {/* Formal Trust Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="pt-8 border-t border-zinc-100 flex flex-wrap items-center gap-8 md:gap-12"
                >
                  <div className="space-y-1">
                    <div className="text-2xl font-black text-zinc-950">99.2%</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Academic Success</div>
                  </div>
                  <div className="w-px h-10 bg-zinc-100"></div>
                  <div className="space-y-1">
                    <div className="text-2xl font-black text-zinc-950">A+</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Board Accretion</div>
                  </div>
                  <div className="w-px h-10 bg-zinc-100"></div>
                  <div className="space-y-1">
                    <div className="text-2xl font-black text-zinc-950">12k+</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Global Alumni</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Content - Modern Information Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {/* Hero Image Focus */}
                  <div className="col-span-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-zinc-100">
                    <img
                      src="https://images.unsplash.com/photo-1586760517845-88f3ea745618?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="University Campus"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent"></div>
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
                      <div className="flex items-center gap-3">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">Top Ranked 2025</span>
                      </div>
                    </div>
                  </div>

                  {/* Academic Portal Card */}
                  <div className="bg-zinc-950 p-6 rounded-3xl border border-white/5 flex flex-col justify-between group cursor-pointer hover:bg-zinc-900 transition-colors">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-primary mb-12">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white uppercase tracking-tight">Student Portal</h4>
                      <p className="text-[10px] text-zinc-500 mt-1 font-medium italic">Secure access to LMS & Results</p>
                    </div>
                  </div>

                  {/* Notice Alert Card */}
                  <div className="bg-primary p-6 rounded-3xl flex flex-col justify-between group cursor-pointer hover:brightness-105 transition-all">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white mb-12">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white uppercase tracking-tight">Active Notices</h4>
                      <p className="text-[10px] text-white/70 mt-1 font-medium italic">Scholarship updates inside</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Principal's Institutional Address - Redesigned for Professionalism */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="py-20 md:py-32 bg-white relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50/50 -skew-x-12 translate-x-32 pointer-events-none hidden lg:block"></div>

          <div className="container mx-auto px-6 relative">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column - Image & Branding (5 cols) */}
              <div className="lg:col-span-12 xl:col-span-5 relative">
                <div className="relative group">
                  {/* Outer Frame */}
                  <div className="absolute -inset-4 border border-zinc-100 rounded-[2.5rem] pointer-events-none"></div>

                  {/* Image Container */}
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1700631102134-9aef0b7fe818?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Principal image"
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Floating Info Plate - Refined */}
                  {/* <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-zinc-50 max-w-[280px] z-20">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Leadership</span>
                      <h3 className="text-xl font-black text-zinc-900 tracking-tight">Dr. Ahmad Al-Mansur</h3>
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-relaxed mt-1">
                        Harvard University · PhD Edu.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Right Column - Content (7 cols) */}
              <div className="lg:col-span-12 xl:col-span-7 space-y-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Principal's Message</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 leading-[1.1] tracking-tight">
                      Fostering a Culture of <br />
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 italic">Inquiry & Integrity</span>
                    </h2>
                  </div>

                  <div className="space-y-8 text-lg text-zinc-600 font-medium leading-[1.8] max-w-2xl">
                    <p className="first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                      At SchoolDemo Institute, we believe education is more than just a curriculum; it is a catalyst for personal transformation. Our methodology focuses on developing critical thinking and ethical character alongside academic rigor.
                    </p>
                    <p>
                      Our alumni serve in distinguished positions globally, a testament to the resilient foundation established here. We invite you to explore a community dedicated to the pursuit of truth and discovery.
                    </p>
                  </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-10">
                  <Button className="h-14 px-10 rounded-xl font-bold bg-zinc-950 hover:bg-primary transition-all shadow-xl shadow-zinc-950/10">
                    Read Institutional Address
                  </Button>

                  {/* Signature Placeholder Style */}
                  <div className="flex flex-col">
                    <span className="font-serif text-2xl text-zinc-400 italic">Al-Mansur</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Head of Institution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>


        {/* Why Choose Us Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="py-24 bg-zinc-50/50 border-y border-zinc-100"
        >
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-20">
              <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">Why SchoolDemo</h4>
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tighter leading-tight">
                Designed for Absolute <span className="italic underline decoration-primary/30">Excellence</span>
              </h2>
              <p className="text-zinc-500 font-medium text-lg">
                We provide a robust infrastructure paired with traditional values to ensure every student reaches their full potential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Modern Science Labs",
                  desc: "Specialized chemistry, physics, and biology labs equipped with latest research tools.",
                  icon: GraduationCap
                },
                {
                  title: "Expert Faculty",
                  desc: "Highly qualified educators with years of experience in national and international curricula.",
                  icon: Users
                },
                {
                  title: "Digital Library",
                  desc: "Access to over 50,000 physical books and a massive digital database of journals.",
                  icon: BookOpen
                },
                {
                  title: "Safe Transport",
                  desc: "Dedicated fleet of GPS-tracked buses covering the entire metropolitan area.",
                  icon: Clock
                },
                {
                  title: "Sports & Fitness",
                  desc: "International standard playgrounds, gymnasium, and specialized coaching for all major sports.",
                  icon: Award
                },
                {
                  title: "Extra-Curricular",
                  desc: "Over 15 active clubs for debating, robotics, music, and social service.",
                  icon: CheckCircle2
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group bg-white p-10 rounded-[2rem] border border-zinc-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-950 mb-8 border border-zinc-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-zinc-900 tracking-tight mb-4">{item.title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed group-hover:text-zinc-600 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white pt-16 md:pt-24 pb-12 px-6">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap">SCHOOL<span className="text-primary italic">DEMO</span></span>
            </div>
            <p className="text-sm text-zinc-400 font-medium leading-relaxed italic">
              "Providing excellence in education since 1994. Building the leaders of tomorrow."
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                  <Users className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold tracking-tight">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-zinc-400">
              <li><Link href="#" className="hover:text-primary transition-colors">Admission Process</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Academic Calendar</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Student Portal</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Campus Facilities</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold tracking-tight">Visit Us</h4>
            <div className="space-y-4 text-sm font-medium text-zinc-400 leading-relaxed">
              <p>House 123, Road 45, Sector 12<br />Uttara, Dhaka - 1230, Bangladesh</p>
              <p>Phone: +880 1234 567 890<br />Email: info@schooldemo.edu</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold tracking-tight">Find Us on Map</h4>
            <div className="w-full aspect-[4/3] bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" alt="Map Link" className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-60 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="outline" size="sm" className="bg-transparent text-white border-white/20 hover:bg-primary hover:border-primary">Open Google Maps</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium text-zinc-500">
          <p>© 2026 SchoolDemo Institute. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
