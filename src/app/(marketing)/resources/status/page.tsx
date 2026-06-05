import { CheckCircle2, Activity, AlertCircle } from "lucide-react";

export default function StatusPage() {
  const systems = [
    { name: "API Services", status: "Operational", uptime: "99.99%" },
    { name: "Checkout & Cart", status: "Operational", uptime: "100%" },
    { name: "Payment Gateways", status: "Operational", uptime: "99.98%" },
    { name: "Merchant Dashboard", status: "Operational", uptime: "99.95%" },
    { name: "Storefront Rendering", status: "Operational", uptime: "100%" },
    { name: "Webhooks", status: "Operational", uptime: "99.99%" },
  ];

  const pastIncidents = [
    {
      date: "Oct 18, 2023",
      title: "Delayed webhook deliveries",
      status: "Resolved",
      desc: "Between 14:00 UTC and 14:45 UTC, some merchants experienced delayed webhook deliveries for order creation events. All missed webhooks have been successfully replayed and the system is back to normal."
    },
    {
      date: "Sep 22, 2023",
      title: "Elevated error rates on Dashboard API",
      status: "Resolved",
      desc: "We identified and patched an issue causing 500 errors when loading the Analytics tab in the dashboard. The root cause was a database indexing delay."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black pb-24">
      
      {/* Status Header */}
      <section className="pt-24 pb-12 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="container px-4 md:px-8 max-w-screen-md mx-auto text-center">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-emerald-50 dark:ring-emerald-950/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            All Systems Operational
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Last updated: Today at 09:14 AM UTC
          </p>
        </div>
      </section>

      {/* Systems Status Grid */}
      <section className="py-12">
        <div className="container px-4 md:px-8 max-w-screen-md mx-auto">
          <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm">
            
            <div className="bg-slate-50 dark:bg-zinc-950 border-b border-slate-200 dark:border-zinc-800 p-6 flex justify-between items-center">
              <h2 className="font-bold text-slate-900 dark:text-white">Uptime over past 90 days</h2>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <Activity className="w-4 h-4" /> 99.98% overall
              </div>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-zinc-800">
              {systems.map((sys, i) => (
                <div key={i} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-zinc-950/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-slate-900 dark:text-white font-medium">{sys.name}</span>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                    {/* Fake 90-day chart lines */}
                    <div className="flex items-end gap-0.5 h-6 opacity-60">
                      {[...Array(30)].map((_, j) => (
                        <div key={j} className="w-1 bg-emerald-500 rounded-t-sm" style={{ height: `${Math.random() * 40 + 60}%` }}></div>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium text-sm min-w-[100px] justify-end">
                      {sys.status} <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Past Incidents */}
      <section className="py-12">
        <div className="container px-4 md:px-8 max-w-screen-md mx-auto">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">Past Incidents</h2>
          
          <div className="space-y-8">
            {pastIncidents.map((incident, i) => (
              <div key={i} className="relative pl-8">
                {/* Timeline Dot */}
                <div className="absolute left-[3px] top-2 w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                <div className="absolute left-[6px] top-6 bottom-[-2rem] w-px bg-slate-200 dark:bg-zinc-800 last:hidden"></div>
                
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">{incident.date}</p>
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{incident.title}</h3>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" /> {incident.status}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {incident.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
