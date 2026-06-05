import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl leading-none">
                C
              </span>
            </div>
            <span className="font-bold text-xl inline-block">CommerceHub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link
              href="#features"
              className="hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#themes"
              className="hover:text-foreground transition-colors"
            >
              Themes
            </Link>
            <Link
              href="#pricing"
              className="hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <div className="relative group">
              <Link
                href="/resources"
                className="hover:text-foreground transition-colors py-2 flex items-center gap-1"
              >
                Resources
                <svg className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block w-[480px]">
                <div className="bg-white dark:bg-zinc-950 rounded-2xl shadow-xl border border-slate-200/50 dark:border-zinc-800/50 p-4 grid grid-cols-2 gap-2 transform origin-top transition-all animate-in fade-in zoom-in-95 duration-200">
                  <Link href="/resources/docs" className="flex flex-col p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">Documentation</span>
                    <span className="text-xs text-slate-500">Everything you need to build</span>
                  </Link>
                  <Link href="/resources/help" className="flex flex-col p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">Help Center</span>
                    <span className="text-xs text-slate-500">Get answers to your questions</span>
                  </Link>
                  <Link href="/resources/guides" className="flex flex-col p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">Guides</span>
                    <span className="text-xs text-slate-500">In-depth commerce tutorials</span>
                  </Link>
                  <Link href="/resources/blog" className="flex flex-col p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">Blog</span>
                    <span className="text-xs text-slate-500">Latest news and updates</span>
                  </Link>
                  <Link href="/resources/case-studies" className="flex flex-col p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">Case Studies</span>
                    <span className="text-xs text-slate-500">Read customer success stories</span>
                  </Link>
                  <Link href="/resources/community" className="flex flex-col p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">Community</span>
                    <span className="text-xs text-slate-500">Connect with other founders</span>
                  </Link>
                  <div className="col-span-2 border-t border-slate-100 dark:border-zinc-800 my-1"></div>
                  <Link href="/resources/changelog" className="flex items-center gap-2 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Changelog</span>
                  </Link>
                  <Link href="/resources/status" className="flex items-center gap-2 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">System Status</span>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Start Free Trial</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
