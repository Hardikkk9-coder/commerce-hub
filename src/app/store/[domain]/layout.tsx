import Link from "next/link";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function StorefrontLayout({ children, params }: { children: React.ReactNode, params: Promise<{ domain: string }> }) {
  const { domain } = await params;
  const storeName = domain.charAt(0).toUpperCase() + domain.slice(1);
  
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* Announcement Bar */}
      <div className="bg-slate-900 text-white text-xs font-medium text-center py-2 px-4">
        Free worldwide shipping on all orders over $150
      </div>

      {/* Storefront Header */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-lg border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Link href={`/store/${domain}`} className="font-bold text-xl tracking-tight">
              {storeName}
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#" className="hover:text-slate-500 transition-colors">New Arrivals</Link>
            <Link href="#" className="hover:text-slate-500 transition-colors">Men</Link>
            <Link href="#" className="hover:text-slate-500 transition-colors">Women</Link>
            <Link href="#" className="hover:text-slate-500 transition-colors">Accessories</Link>
          </nav>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-slate-900 text-[9px] font-bold text-white">
                3
              </span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* Storefront Footer */}
      <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href={`/store/${domain}`} className="font-bold text-xl tracking-tight mb-4 inline-block">
              {storeName}
            </Link>
            <p className="text-slate-500 max-w-sm text-sm">
              Premium quality products designed with minimal aesthetics and maximum utility in mind.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-slate-900">Shop</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="#">All Products</Link></li>
              <li><Link href="#">Lookbook</Link></li>
              <li><Link href="#">Collections</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-slate-900">Support</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Shipping & Returns</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {storeName}. Powered by CommerceHub.</p>
        </div>
      </footer>
    </div>
  );
}