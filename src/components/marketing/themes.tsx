import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, Menu, Star, ArrowRight } from "lucide-react";

export function Themes() {
  const themes = [
    { 
      id: "minimal",
      name: "Minimal", 
      category: "Fashion", 
      color: "bg-slate-100 dark:bg-slate-900",
      content: (
        <div className="w-full h-full bg-white flex flex-col font-sans overflow-hidden">
          {/* Minimal Nav */}
          <div className="h-10 border-b border-gray-100 flex items-center justify-between px-4">
            <span className="font-bold text-[10px] tracking-widest uppercase">Atelier</span>
            <div className="flex gap-3 text-[9px] text-gray-500 uppercase tracking-widest hidden sm:flex">
              <span>Shop</span><span>Lookbook</span><span>About</span>
            </div>
            <div className="flex gap-2">
              <Search className="w-3 h-3" />
              <ShoppingBag className="w-3 h-3" />
            </div>
          </div>
          {/* Minimal Hero */}
          <div className="relative h-24 bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80" alt="Fashion" className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] uppercase tracking-[0.2em] mb-1">New Season</span>
              <span className="text-sm font-light">Spring Collection</span>
            </div>
          </div>
          {/* Minimal Products */}
          <div className="flex-1 p-4 grid grid-cols-2 gap-3">
            {[
              { img: "https://images.unsplash.com/photo-1515347619362-f70334a1795d?w=400&q=80", title: "Linen Shirt", price: "$85" },
              { img: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=400&q=80", title: "Pleated Trousers", price: "$120" }
            ].map((prod, i) => (
              <div key={i} className="flex flex-col group/prod">
                <div className="bg-gray-100 h-24 mb-2 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={prod.img} alt={prod.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/prod:scale-105" />
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[9px] text-gray-900">{prod.title}</span>
                  <span className="text-[9px] text-gray-500">{prod.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    { 
      id: "techpro",
      name: "TechPro", 
      category: "Electronics", 
      color: "bg-blue-900 dark:bg-blue-950",
      content: (
        <div className="w-full h-full bg-[#0B0F19] flex flex-col font-sans text-white overflow-hidden">
          {/* Tech Nav */}
          <div className="h-10 border-b border-white/10 flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center"><span className="text-[8px] font-bold">T</span></div>
              <span className="font-bold text-[10px] tracking-tight">TECHPRO</span>
            </div>
            <div className="flex bg-white/5 rounded px-2 py-1 items-center gap-1 w-24">
              <Search className="w-2.5 h-2.5 text-gray-400" />
              <div className="w-12 h-1 bg-white/20 rounded-full"></div>
            </div>
            <div className="flex gap-2">
              <ShoppingBag className="w-3 h-3" />
            </div>
          </div>
          {/* Promo Banner */}
          <div className="h-16 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center px-4 relative overflow-hidden">
            <div className="relative z-10 w-2/3">
              <div className="text-[8px] font-bold text-blue-200 uppercase mb-0.5">Pre-order now</div>
              <div className="text-[12px] font-bold leading-tight">Next-Gen Console</div>
              <div className="mt-1 w-12 h-4 bg-white text-blue-900 rounded flex items-center justify-center text-[8px] font-bold">Buy Now</div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1606144042871-26eb3e14f731?w=400&q=80" alt="Console" className="absolute -right-4 top-0 w-24 h-full object-cover opacity-80 mix-blend-screen" />
          </div>
          {/* Tech Products */}
          <div className="flex-1 p-3 bg-[#050811]">
            <div className="flex gap-2 mb-3">
              {['Laptops', 'Audio', 'Accessories'].map(t => (
                <div key={t} className="text-[8px] px-2 py-1 bg-white/10 rounded-full">{t}</div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", title: "Pro Headphones X", price: "$299" },
                { img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=400&q=80", title: "Smart Phone 12", price: "$899" }
              ].map((prod, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-2 border border-white/5">
                  <div className="bg-black h-16 rounded mb-2 overflow-hidden flex items-center justify-center p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={prod.img} alt={prod.title} className="max-h-full object-contain" />
                  </div>
                  <span className="text-[9px] font-medium line-clamp-1">{prod.title}</span>
                  <div className="flex items-center gap-0.5 my-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-2 h-2 text-yellow-500 fill-yellow-500" />)}
                  </div>
                  <span className="text-[9px] font-bold text-blue-400">{prod.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    { 
      id: "luxe",
      name: "Luxe", 
      category: "Jewelry", 
      color: "bg-zinc-200 dark:bg-zinc-800",
      content: (
        <div className="w-full h-full bg-[#f9f7f2] flex flex-col font-serif text-[#2c2c2c] overflow-hidden border border-[#eae0d5]">
          {/* Luxe Nav */}
          <div className="h-12 flex items-center justify-center px-4 relative">
            <Menu className="w-3 h-3 absolute left-4" />
            <span className="font-normal text-sm tracking-[0.3em] uppercase">Aurum</span>
            <ShoppingBag className="w-3 h-3 absolute right-4" />
          </div>
          {/* Luxe Hero */}
          <div className="flex-1 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80" alt="Jewelry" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-5">
              <h2 className="text-white text-xl leading-tight mb-2 italic">The Bridal<br/>Collection</h2>
              <div className="flex items-center gap-2 text-white/90 border-b border-white/50 w-max pb-0.5">
                <span className="text-[9px] tracking-widest uppercase sans">Discover</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
          {/* Luxe Featured */}
          <div className="h-20 bg-white flex items-center px-4 gap-3 overflow-hidden">
            <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden shrink-0">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://images.unsplash.com/photo-1599643478514-4a820cbf311e?w=200&q=80" alt="Ring" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] tracking-widest uppercase sans text-gray-400 mb-0.5">Featured</span>
              <span className="text-[11px] font-medium">Diamond Eternity Ring</span>
              <span className="text-[9px] sans mt-0.5">$2,450</span>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: "fresh",
      name: "Fresh", 
      category: "Food & Drink", 
      color: "bg-emerald-50 dark:bg-emerald-950",
      content: (
        <div className="w-full h-full bg-white flex flex-col font-sans overflow-hidden">
          {/* Fresh Nav */}
          <div className="h-12 bg-emerald-600 flex items-center justify-between px-3 text-white">
            <span className="font-bold text-xs tracking-tight flex items-center gap-1">
              <span className="text-base">🍋</span> FreshMarket
            </span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center relative">
              <ShoppingBag className="w-3 h-3" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
          {/* Fresh Categories */}
          <div className="h-8 bg-emerald-50 flex items-center px-2 gap-2 overflow-hidden whitespace-nowrap">
            {['Produce', 'Dairy', 'Bakery', 'Meat'].map((c, i) => (
              <div key={c} className={`text-[8px] font-bold px-2.5 py-1 rounded-full ${i===0 ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-800 border border-emerald-100'}`}>
                {c}
              </div>
            ))}
          </div>
          {/* Fresh Products */}
          <div className="flex-1 p-3 bg-gray-50 overflow-hidden">
            <span className="text-[10px] font-bold text-gray-800 mb-2 block">Weekly Specials</span>
            <div className="grid grid-cols-2 gap-3">
              {[
                { img: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=400&q=80", title: "Organic Avocados", price: "$4.99", unit: "lb" },
                { img: "https://images.unsplash.com/photo-1550828520-4cb496926fc9?w=400&q=80", title: "Artisan Bread", price: "$5.50", unit: "ea" }
              ].map((prod, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                  <div className="h-16 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={prod.img} alt={prod.title} className="w-full h-full object-cover" />
                    <div className="absolute top-1 right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-emerald-600 text-[10px] font-bold">+</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <span className="text-[9px] font-bold text-gray-800 block line-clamp-1">{prod.title}</span>
                    <div className="flex items-baseline gap-0.5 mt-0.5">
                      <span className="text-[10px] font-bold text-emerald-600">{prod.price}</span>
                      <span className="text-[7px] text-gray-500">/{prod.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <section id="themes" className="py-24 overflow-hidden relative">
      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              World-class storefronts
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Start with one of our premium themes and customize every detail to match your brand. Fully responsive and optimized for conversion.
            </p>
          </div>
          <Button variant="outline" size="lg" className="rounded-full">
            Explore Theme Store
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {themes.map((theme) => (
            <div key={theme.id} className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-black shadow-sm hover:shadow-premium transition-all duration-300 isolate transform-gpu">
              <div className={`aspect-[4/3] w-full ${theme.color} flex flex-col p-6 lg:p-10 transition-transform duration-700 group-hover:scale-[1.02]`}>
                
                {/* Macbook/Browser Frame */}
                <div className="bg-white dark:bg-zinc-950 rounded-xl flex-1 min-h-0 shadow-2xl border border-slate-200/50 dark:border-zinc-800/50 overflow-hidden flex flex-col relative z-10 transform transform-gpu origin-top transition-transform duration-500 group-hover:-translate-y-2">
                  {/* Browser Header */}
                  <div className="h-8 border-b border-slate-100 dark:border-zinc-800 flex items-center px-4 gap-2 bg-slate-50 dark:bg-zinc-900 shrink-0">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                    </div>
                    <div className="h-4 flex-1 max-w-[120px] mx-auto bg-white dark:bg-zinc-800 rounded-sm border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                      <span className="text-[7px] text-slate-400 font-sans">{theme.id}.commercehub.com</span>
                    </div>
                  </div>
                  
                  {/* Miniature Store Content */}
                  <div className="flex-1 min-h-0 overflow-hidden pointer-events-none relative">
                    {theme.content}
                    {/* Inner shadow overlay to simulate screen edge */}
                    <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.02)] pointer-events-none z-50"></div>
                  </div>
                </div>

              </div>
              
              {/* Theme Meta Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-black dark:via-black/90 pt-20 z-20 pointer-events-none">
                <div className="flex justify-between items-end pointer-events-auto">
                  <div>
                    <p className="text-primary text-sm font-medium mb-1 tracking-wide uppercase">{theme.category}</p>
                    <h3 className="text-slate-900 dark:text-white text-2xl font-bold">{theme.name}</h3>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full bg-slate-100 dark:bg-zinc-900 hover:bg-primary hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
