import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight, Copy } from "lucide-react";

export default function DocumentationPage() {
  const sidebarNav = [
    { section: "Getting Started", items: ["Introduction", "Quick Start", "Authentication", "Environments"] },
    { section: "Core Resources", items: ["Products", "Orders", "Customers", "Inventory", "Payments"] },
    { section: "Storefront", items: ["Themes", "Domains", "Checkout", "Cart"] },
    { section: "Advanced", items: ["Webhooks", "GraphQL API", "Rate Limits", "Errors"] }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      
      {/* Search Header */}
      <div className="border-b border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-950/50 sticky top-16 z-40 backdrop-blur-md">
        <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <span>Resources</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 dark:text-white">Documentation</span>
          </div>
          <div className="relative w-64 md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search docs (Press '/')" 
              className="h-9 pl-9 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-12 py-10">
        
        {/* Left Sidebar */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-40 max-h-[calc(100vh-10rem)] overflow-y-auto pr-6 no-scrollbar">
            {sidebarNav.map((group, i) => (
              <div key={i} className="mb-8">
                <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-sm tracking-wide">{group.section}</h4>
                <ul className="space-y-2.5">
                  {group.items.map((item, j) => (
                    <li key={j}>
                      <a href="#" className={`text-sm hover:text-primary transition-colors ${i === 0 && j === 0 ? 'text-primary font-medium' : 'text-slate-500 dark:text-slate-400'}`}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-3xl">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Introduction to CommerceHub</h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
              Welcome to the CommerceHub developer documentation. Learn how to build custom storefronts, manage products, and process payments using our robust APIs.
            </p>

            <h2 className="text-2xl font-bold tracking-tight mt-12 mb-4">Base URL</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">All API requests should be made to the following base URL. All requests must be sent over HTTPS.</p>
            
            <div className="relative group mb-8">
              <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="outline" size="icon" className="h-8 w-8 bg-white/10 hover:bg-white/20 border-white/10 text-white">
                  <Copy className="w-3.5 h-3.5" />
                </Button>
              </div>
              <pre className="bg-slate-900 dark:bg-zinc-900 text-slate-50 p-4 rounded-xl overflow-x-auto text-sm border border-slate-800">
                <code>https://api.commercehub.com/v1</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold tracking-tight mt-12 mb-4">Authentication</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Authenticate your API requests by including your secret API key in the request header. You can manage your API keys in the dashboard.
            </p>

            <div className="relative group mb-8">
              <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="outline" size="icon" className="h-8 w-8 bg-white/10 hover:bg-white/20 border-white/10 text-white">
                  <Copy className="w-3.5 h-3.5" />
                </Button>
              </div>
              <pre className="bg-slate-900 dark:bg-zinc-900 text-slate-50 p-4 rounded-xl overflow-x-auto text-sm border border-slate-800">
                <code>{`Authorization: Bearer sk_test_1234567890abcdef`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold tracking-tight mt-12 mb-4">Making your first request</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Here's a simple example of how to fetch your store details using cURL.
            </p>
            
            <div className="relative group mb-12">
              <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="outline" size="icon" className="h-8 w-8 bg-white/10 hover:bg-white/20 border-white/10 text-white">
                  <Copy className="w-3.5 h-3.5" />
                </Button>
              </div>
              <pre className="bg-slate-900 dark:bg-zinc-900 text-slate-50 p-4 rounded-xl overflow-x-auto text-sm border border-slate-800">
                <code>{`curl https://api.commercehub.com/v1/store \\
  -H "Authorization: Bearer sk_test_1234567890abcdef"`}</code>
              </pre>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-zinc-800">
              <div></div> {/* Empty left to push next to right */}
              <Link href="/resources/docs/quick-start" className="group flex flex-col items-end hover:bg-slate-50 dark:hover:bg-zinc-900 p-4 rounded-xl transition-colors border border-transparent hover:border-slate-200 dark:hover:border-zinc-800">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Next</span>
                <span className="text-primary font-bold group-hover:underline flex items-center">
                  Quick Start <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>

          </div>
        </main>

        {/* Right TOC */}
        <aside className="hidden xl:block w-48 shrink-0">
          <div className="sticky top-40">
            <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-sm tracking-wide">On this page</h4>
            <ul className="space-y-2.5 border-l border-slate-200 dark:border-zinc-800 pl-4">
              <li><a href="#" className="text-sm text-primary font-medium">Base URL</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Authentication</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">First request</a></li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}
