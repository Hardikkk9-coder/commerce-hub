import fs from 'fs';
import path from 'path';

const dirs = [
  'src/app/(marketing)',
  'src/app/(auth)',
  'src/app/(auth)/login',
  'src/app/(auth)/signup',
  'src/app/(dashboard)',
  'src/app/(dashboard)/[storeId]',
  'src/app/(dashboard)/[storeId]/products',
  'src/app/(dashboard)/[storeId]/orders',
  'src/app/(dashboard)/[storeId]/customers',
  'src/app/(dashboard)/[storeId]/settings',
  'src/app/store/[domain]',
  'src/app/store/[domain]/product/[productId]',
  'src/app/store/[domain]/cart',
  'src/components/marketing',
  'src/components/dashboard',
  'src/components/storefront',
  'src/components/ui',
  'src/lib'
];

dirs.forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

const files = {
  'src/app/(marketing)/layout.tsx': `export default function MarketingLayout({ children }: { children: React.ReactNode }) { return <div className="min-h-screen bg-white text-slate-900">{children}</div>; }`,
  'src/app/(marketing)/page.tsx': `export default function HomePage() { return <main><h1>Marketing Home</h1></main>; }`,
  'src/app/(auth)/layout.tsx': `export default function AuthLayout({ children }: { children: React.ReactNode }) { return <div className="flex items-center justify-center min-h-screen bg-slate-50">{children}</div>; }`,
  'src/app/(auth)/login/page.tsx': `export default function LoginPage() { return <div>Login</div>; }`,
  'src/app/(auth)/signup/page.tsx': `export default function SignupPage() { return <div>Signup</div>; }`,
  'src/app/(dashboard)/layout.tsx': `export default function DashboardRootLayout({ children }: { children: React.ReactNode }) { return <div className="min-h-screen bg-slate-50">{children}</div>; }`,
  'src/app/(dashboard)/[storeId]/layout.tsx': `export default function DashboardLayout({ children, params }: { children: React.ReactNode, params: { storeId: string } }) { return <div className="flex h-screen"><aside className="w-64 bg-slate-900 text-white p-4">Sidebar</aside><main className="flex-1 p-8 overflow-auto">{children}</main></div>; }`,
  'src/app/(dashboard)/[storeId]/page.tsx': `export default function DashboardOverview({ params }: { params: { storeId: string } }) { return <div><h1>Overview for {params.storeId}</h1></div>; }`,
  'src/app/store/[domain]/layout.tsx': `export default function StorefrontLayout({ children, params }: { children: React.ReactNode, params: { domain: string } }) { return <div className="min-h-screen bg-white">{children}</div>; }`,
  'src/app/store/[domain]/page.tsx': `export default function StorefrontHome({ params }: { params: { domain: string } }) { return <main><h1>Welcome to {params.domain}</h1></main>; }`
};

for (const [filepath, content] of Object.entries(files)) {
  fs.writeFileSync(filepath, content);
}

console.log("Scaffolding complete.");
