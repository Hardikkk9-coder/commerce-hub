import { Sparkles, ArrowUpCircle, Bug } from "lucide-react";

export default function ChangelogPage() {
  const releases = [
    {
      version: "v2.4.0",
      date: "October 24, 2023",
      title: "Advanced Inventory Analytics & AI Forecasting",
      desc: "This release introduces a completely revamped analytics engine powered by machine learning, helping you predict stockouts before they happen.",
      changes: [
        { type: "New Feature", icon: <Sparkles className="w-4 h-4 text-primary" />, color: "bg-primary/10 text-primary border-primary/20", items: ["AI-powered demand forecasting dashboard", "Automated purchase order generation", "Multi-warehouse stock balancing recommendations"] },
        { type: "Improvement", icon: <ArrowUpCircle className="w-4 h-4 text-blue-500" />, color: "bg-blue-500/10 text-blue-600 border-blue-500/20", items: ["Improved CSV export speed for large product catalogs", "Enhanced mobile responsiveness on the order management screen"] },
        { type: "Bug Fix", icon: <Bug className="w-4 h-4 text-rose-500" />, color: "bg-rose-500/10 text-rose-600 border-rose-500/20", items: ["Fixed an issue where discount codes were not applying to shipping costs correctly", "Resolved a UI glitch in the theme customizer color picker"] }
      ]
    },
    {
      version: "v2.3.5",
      date: "October 12, 2023",
      title: "Global Tax Compliance & Localization",
      desc: "We've partnered with TaxJar to bring automated global tax calculations to all CommerceHub merchants, natively built into checkout.",
      changes: [
        { type: "New Feature", icon: <Sparkles className="w-4 h-4 text-primary" />, color: "bg-primary/10 text-primary border-primary/20", items: ["Native TaxJar integration for US & EU merchants", "Automatic VAT calculation for digital goods", "Multi-currency checkout localization based on IP"] },
        { type: "Bug Fix", icon: <Bug className="w-4 h-4 text-rose-500" />, color: "bg-rose-500/10 text-rose-600 border-rose-500/20", items: ["Fixed webhook delivery timeouts for high-volume stores", "Addressed a memory leak in the dashboard charts"] }
      ]
    },
    {
      version: "v2.3.0",
      date: "September 28, 2023",
      title: "The Performance Update",
      desc: "Our engineering team spent the last month rewriting our core storefront rendering engine. The result? 40% faster page loads for your customers.",
      changes: [
        { type: "Improvement", icon: <ArrowUpCircle className="w-4 h-4 text-blue-500" />, color: "bg-blue-500/10 text-blue-600 border-blue-500/20", items: ["Migrated storefront rendering to Next.js App Router", "Implemented edge caching for product images", "Reduced main JavaScript bundle size by 35%"] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black pb-24">
      
      {/* Header */}
      <section className="py-20 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="container px-4 md:px-8 max-w-screen-md mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Changelog
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            New updates and improvements to CommerceHub.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container px-4 md:px-8 max-w-screen-md mx-auto">
          
          <div className="relative border-l border-slate-200 dark:border-zinc-800 ml-4 md:ml-6 space-y-16">
            
            {releases.map((release, i) => (
              <div key={i} className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-slate-50 dark:ring-black"></div>
                
                {/* Date & Version */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{release.date}</span>
                  <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 text-xs font-bold">
                    {release.version}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{release.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {release.desc}
                  </p>

                  <div className="space-y-6">
                    {release.changes.map((change, j) => (
                      <div key={j}>
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-bold uppercase tracking-wider mb-3 ${change.color}`}>
                          {change.icon}
                          {change.type}
                        </div>
                        <ul className="space-y-2.5">
                          {change.items.map((item, k) => (
                            <li key={k} className="flex items-start text-slate-700 dark:text-slate-300">
                              <span className="text-slate-300 dark:text-slate-600 mr-3 mt-1">•</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}
