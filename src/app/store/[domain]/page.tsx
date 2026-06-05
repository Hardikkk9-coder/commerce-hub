import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default async function StorefrontHome({ params }: { params: Promise<{ domain: string }> }) {
  const { domain } = await params;
  const products = [
    { id: 1, name: "Premium Wireless Headphones", price: "$299", category: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" },
    { id: 2, name: "Minimalist Watch", price: "$199", category: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80" },
    { id: 3, name: "Smart Home Speaker", price: "$149", category: "Electronics", image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800&q=80" },
    { id: 4, name: "Leather Backpack", price: "$129", category: "Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80" },
  ];

  return (
    <div>
      {/* Storefront Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-100">
        <div className="absolute inset-0 bg-slate-900/10 z-10"></div>
        {/* Mock background image */}
        <div className="absolute inset-0 opacity-50 dark:opacity-100 mix-blend-multiply filter blur-sm transition-all duration-1000 scale-105 hover:scale-100 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80')] bg-cover bg-center"></div>
        
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 drop-shadow-sm">
            Elevate Your Everyday
          </h1>
          <p className="text-xl md:text-2xl text-slate-800 mb-10 font-medium max-w-xl mx-auto">
            Discover our new collection of meticulously crafted essentials.
          </p>
          <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-slate-900 hover:bg-slate-800 text-white shadow-xl">
            Shop Collection
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Trending Now</h2>
            <p className="text-slate-500">The pieces everyone is talking about.</p>
          </div>
          <Link href="#" className="hidden md:flex items-center text-sm font-semibold text-slate-900 hover:underline">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/store/${domain}/product/${product.id}`} className="group flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 mb-4 border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                
                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-0 right-0 px-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Button className="w-full bg-white/90 text-slate-900 hover:bg-white backdrop-blur shadow-sm">
                    Quick Add
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg leading-tight group-hover:underline">{product.name}</h3>
                  <p className="text-slate-500 text-sm mt-1">{product.category}</p>
                </div>
                <p className="font-medium text-slate-900">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Button variant="outline" className="w-full h-12">View all products</Button>
        </div>
      </section>

      {/* Brand Value Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Sustainable. Ethical. Beautiful.
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            We believe that good design shouldn't come at the cost of the environment. 
            All our products are sourced responsibly and crafted to last a lifetime.
          </p>
          <Button variant="outline" className="rounded-full px-8 h-12">
            Read Our Story
          </Button>
        </div>
      </section>
    </div>
  );
}