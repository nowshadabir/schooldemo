import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  GraduationCap,
  MessageCircle,
  Play,
  Users,
  BookOpen,
  Award,
  Bell
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans selection:bg-primary selection:text-white">
      <Navbar />

      {/* Notice Ticker */}
      <div className="bg-primary/5 border-b border-primary/10 py-3 relative overflow-hidden flex items-center group">
        <div className="flex items-center gap-4 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 z-10 whitespace-nowrap ml-6 shadow-xl shadow-primary/20">
          <Bell className="w-3 h-3 fill-current brightness-200" />
          Important News
        </div>
        <div className="flex-1 overflow-hidden pointer-events-none pr-6">
          <div className="animate-marquee whitespace-nowrap text-sm font-semibold tracking-tight text-primary/80">
            <span className="mx-8 underline decoration-primary/20 decoration-2 underline-offset-4">Admission for 2026 Academic Session is officially OPEN! Apply by March 30th.</span>
            <span className="mx-8 underline decoration-primary/20 decoration-2 underline-offset-4">The Annual Cultural Fest "Rhythm 2026" starts from April 15th.</span>
            <span className="mx-8 underline decoration-primary/20 decoration-2 underline-offset-4">Parents are invited to the Mid-Term Progress Review on March 12th.</span>
          </div>
        </div>
      </div>

      <main className="flex-1 flex flex-col">
        {/* Luxury Hero Section */}
        <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-24 pb-32 overflow-hidden bg-zinc-950 text-white">

          {/* High Impact Background with Layers */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-all duration-1000 brightness-[0.3] scale-105 group-hover:scale-100"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-background opacity-80"></div>
            <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-zinc-950 to-transparent"></div>
          </div>

          {/* Decorative Elements */}
          <div className="hidden xl:block absolute top-[20%] left-[5%] w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
          <div className="hidden xl:block absolute bottom-[20%] right-[5%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="container relative z-10 mx-auto px-6 text-center lg:text-left grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center flex-1">

            {/* Left Content Column */}
            <div className="space-y-8 order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase animate-in fade-in slide-in-from-left-4 duration-700">
                < Award className="w-3.5 h-3.5" />
                <span>Excellence in Education since 1994</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                Nurturing the <br /><span className="text-primary italic">Leaders</span> of Tomorrow
              </h1>

              <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed max-w-lg animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                A world-class academic environment designed to empower students with holistic development, innovation, and integrity.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                <Button size="lg" className="h-14 px-8 rounded-xl text-base font-bold shadow-xl shadow-primary/20 group">
                  Enrol Now 2026 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 hover:text-white group">
                  <Play className="w-4 h-4 fill-current mr-2" />
                  Campus Tour
                </Button>
              </div>

              {/* Stats/Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-12 border-t border-white/5 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-400">
                {[
                  { icon: GraduationCap, label: "Success Rate", value: "98.5%" },
                  { icon: Users, label: "Exp. Faculty", value: "120+" },
                  { icon: Award, label: "Awards Won", value: "45" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center lg:items-start gap-2">
                    <div className="flex items-center gap-3">
                      <stat.icon className="w-5 h-5 text-primary opacity-80" />
                      <span className="text-2xl font-black">{stat.value}</span>
                    </div>
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card Column - Professional Integrated Look */}
            <div className="relative order-1 lg:order-2 animate-in fade-in zoom-in-95 duration-1000 delay-300 group">
              <div className="relative z-20 aspect-square lg:aspect-[4/5] bg-zinc-900 border border-white/10 rounded-[1.5rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
                  alt="Research Center"
                  className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Integrated Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex flex-col justify-end p-8 lg:p-10">
                  <div className="space-y-4">
                    <div className="w-12 h-0.5 bg-primary"></div>
                    <h3 className="text-3xl font-bold tracking-tight">Advanced Research & Innovation</h3>
                    <p className="text-zinc-300 text-sm max-w-xs font-medium">Providing students with the tools and environment to explore, discover, and lead.</p>
                    <Link href="#" className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group/link mt-2">
                      Explore Our Facilities
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Grounded Secondary Info Box */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500">2026 Admissions</h4>
                    <p className="text-sm font-bold whitespace-nowrap text-white">August Session Now Open</p>
                  </div>
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-900 overflow-hidden bg-zinc-800 shadow-xl">
                        <img src={`https://i.pravatar.cc/100?u=stu${i}`} alt="Student" />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-primary flex items-center justify-center text-[8px] font-black text-white">
                      +15k
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Student Body</h4>
                    <p className="text-sm font-bold text-white">A global community</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-zinc-500 animate-pulse">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] ml-1">Scroll to Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="bg-white py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: "Academic Excellence", text: "Global Standards", icon: GraduationCap },
                { title: "Campus Facilities", text: "Digital Libraries", icon: BookOpen },
                { title: "Expert Teachers", text: "PhD Foundations", icon: Users },
                { title: "Career Placement", text: "Global Partnerships", icon: Award },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-8 rounded-3xl border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 hover:border-primary/20 transition-all cursor-default lg:justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-zinc-900 tracking-tight">{f.title}</h4>
                    <p className="text-sm text-zinc-500 font-medium tracking-tight">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-950 text-white pt-24 pb-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
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
          <p>© 2026 SchoolDemo Institute. Built with absolute precision.</p>
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
