import { Download, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

export default async function OrdersPage({ params }: { params: Promise<{ storeId: string }> }) {
  const orders = [
    { id: "#1024", date: "Today at 2:34 PM", customer: "Alice Johnson", total: "$124.00", paymentStatus: "Paid", fulfillmentStatus: "Unfulfilled", items: 3 },
    { id: "#1023", date: "Today at 11:15 AM", customer: "Bob Smith", total: "$45.50", paymentStatus: "Paid", fulfillmentStatus: "Fulfilled", items: 1 },
    { id: "#1022", date: "Yesterday", customer: "Charlie Brown", total: "$299.99", paymentStatus: "Pending", fulfillmentStatus: "Unfulfilled", items: 1 },
    { id: "#1021", date: "Yesterday", customer: "Diana Prince", total: "$89.00", paymentStatus: "Paid", fulfillmentStatus: "Fulfilled", items: 2 },
    { id: "#1020", date: "Oct 24, 2023", customer: "Evan Wright", total: "$12.99", paymentStatus: "Refunded", fulfillmentStatus: "Returned", items: 1 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Orders</h2>
          <p className="text-muted-foreground mt-2">Manage and fulfill your store orders.</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" /> Export
        </Button>
      </div>

      <div className="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-4 bg-slate-50/50 dark:bg-zinc-900/50">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input 
              type="search" 
              placeholder="Filter orders..." 
              className="pl-9 bg-white dark:bg-zinc-950 border-slate-200 dark:border-slate-800" 
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" /> Status
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="border-b border-slate-200 dark:border-slate-800 hover:bg-transparent">
              <TableHead>Order</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Fulfillment</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="border-b border-slate-200 dark:border-slate-800">
                <TableCell className="font-medium text-slate-900 dark:text-white">{order.id}</TableCell>
                <TableCell className="text-slate-500">{order.date}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                    order.paymentStatus === 'Paid' ? 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20' :
                    order.paymentStatus === 'Pending' ? 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/20' :
                    'bg-slate-50 text-slate-700 ring-1 ring-inset ring-slate-600/20 dark:bg-slate-500/10 dark:text-slate-400 dark:ring-slate-500/20'
                  }`}>
                    {order.paymentStatus}
                  </span>
                </TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    order.fulfillmentStatus === 'Fulfilled' ? 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300' :
                    'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                  }`}>
                    {order.fulfillmentStatus}
                  </span>
                </TableCell>
                <TableCell className="text-right font-medium">{order.total}</TableCell>
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
                      <DropdownMenuItem>View Order</DropdownMenuItem>
                      <DropdownMenuItem>Print Invoice</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Mark as fulfilled</DropdownMenuItem>
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
