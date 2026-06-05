import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Settings } from "lucide-react";

export default function SetupSuccessPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-black min-h-screen relative">
      
      <div className="w-full max-w-md bg-white dark:bg-zinc-950 p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-200/60 dark:border-zinc-800/60 text-center relative overflow-hidden">
        
        {/* Confetti/Decoration Background */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent"></div>

        <div className="relative">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20 transform -rotate-3">
              <Sparkles className="w-10 h-10" />
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Your Store Is Ready!</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base mb-10 leading-relaxed max-w-sm mx-auto">
            Acme Co. has been successfully created. You can now start adding products and customizing your storefront.
          </p>

          <div className="space-y-3">
            <Link href="/store-id-placeholder">
              <Button className="w-full h-12 text-base shadow-sm group">
                Go To Dashboard
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/store-id-placeholder/settings">
              <Button variant="outline" className="w-full h-12">
                <Settings className="w-4 h-4 mr-2" /> Complete Setup
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
