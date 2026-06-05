import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, PlayCircle, FileText } from "lucide-react";

export default function GuidesPage() {
  const guides = [
    {
      title: "How To Launch Your First Store",
      desc: "A complete step-by-step masterclass from domain registration to processing your very first order.",
      type: "Course",
      lessons: 12,
      time: "2h 45m",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
      color: "bg-blue-500"
    },
    {
      title: "Product Photography Guide",
      desc: "Master lighting, angles, and editing to make your catalog look like it was shot by professionals.",
      type: "E-Book",
      lessons: 8,
      time: "45m",
      image: "https://images.unsplash.com/photo-1542744094-24638ea0b56c?w=800&q=80",
      color: "bg-purple-500"
    },
    {
      title: "Conversion Optimization Guide",
      desc: "Proven UX tweaks, checkout flows, and psychology principles to turn more visitors into buyers.",
      type: "Guide",
      lessons: 15,
      time: "1h 20m",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      color: "bg-emerald-500"
    },
    {
      title: "Inventory Management Strategies",
      desc: "Learn how to forecast demand, prevent stockouts, and manage multiple warehouses efficiently.",
      type: "Masterclass",
      lessons: 6,
      time: "1h 10m",
      image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?w=800&q=80",
      color: "bg-amber-500"
    },
    {
      title: "SEO For Ecommerce",
      desc: "Technical SEO, keyword research, and content marketing specifically tailored for online stores.",
      type: "Course",
      lessons: 10,
      time: "3h 00m",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
      color: "bg-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black pb-24">
      
      {/* Guides Hero */}
      <section className="py-20 bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-zinc-800">
        <div className="container px-4 md:px-8 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" /> CommerceHub Academy
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Master the art of <br/>online selling.
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
              In-depth courses, guides, and playbooks created by ecommerce experts to help you start, grow, and scale.
            </p>
            <Button size="lg" className="rounded-full px-8 h-12 text-base">
              Start Learning for Free
            </Button>
          </div>
          <div className="flex-1 w-full max-w-lg relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-3xl transform rotate-3 opacity-20 blur-xl"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
              alt="Students learning" 
              className="rounded-3xl shadow-2xl relative z-10 border border-slate-200/50 dark:border-zinc-800/50"
            />
          </div>
        </div>
      </section>

      {/* Guides List */}
      <section className="py-16">
        <div className="container px-4 md:px-8 max-w-screen-xl mx-auto space-y-8">
          
          {guides.map((guide, i) => (
            <div key={i} className="group bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col md:flex-row">
              
              <div className="md:w-2/5 lg:w-1/3 relative overflow-hidden aspect-video md:aspect-auto">
                <div className={`absolute inset-0 opacity-40 mix-blend-multiply dark:mix-blend-overlay ${guide.color} z-10 group-hover:opacity-20 transition-opacity`}></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={guide.image} 
                  alt={guide.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-black/90 backdrop-blur text-slate-900 dark:text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {guide.type}
                </div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col justify-center flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                  {guide.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl">
                  {guide.desc}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mt-auto">
                  <div className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                    <FileText className="w-5 h-5 mr-2 text-slate-400" />
                    {guide.lessons} Chapters
                  </div>
                  <div className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                    <PlayCircle className="w-5 h-5 mr-2 text-slate-400" />
                    {guide.time} of content
                  </div>
                  <Link href="#" className="ml-auto inline-flex items-center text-primary font-bold group-hover:gap-2 transition-all">
                    Start Guide <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
