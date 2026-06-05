"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { BarChart3, TrendingUp } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex-1 flex flex-col md:flex-row w-full min-h-screen">
      
      {/* Left Column - Marketing/Brand */}
      <div className="hidden md:flex md:w-1/2 lg:w-[55%] bg-slate-900 text-white flex-col relative overflow-hidden p-10 lg:p-16 justify-between">
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl opacity-50 pointer-events-none"></div>

        <div className="relative z-10 flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <span className="text-white text-xs leading-none">C</span>
          </div>
          CommerceHub
        </div>

        <div className="relative z-10 max-w-xl my-12">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Welcome Back
          </h1>
          <p className="text-slate-300 text-lg lg:text-xl leading-relaxed mb-12">
            Sign in to your dashboard to manage your products, track orders, and grow your online business.
          </p>

          {/* Testimonial & Mini Dashboard */}
          <div className="grid gap-6">
            
            {/* Testimonial Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-amber-400 fill-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-slate-200 text-sm leading-relaxed mb-4 italic">
                "CommerceHub completely transformed how we sell online. We migrated from Shopify and saw our conversion rates jump by 24% in the first month alone."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Sarah J." className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">David K.</p>
                  <p className="text-xs text-slate-400">Founder, Minimalist Goods</p>
                </div>
              </div>
            </div>

            {/* Mini Analytics Preview */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 font-medium mb-1 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  Weekly Revenue
                </p>
                <p className="text-2xl font-bold text-white">$24,592.00</p>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-1 rounded-full mb-1">
                  <TrendingUp className="w-3 h-3" /> +18.2%
                </div>
                <p className="text-xs text-slate-400">vs last week</p>
              </div>
            </div>

          </div>
        </div>

        <div className="relative z-10 text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} CommerceHub Inc.
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="flex-1 flex flex-col justify-center p-6 sm:p-12 lg:p-24 bg-white dark:bg-black relative">
        
        {/* Mobile Header */}
        <div className="md:hidden flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 dark:text-white mb-12">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <span className="text-white text-xs leading-none">C</span>
          </div>
          CommerceHub
        </div>

        <div className="w-full max-w-md mx-auto">
          
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">Sign in to your account</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Enter your email and password below to access your dashboard.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@company.com" 
                required 
                className="h-11"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                required 
                className="h-11"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Remember me for 30 days
              </Label>
            </div>

            <Button type="submit" className="w-full h-11 text-base shadow-sm">
              Sign In
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white dark:bg-black px-4 text-slate-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-11 bg-white dark:bg-black">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </Button>
            <Button variant="outline" className="h-11 bg-white dark:bg-black">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </Button>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            Don't have an account?{" "}
            <Link href="/signup" className="font-semibold text-primary hover:underline">
              Create Account
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
