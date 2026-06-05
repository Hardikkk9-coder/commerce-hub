import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Book, HelpCircle, Newspaper, BookOpen, Presentation, Users, ScrollText, Activity } from "lucide-react";

export default function ResourcesLandingPage() {
  const categories = [
    { title: "Documentation", icon: <Book className="w-5 h-5" />, desc: "Technical guides and API references for developers.", link: "/resources/docs" },
    { title: "Help Center", icon: <HelpCircle className="w-5 h-5" />, desc: "Get answers to common questions about your store.", link: "/resources/help" },
    { title: "Guides", icon: <BookOpen className="w-5 h-5" />, desc: "In-depth tutorials on growing your business.", link: "/resources/guides" },
    { title: "Blog", icon: <Newspaper className="w-5 h-5" />, desc: "Latest news, updates, and ecommerce tips.", link: "/resources/blog" },
    { title: "Case Studies", icon: <Presentation className="w-5 h-5" />, desc: "Read how others succeed with CommerceHub.", link: "/resources/case-studies" },
    { title: "Community", icon: <Users className="w-5 h-5" />, desc: "Connect with thousands of other merchants.", link: "/resources/community" },
    { title: "Changelog", icon: <ScrollText className="w-5 h-5" />, desc: "See what's new and what we've fixed recently.", link: "/resources/changelog" },
    { title: "System Status", icon: <Activity className="w-5 h-5" />, desc: "Real-time updates on our API and services.", link: "/resources/status" },
  ];

  const featured = [
    { title: "Getting Started", time: "5 min read", category: "Guide" },
    { title: "Setting up your first payment gateway", time: "8 min read", category: "Documentation" },
    { title: "How to optimize your product photos", time: "12 min read", category: "Blog" },
  ];

  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-slate-50 dark:bg-zinc-950 py-24 border-b border-slate-200 dark:border-zinc-800">
        <div className="container px-4 md:px-8 max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">grow your business</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
            Explore our comprehensive guides, documentation, and community resources to build the ultimate storefront.
          </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input 
              placeholder="Search articles, guides, documentation and tutorials..." 
              className="w-full h-14 pl-12 pr-4 text-base rounded-full shadow-sm border-slate-200 dark:border-zinc-800 bg-white dark:bg-black focus-visible:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">Popular Right Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((item, i) => (
              <div key={i} className="group cursor-pointer bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-premium hover:border-primary/50 transition-all duration-300">
                <div className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">{item.category}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <div className="text-sm text-slate-500 font-medium">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <Link key={i} href={cat.link} className="group bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
                  {cat.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
