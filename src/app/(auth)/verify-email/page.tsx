"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Inbox } from "lucide-react";

export default function VerifyEmailPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-black min-h-screen relative">
      <Link href="/login" className="absolute top-8 left-8 flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to login
      </Link>

      <div className="w-full max-w-md bg-white dark:bg-zinc-950 p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-200/60 dark:border-zinc-800/60">
        
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <span className="font-bold text-xl leading-none">C</span>
          </div>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Inbox className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">Verify your email</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
            We've sent a verification link to <br/><span className="font-medium text-slate-900 dark:text-white">name@company.com</span>
          </p>
          
          <div className="space-y-3">
            <Button className="w-full h-11 text-base shadow-sm">
              Open Email App
            </Button>
            <Button variant="outline" className="w-full h-11">
              Resend Email
            </Button>
          </div>
          
          <div className="mt-8">
            <Link href="/signup" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
              Wrong email address? Change it.
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
