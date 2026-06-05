import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

export default async function ProductsPage({ params }: { params: Promise<{ storeId: string }> }) {
  // Mock data for products
  const products = [
    { id: "1", name: "Premium Wireless Headphones", status: "Active", price: "$299.99", inventory: 45, category: "Electronics" },
    { id: "2", name: "Ergonomic Office Chair", status: "Active", price: "$199.50", inventory: 12, category: "Furniture" },
    { id: "3", name: "Mechanical Keyboard", status: "Draft", price: "$149.00", inventory: 0, category: "Electronics" },
    { id: "4", name: "Smart Watch Series 8", status: "Active", price: "$399.00", inventory: 104, category: "Electronics" },
    { id: "5", name: "Leather Wallet", status: "Archived", price: "$49.99", inventory: 0, category: "Accessories" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Products</h2>
          <p className="text-muted-foreground mt-2">Manage your products, inventory, and pricing.</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Product
        </Button>
      </div>

      <div className="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-zinc-900 shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-slate-200 dark:border-slate-800 hover:bg-transparent">
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Inventory</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="border-b border-slate-200 dark:border-slate-800">
                <TableCell>
                  <div className="w-12 h-12 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs text-slate-400">
                    Img
                  </div>
                </TableCell>
                <TableCell className="font-medium text-slate-900 dark:text-white">{product.name}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    product.status === 'Active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' :
                    product.status === 'Draft' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' :
                    'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400'
                  }`}>
                    {product.status}
                  </span>
                </TableCell>
                <TableCell>{product.inventory} in stock</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="text-right font-medium">{product.price}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    {/* @ts-expect-error asChild is valid but TS complains */}
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit Product</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
