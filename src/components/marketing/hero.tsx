import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, BarChart3, ShoppingBag, Users, Zap, 
  LayoutDashboard, Package, Tags, Settings, Palette,
  Search, Bell, MoreHorizontal, ArrowUpRight
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white dark:from-slate-900 dark:via-background dark:to-background -z-10" />

      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto text-center">
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600 mb-8 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          CommerceHub 2.0 is now live
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">
          Everything You Need To <br className="hidden md:block" />
          <span className="text-gradient">Sell Online</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
          Build your online store, manage products, process orders, and grow
          your business from one powerful platform designed for scale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup">
            <Button
              size="lg"
              className="h-14 px-8 text-lg rounded-full shadow-premium"
            >
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/demo">
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg rounded-full bg-white dark:bg-transparent"
            >
              Book Demo
            </Button>
          </Link>
        </div>

        {/* Dashboard Preview Graphic */}
        <div className="mt-20 relative max-w-5xl mx-auto text-left">
          <div className="rounded-2xl border border-slate-200/50 bg-white/50 p-2 shadow-2xl backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-900/50">
            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 aspect-[16/9] flex flex-col relative font-sans">
              
              {/* Fake Browser/App Header */}
              <div className="h-14 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 bg-white dark:bg-zinc-900">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5 mr-4">
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                  </div>
                  <div className="hidden md:flex items-center text-sm font-medium text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-md bg-slate-50 dark:bg-black gap-2">
                    <div className="h-4 w-4 bg-primary rounded-sm flex items-center justify-center">
                      <span className="text-[10px] text-white font-bold leading-none">A</span>
                    </div>
                    Acme Supply Co.
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="relative hidden sm:block">
                    <Search className="absolute left-2.5 top-2 h-4 w-4 text-slate-400" />
                    <div className="w-64 h-8 bg-slate-100 dark:bg-black border border-slate-200 dark:border-slate-800 rounded-md pl-9 pr-3 flex items-center text-xs text-slate-400">
                      Search orders, customers...
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500">
                    <Bell className="h-4 w-4" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden border border-slate-300 dark:border-slate-700">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Realistic UI Body */}
              <div className="flex flex-1 overflow-hidden">
                
                {/* Sidebar */}
                <div className="w-56 border-r border-slate-200 dark:border-slate-800 p-3 hidden md:flex flex-col bg-white dark:bg-zinc-900">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-100 dark:bg-zinc-800/80 text-slate-900 dark:text-white font-medium text-sm">
                      <LayoutDashboard className="h-4 w-4" /> Overview
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 font-medium text-sm">
                      <ShoppingBag className="h-4 w-4" /> Orders
                      <span className="ml-auto bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[10px] font-bold">12</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 font-medium text-sm">
                      <Package className="h-4 w-4" /> Products
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 font-medium text-sm">
                      <Users className="h-4 w-4" /> Customers
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 font-medium text-sm">
                      <Tags className="h-4 w-4" /> Discounts
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 font-medium text-sm">
                      <Palette className="h-4 w-4" /> Themes
                    </div>
                  </div>
                  <div className="mt-auto space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 font-medium text-sm">
                      <Settings className="h-4 w-4" /> Settings
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-6 lg:p-8 bg-slate-50/50 dark:bg-black/20 overflow-hidden flex flex-col">
                  
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Today's Performance</h2>
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-slate-800 px-3 py-1.5 rounded-md">
                      Oct 24, 2023
                    </div>
                  </div>

                  {/* Stat Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {[
                      { title: "Total Revenue", value: "$45,231", trend: "+20.1%", trendUp: true },
                      { title: "Orders", value: "842", trend: "+14.5%", trendUp: true },
                      { title: "Customers", value: "3,214", trend: "+5.2%", trendUp: true },
                      { title: "Conversion", value: "3.24%", trend: "-1.1%", trendUp: false },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                        <span className="text-sm text-slate-500 font-medium mb-1">{stat.title}</span>
                        <div className="flex items-end justify-between mt-auto">
                          <span className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</span>
                          <span className={`text-xs font-medium flex items-center ${stat.trendUp ? 'text-emerald-600' : 'text-red-500'}`}>
                            {stat.trend} {stat.trendUp ? <ArrowUpRight className="h-3 w-3 ml-0.5" /> : null}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Lower Dashboard Area */}
                  <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Fake Chart */}
                    <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="font-semibold text-slate-900 dark:text-white">Revenue Overview</h3>
                        <div className="flex gap-2">
                          <div className="text-xs text-slate-500 flex items-center"><div className="w-2 h-2 rounded-full bg-primary mr-1.5"></div>This Week</div>
                        </div>
                      </div>
                      <div className="flex-1 flex items-end justify-between px-2 gap-2 relative">
                        {/* Grid lines */}
                        <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-between z-0">
                          <div className="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
                          <div className="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
                          <div className="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
                          <div className="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
                          <div className="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
                        </div>
                        {/* Bars */}
                        {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                          <div key={i} className="w-full bg-primary/20 rounded-t-sm relative z-10 group" style={{ height: `${h}%` }}>
                            <div className="absolute bottom-0 inset-x-0 bg-primary rounded-t-sm transition-all" style={{ height: `${h * 0.8}%` }}></div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-3 text-[10px] text-slate-400 px-2 font-medium">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                      </div>
                    </div>

                    {/* Recent Orders Table */}
                    <div className="bg-white dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-slate-900 dark:text-white">Recent Orders</h3>
                        <Button variant="ghost" size="sm" className="h-6 text-xs text-slate-500">View All</Button>
                      </div>
                      <div className="space-y-4">
                        {[
                          { id: "#1024", name: "Alice Johnson", amount: "$124.00", status: "Paid" },
                          { id: "#1023", name: "Bob Smith", amount: "$45.50", status: "Paid" },
                          { id: "#1022", name: "Charlie Brown", amount: "$299.99", status: "Pending" },
                          { id: "#1021", name: "Diana Prince", amount: "$89.00", status: "Paid" }
                        ].map((order, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-medium text-slate-600 dark:text-slate-300">
                                {order.name.charAt(0)}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-slate-900 dark:text-white leading-none mb-1">{order.name}</p>
                                <p className="text-[11px] text-slate-500">{order.id}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-slate-900 dark:text-white leading-none mb-1">{order.amount}</p>
                              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${order.status === 'Paid' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Cards (Subtle non-distracting animation) */}
          <div className="absolute -left-12 top-1/4 hidden lg:flex flex-col bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl animate-[bounce_4s_infinite]">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium">Revenue</p>
                <p className="font-bold text-slate-900 dark:text-white">$124,500</p>
              </div>
            </div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center">
              +14% this week
            </div>
          </div>
          
          <div className="absolute -right-8 bottom-1/4 hidden lg:flex flex-col bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl animate-[bounce_5s_infinite_0.5s]">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium">New Orders</p>
                <p className="font-bold text-slate-900 dark:text-white">+842</p>
              </div>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Just now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
