import { Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

export default async function CustomersPage({
  params,
}: {
  params: Promise<{ storeId: string }>;
}) {
  const customers = [
    {
      id: "CUST-001",
      name: "Alice Johnson",
      email: "alice@example.com",
      location: "New York, USA",
      orders: 12,
      spent: "$1,240.00",
    },
    {
      id: "CUST-002",
      name: "Bob Smith",
      email: "bob.smith@example.com",
      location: "London, UK",
      orders: 3,
      spent: "$345.50",
    },
    {
      id: "CUST-003",
      name: "Charlie Brown",
      email: "charlie@example.com",
      location: "Sydney, AU",
      orders: 1,
      spent: "$299.99",
    },
    {
      id: "CUST-004",
      name: "Diana Prince",
      email: "diana@example.com",
      location: "Paris, FR",
      orders: 8,
      spent: "$890.00",
    },
    {
      id: "CUST-005",
      name: "Evan Wright",
      email: "evan@example.com",
      location: "Toronto, CA",
      orders: 2,
      spent: "$112.99",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Customers
          </h2>
          <p className="text-muted-foreground mt-2">
            Manage customer profiles and purchase history.
          </p>
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
              placeholder="Search customers..."
              className="pl-9 bg-white dark:bg-zinc-950 border-slate-200 dark:border-slate-800"
            />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="border-b border-slate-200 dark:border-slate-800 hover:bg-transparent">
              <TableHead>Customer Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Orders</TableHead>
              <TableHead className="text-right">Total Spent</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow
                key={customer.id}
                className="border-b border-slate-200 dark:border-slate-800"
              >
                <TableCell className="font-medium text-slate-900 dark:text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium text-xs">
                      {customer.name.charAt(0)}
                    </div>
                    {customer.name}
                  </div>
                </TableCell>
                <TableCell className="text-slate-500">
                  {customer.email}
                </TableCell>
                <TableCell>{customer.location}</TableCell>
                <TableCell className="text-right">{customer.orders}</TableCell>
                <TableCell className="text-right font-medium">
                  {customer.spent}
                </TableCell>
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
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
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
