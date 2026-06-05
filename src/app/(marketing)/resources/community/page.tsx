import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Users, MessageSquare, Star, Lightbulb, Megaphone, ArrowUp, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CommunityPage() {
  const topics = [
    { title: "Announcements", icon: <Megaphone className="w-5 h-5 text-purple-500" />, desc: "Official news and product updates from the team.", count: 142 },
    { title: "Discussions", icon: <MessageSquare className="w-5 h-5 text-blue-500" />, desc: "General ecommerce talk, strategies, and networking.", count: 1205 },
    { title: "Questions & Help", icon: <Users className="w-5 h-5 text-emerald-500" />, desc: "Get help from other merchants and community managers.", count: 3450 },
    { title: "Feature Requests", icon: <Lightbulb className="w-5 h-5 text-amber-500" />, desc: "Suggest and vote on new features for CommerceHub.", count: 890 },
    { title: "Showcase", icon: <Star className="w-5 h-5 text-rose-500" />, desc: "Show off your store, theme customizations, or apps.", count: 420 },
  ];

  const recentPosts = [
    { title: "How are you preparing for BFCM this year?", category: "Discussions", replies: 45, views: "1.2k", time: "2 hours ago", author: "Sarah J." },
    { title: "[Feature Request] Allow custom fields on customer checkout", category: "Feature Requests", replies: 128, views: "4.5k", time: "5 hours ago", author: "David K." },
    { title: "My store conversion rate dropped after changing themes, help!", category: "Questions & Help", replies: 12, views: "340", time: "1 day ago", author: "Alex M." },
    { title: "Showcase: I built a custom 3D product viewer", category: "Showcase", replies: 89, views: "2.1k", time: "2 days ago", author: "TechPro" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black pb-24">
      
      {/* Community Hero */}
      <section className="bg-slate-900 text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-3xl rounded-full opacity-50 pointer-events-none"></div>
        <div className="container px-4 md:px-8 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              CommerceHub Community
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-xl">
              Join over 50,000 founders, developers, and experts building the future of ecommerce together.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-100">
                Join the Discussion
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-slate-700 text-white hover:bg-slate-800">
                Sign In
              </Button>
            </div>
          </div>
          <div className="w-full max-w-sm hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-3xl font-black text-white mb-1">50k+</p>
                <p className="text-sm text-slate-400">Members</p>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-3xl font-black text-white mb-1">12k</p>
                <p className="text-sm text-slate-400">Online Now</p>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-3xl font-black text-white mb-1">1.2M</p>
                <p className="text-sm text-slate-400">Posts</p>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-3xl font-black text-white mb-1">24/7</p>
                <p className="text-sm text-slate-400">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto -mt-10 relative z-20">
        <div className="bg-white dark:bg-zinc-950 rounded-2xl shadow-xl border border-slate-200 dark:border-zinc-800 p-4 flex items-center">
          <Search className="w-5 h-5 text-slate-400 ml-3 mr-2" />
          <Input 
            placeholder="Search discussions, questions, and tags..." 
            className="border-0 focus-visible:ring-0 text-base h-12 shadow-none"
          />
        </div>
      </div>

      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Sidebar - Topics */}
        <div className="space-y-4">
          <h2 className="font-bold text-slate-900 dark:text-white mb-4 px-2 tracking-tight">Categories</h2>
          {topics.map((topic, i) => (
            <Link key={i} href="#" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white dark:hover:bg-zinc-900 border border-transparent hover:border-slate-200 dark:hover:border-zinc-800 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-950 flex items-center justify-center shrink-0 border border-slate-200 dark:border-zinc-800">
                {topic.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{topic.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{topic.desc}</p>
                <p className="text-xs font-semibold text-slate-400 mt-2">{topic.count.toLocaleString()} posts</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Content - Trending Discussions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h2 className="font-bold text-slate-900 dark:text-white tracking-tight">Trending Discussions</h2>
            <Button variant="ghost" size="sm" className="text-primary">View All</Button>
          </div>
          
          <div className="bg-white dark:bg-zinc-950 rounded-3xl border border-slate-200 dark:border-zinc-800 overflow-hidden shadow-sm">
            {recentPosts.map((post, i) => (
              <div key={i} className="group p-6 border-b border-slate-100 dark:border-zinc-800 last:border-0 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors flex gap-4 cursor-pointer">
                
                {/* Upvotes */}
                <div className="flex flex-col items-center justify-center w-12 h-14 bg-slate-100 dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800 shrink-0">
                  <ArrowUp className="w-4 h-4 text-slate-400 mb-1 group-hover:text-primary transition-colors" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{(Math.random() * 100 + 10).toFixed(0)}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-zinc-800 rounded-md text-slate-700 dark:text-slate-300">
                      {post.category}
                    </span>
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.time}</span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-6 text-sm text-slate-500 font-medium">
                  <div className="text-center">
                    <p className="text-slate-900 dark:text-white font-bold">{post.replies}</p>
                    <p className="text-xs">Replies</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-900 dark:text-white font-bold">{post.views}</p>
                    <p className="text-xs">Views</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
