import {
  Box,
  CreditCard,
  LayoutDashboard,
  LineChart,
  Package,
  Paintbrush,
  Settings,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <LayoutDashboard className="h-6 w-6 text-primary" />,
      title: "Store Builder",
      description:
        "Drag-and-drop your way to a beautiful storefront. No coding required.",
    },
    {
      icon: <Package className="h-6 w-6 text-primary" />,
      title: "Product Management",
      description:
        "Manage physical and digital products, variants, categories, and collections easily.",
    },
    {
      icon: <Box className="h-6 w-6 text-primary" />,
      title: "Inventory Tracking",
      description:
        "Track stock levels, get low stock alerts, and manage multiple warehouses.",
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
      title: "Order Processing",
      description:
        "Streamline your fulfillment with automated workflows and shipping labels.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Customer Management",
      description:
        "Build relationships with detailed customer profiles and order histories.",
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description:
        "Make data-driven decisions with real-time sales and traffic reports.",
    },
    {
      icon: <Paintbrush className="h-6 w-6 text-primary" />,
      title: "Theme Customizer",
      description:
        "Customize every pixel of your store with our powerful visual editor.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Global Payments",
      description:
        "Accept credit cards, PayPal, and more with zero hidden fees.",
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Shipping & Taxes",
      description:
        "Automate tax calculations and offer flexible shipping rates worldwide.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-black">
      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Everything you need,{" "}
            <span className="text-muted-foreground">nothing you don't</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            CommerceHub provides a comprehensive suite of tools to manage every
            aspect of your online business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-premium transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
