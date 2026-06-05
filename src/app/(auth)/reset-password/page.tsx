"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ResetPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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

        {!isSubmitted ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">Set new password</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Your new password must be different to previously used passwords.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" required className="h-11" />
                <p className="text-[11px] text-slate-500 mt-1">Must be at least 8 characters.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input id="confirmPassword" type="password" placeholder="••••••••" required className="h-11" />
              </div>

              <Button type="submit" className="w-full h-11 text-base shadow-sm">
                Reset Password
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">Password reset</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
              Your password has been successfully reset. Click below to log in magically.
            </p>
            <Link href="/login">
              <Button className="w-full h-11 text-base shadow-sm">
                Continue to login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
