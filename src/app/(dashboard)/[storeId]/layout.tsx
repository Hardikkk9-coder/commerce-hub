import Link from "next/link";
import { LayoutDashboard, ShoppingBag, Users, Settings, Package, Tags, Palette, Globe, Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function DashboardLayout({ children, params }: { children: React.ReactNode, params: Promise<{ storeId: string }> }) {
  const { storeId } = await params;

  const navItems = [
    { name: "Overview", href: `/${storeId}`, icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: "Orders", href: `/${storeId}/orders`, icon: <ShoppingBag className="h-5 w-5" /> },
    { name: "Products", href: `/${storeId}/products`, icon: <Package className="h-5 w-5" /> },
    { name: "Customers", href: `/${storeId}/customers`, icon: <Users className="h-5 w-5" /> },
    { name: "Discounts", href: `/${storeId}/discounts`, icon: <Tags className="h-5 w-5" /> },
    { name: "Themes", href: `/${storeId}/themes`, icon: <Palette className="h-5 w-5" /> },
    { name: "Storefront", href: `/store/${storeId}`, icon: <Globe className="h-5 w-5" /> },
    { name: "Settings", href: `/${storeId}/settings`, icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 flex-shrink-0 flex flex-col h-full hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-zinc-800 shrink-0">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center mr-3">
            <span className="text-primary-foreground font-bold leading-none">C</span>
          </div>
          <span className="font-semibold text-lg tracking-tight truncate text-slate-900 dark:text-white">CommerceHub</span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 py-6 space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Menu
          </div>
          {navItems.map((item, i) => (
            <Link 
              key={i} 
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-zinc-800/50 dark:hover:text-white transition-colors font-medium"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="p-4 border-t border-slate-200 dark:border-zinc-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700"></div>
            <div className="flex-1 truncate">
              <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Merchant</p>
              <p className="text-xs text-slate-500 truncate">Store Owner</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shrink-0">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold text-slate-900 dark:text-white truncate">Store Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative text-slate-500">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-zinc-900"></span>
            </Button>
            <Button className="hidden sm:flex">New Product</Button>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}