import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Everything you need to start selling online.",
      price: "$29",
      features: [
        "Up to 1,000 products",
        "Basic reporting",
        "2 staff accounts",
        "Standard support",
        "Custom domain",
      ],
    },
    {
      name: "Growth",
      description: "Advanced features for scaling businesses.",
      price: "$79",
      popular: true,
      features: [
        "Unlimited products",
        "Advanced reporting",
        "5 staff accounts",
        "Priority support",
        "Custom domain",
        "Abandoned cart recovery",
        "Advanced discounts",
      ],
    },
    {
      name: "Enterprise",
      description: "Custom solutions for high-volume merchants.",
      price: "$299",
      features: [
        "Everything in Growth",
        "Custom reporting",
        "Unlimited staff accounts",
        "24/7 dedicated support",
        "Multi-store management",
        "B2B features",
        "API access",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-black">
      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            No hidden fees. No surprise charges. Choose the plan that best fits
            your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-8 rounded-3xl border ${plan.popular ? "border-primary shadow-premium bg-white dark:bg-zinc-900" : "border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50"}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 h-10">
                  {plan.description}
                </p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-slate-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-slate-500 dark:text-slate-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "default" : "outline"}
                className={`w-full h-12 rounded-xl text-lg ${plan.popular ? "shadow-lg" : ""}`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
