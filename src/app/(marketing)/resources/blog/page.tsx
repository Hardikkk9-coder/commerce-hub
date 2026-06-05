import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight, Calendar, Clock } from "lucide-react";

export default function BlogPage() {
  const categories = ["All", "Ecommerce", "Marketing", "Business Growth", "Product Updates", "Tutorials"];

  const posts = [
    {
      title: "10 SEO Strategies to Skyrocket Your Store Traffic in 2024",
      desc: "Learn the exact technical SEO and content strategies that top-performing CommerceHub merchants use to drive millions of organic visitors.",
      category: "Marketing",
      date: "Oct 24, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      title: "Introducing CommerceHub AI: Automate Your Inventory",
      desc: "Our new suite of machine learning tools will predict your stock outs before they happen, saving you time and lost revenue.",
      category: "Product Updates",
      date: "Oct 18, 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      title: "How Minimalist Goods Grew Revenue by 400% in 6 Months",
      desc: "A deep dive into the exact marketing funnels, product drops, and retention strategies used by one of our fastest-growing merchants.",
      category: "Business Growth",
      date: "Oct 12, 2023",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    },
    {
      title: "The Ultimate Guide to Product Photography on a Budget",
      desc: "You don't need a $5,000 camera to take stunning product photos. Learn how to shoot like a pro using just your smartphone.",
      category: "Tutorials",
      date: "Oct 05, 2023",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1542744094-24638ea0b56c?w=800&q=80"
    },
    {
      title: "Why Omnichannel is the Future of Retail",
      desc: "If you're only selling on one platform, you're leaving money on the table. Here is how to expand your reach seamlessly.",
      category: "Ecommerce",
      date: "Sep 28, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
    },
    {
      title: "Holiday Prep: Is Your Store Ready for Black Friday?",
      desc: "A comprehensive checklist to ensure your servers, inventory, and support team are prepared for the biggest shopping day of the year.",
      category: "Business Growth",
      date: "Sep 20, 2023",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      
      {/* Blog Header & Search */}
      <section className="pt-20 pb-10 border-b border-slate-200 dark:border-zinc-800">
        <div className="container px-4 md:px-8 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              CommerceHub Blog
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl">
              Insights, strategies, and updates to help you build and scale your online business.
            </p>
          </div>
          <div className="w-full md:w-80 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search articles..." 
              className="pl-9 h-11 bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Categories Nav */}
      <div className="sticky top-16 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800">
        <div className="container px-4 md:px-8 max-w-screen-xl mx-auto overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 py-4">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-slate-900 text-white dark:bg-white dark:text-black' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-zinc-900 dark:text-slate-400 dark:hover:bg-zinc-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
          <Link href="#" className="group block relative rounded-3xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80" 
                  alt="Featured post" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm mb-6">
                  <span className="font-semibold text-primary uppercase tracking-wider">Product Updates</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                  <span className="text-slate-500 flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Nov 02, 2023</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                  CommerceHub 2.0: The Next Generation of Ecommerce
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 line-clamp-3">
                  Today we're thrilled to announce the biggest update in our history. Featuring a completely rebuilt checkout experience, advanced multi-currency support, and the introduction of our new headless commerce API.
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                  Read Article <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-8">
        <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Link key={i} href="#" className="group flex flex-col h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-white dark:bg-black hover:shadow-premium transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden border-b border-slate-200 dark:border-zinc-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs font-medium mb-4">
                    <span className="text-primary tracking-wider uppercase">{post.category}</span>
                    <span className="text-slate-500 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3 flex-1">
                    {post.desc}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-slate-900 dark:text-white mt-auto">
                    {post.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="default" size="sm" className="w-9">1</Button>
              <Button variant="ghost" size="sm" className="w-9">2</Button>
              <Button variant="ghost" size="sm" className="w-9">3</Button>
              <Button variant="ghost" size="sm" disabled className="w-9">...</Button>
              <Button variant="ghost" size="sm" className="w-9">12</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
