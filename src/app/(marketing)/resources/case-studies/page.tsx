import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudiesPage() {
  const cases = [
    {
      company: "Minimalist Goods",
      logo: "M",
      industry: "Home Decor",
      revGrowth: "+400%",
      trafficGrowth: "2.5M",
      overview: "Minimalist Goods was struggling with checkout abandonment on their previous platform. By migrating to CommerceHub's optimized one-click checkout, they quadrupled their revenue in six months.",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80"
    },
    {
      company: "TechPro Audio",
      logo: "T",
      industry: "Electronics",
      revGrowth: "+185%",
      trafficGrowth: "850K",
      overview: "TechPro needed a robust inventory system to handle their global dropshipping network. CommerceHub's real-time sync prevented stockouts and improved fulfillment times by 40%.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
    },
    {
      company: "Luxe Bridal",
      logo: "L",
      industry: "Fashion",
      revGrowth: "+320%",
      trafficGrowth: "1.2M",
      overview: "Selling high-ticket items requires absolute trust. The premium aesthetic and secure payment processing of CommerceHub allowed Luxe Bridal to double their average order value.",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
    },
    {
      company: "FreshMarket",
      logo: "F",
      industry: "Food & Beverage",
      revGrowth: "+215%",
      trafficGrowth: "4.1M",
      overview: "Handling local delivery and complex tax rules was holding FreshMarket back. CommerceHub's localized routing tools enabled them to expand to 50 new cities seamlessly.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      
      {/* Hero */}
      <section className="py-20 border-b border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950">
        <div className="container px-4 md:px-8 max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Customer Success Stories
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Discover how the world's fastest-growing brands use CommerceHub to scale their operations and increase revenue.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {cases.map((story, i) => (
              <div key={i} className="group relative bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col">
                
                {/* Image Header */}
                <div className="h-64 relative overflow-hidden bg-slate-100 dark:bg-zinc-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={story.image} alt={story.company} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Logo overlay */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-xl font-black text-slate-900">
                      {story.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{story.company}</h3>
                      <p className="text-white/80 font-medium text-sm">{story.industry}</p>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 border-b border-slate-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950/50">
                  <div className="p-6 border-r border-slate-100 dark:border-zinc-800">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Revenue Growth</p>
                    <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400">{story.revGrowth}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Traffic Growth</p>
                    <p className="text-3xl font-black text-slate-900 dark:text-white">{story.trafficGrowth}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-1">
                    "{story.overview}"
                  </p>
                  <Link href="#" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all w-fit">
                    Read Full Case Study <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
