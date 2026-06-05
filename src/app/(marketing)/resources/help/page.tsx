import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserCog, Settings, CreditCard, ShoppingCart, Truck, Globe, Wrench } from "lucide-react";
import Link from "next/link";

export default function HelpCenterPage() {
  const categories = [
    { title: "Account Management", icon: <UserCog className="w-6 h-6" />, articles: 12 },
    { title: "Store Setup", icon: <Settings className="w-6 h-6" />, articles: 24 },
    { title: "Billing", icon: <CreditCard className="w-6 h-6" />, articles: 8 },
    { title: "Payments", icon: <ShoppingCart className="w-6 h-6" />, articles: 15 },
    { title: "Shipping", icon: <Truck className="w-6 h-6" />, articles: 18 },
    { title: "Domains", icon: <Globe className="w-6 h-6" />, articles: 6 },
    { title: "Technical Issues", icon: <Wrench className="w-6 h-6" />, articles: 32 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black pb-24">
      
      {/* Help Hero */}
      <section className="bg-primary pt-24 pb-32 px-4 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        
        <div className="container max-w-screen-md mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            How can we help?
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Search our knowledge base or browse categories below to find what you need.
          </p>

          <div className="relative max-w-2xl mx-auto shadow-2xl rounded-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
            <Input 
              placeholder="Search for articles, guides, or topics..." 
              className="w-full h-16 pl-14 pr-4 text-lg rounded-full border-0 focus-visible:ring-4 focus-visible:ring-primary/30 text-slate-900 bg-white"
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2 h-12 rounded-full px-6">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container px-4 md:px-8 max-w-screen-xl mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Link key={i} href="#" className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 group">
              <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-colors shrink-0">
                {cat.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{cat.articles} articles</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="container px-4 md:px-8 max-w-screen-md mx-auto mt-24 text-center bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-3xl p-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Still need help?</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
          Our support team is available 24/7 to help you with any issues you might be facing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full px-8">Contact Support</Button>
          <Button variant="outline" size="lg" className="rounded-full px-8">Community Forum</Button>
        </div>
      </section>

    </div>
  );
}
