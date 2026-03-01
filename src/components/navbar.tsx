"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    GraduationCap,
    Menu,
    Phone,
    Mail,
    ChevronDown
} from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-bold leading-none">{title}</div>
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

export const Navbar = () => {
    return (
        <header className="w-full flex flex-col">
            {/* Top Bar */}
            <div className="bg-zinc-950 text-zinc-400 py-2.5 px-6 hidden md:flex items-center justify-between text-[11px] font-bold tracking-widest uppercase border-b border-white/5">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 group transition-colors hover:text-white cursor-default">
                        <Phone className="w-3.5 h-3.5 text-primary" />
                        <span>+880 1234 567 890</span>
                    </div>
                    <div className="flex items-center gap-2 group transition-colors hover:text-white cursor-default">
                        <Mail className="w-3.5 h-3.5 text-primary" />
                        <span>admissions@schooldemo.edu</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="#" className="hover:text-white transition-colors">Notice Board</Link>
                    <div className="w-px h-3 bg-zinc-800"></div>
                    <Link href="#" className="hover:text-white transition-colors">Career</Link>
                    <div className="w-px h-3 bg-zinc-800"></div>
                    <Link href="#" className="hover:text-white transition-colors text-primary">Student Login</Link>
                    <div className="w-px h-3 bg-zinc-800"></div>
                    <Link href="#" className="hover:text-white transition-colors">Teacher Login</Link>
                    <div className="w-px h-3 bg-zinc-800"></div>
                    <Link href="#" className="hover:text-white transition-colors">HR Login</Link>
                </div>
            </div>

            {/* Main Nav Overlay */}
            <nav className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-50 shadow-sm border-b">
                <Link href="/" className="flex items-center gap-3 group shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-2xl shadow-primary/30 transition-transform group-hover:scale-110">
                        <GraduationCap className="w-7 h-7" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-black tracking-tighter leading-none text-zinc-950">SCHOOL<span className="text-primary italic">DEMO</span></span>
                        <span className="text-[10px] font-black tracking-[0.3em] text-zinc-400 mt-1 uppercase">Academic excellence</span>
                    </div>
                </Link>

                {/* Desktop Navigation Menu (shadcn) */}
                <div className="hidden xl:block">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-2">
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <GraduationCap className="h-10 w-10 text-primary" />
                                                    <div className="mb-2 mt-4 text-lg font-bold text-white uppercase tracking-tight">Our Legacy</div>
                                                    <p className="text-xs leading-relaxed text-zinc-400 font-medium">
                                                        Committed to providing world-class education and nurturing global leaders for over three decades.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="#" title="Principal's Welcome">Message from the head of institution.</ListItem>
                                        <ListItem href="#" title="Vision & Mission">Our core values and future objectives.</ListItem>
                                        <ListItem href="#" title="Governing Board">Meet our managing committee and directors.</ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Academic</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        <ListItem href="#" title="Our Programs">Detailed info on Science, Arts, and Commerce.</ListItem>
                                        <ListItem href="#" title="Academic Calendar">Key dates, holidays, and event schedule.</ListItem>
                                        <ListItem href="#" title="Syllabus & Curriculum">Lesson plans and subject structures.</ListItem>
                                        <ListItem href="#" title="Faculty Directory">Meet our experienced educators and staff.</ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Admission</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        <ListItem href="#" title="Admission Process" className="border-l-4 border-primary bg-primary/5">Step-by-step roadmap to joining our community.</ListItem>
                                        <ListItem href="#" title="Tuition & Fees">Transparent fee structure for all grades.</ListItem>
                                        <ListItem href="#" title="Scholarships">Merit-based financial aid opportunities.</ListItem>
                                        <ListItem href="#" title="Apply Now">Access the 2026 Online Application Form.</ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Campus</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        <ListItem href="#" title="Facilities">Labs, Library, Cafeteria, and Transport.</ListItem>
                                        <ListItem href="#" title="Photo Gallery">A visual tour of campus life and events.</ListItem>
                                        <ListItem href="#" title="Extra Curricular">Clubs, Sports, and Cultural activities.</ListItem>
                                        <ListItem href="#" title="Contact Us">Location map and direct inquiry portal.</ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* CTA Section */}
                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex flex-col text-right pr-4 border-r border-zinc-100">
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Inquiry Line</span>
                        <span className="text-sm font-bold text-zinc-950">+880 123 456 78</span>
                    </div>
                    <Button className="rounded-xl px-6 h-11 font-bold shadow-xl shadow-primary/20 group">
                        Apply Now
                        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="xl:hidden">
                        <Menu className="w-6 h-6" />
                    </Button>
                </div>
            </nav>
        </header>
    );
};
