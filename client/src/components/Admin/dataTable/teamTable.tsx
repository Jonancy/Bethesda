import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
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
import * as Dialog from "@radix-ui/react-dialog";

// import AllGenreDetails from "@/Services/Genre/getAllGenreServices";
// import { genreDetails } from "@/types";
import { Link } from "react-router-dom";
import GetAllMemberAdmin from "@/Services/teamMember/getAllTeamMember.services";
import { TeamMembers } from "@/types";
import { RxCrossCircled } from "react-icons/rx";
import { deleteMember } from "@/Services/teamMember/endPoints.teamMember";
import { toast } from "react-toastify";

// Modify the columns accordingly

const handleDelete = async (memberId: string) => {
  try {
    const res = await deleteMember(memberId);
    console.log(memberId);
    toast.success("The member has been deleted successfully.");
    console.log(res.data);
  } catch (error) {
    console.error("Error deleting member:", error);
    // Handle the error, e.g., show an error message
  }
};

export const columns: ColumnDef<TeamMembers>[] = [
  {
    accessorKey: "name",
    header: "Name",
    // You can render coverImage here if you want
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "profile",
    header: "profile",
    cell: ({ row }) => (
      <img
        className="aspect-square h-14 w-10 rounded-sm object-cover "
        src={row.getValue("profile")}
      />
    ),
  },
  {
    accessorKey: "designation",
    header: "Designation",
  },
  {
    accessorKey: "post",
    header: "Post",
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const member = row.original;
      const [isDialogOpen, setIsDialogOpen] = React.useState(false);

      const openDialog = () => setIsDialogOpen(true);
      const closeDialog = () => setIsDialogOpen(false);

      const handleDeleteClick = () => {
        console.log(member);

        handleDelete(member.id);
        closeDialog();
      };
      return (
        <div className="flex gap-2">
          <Link to={`/admin/member/edit-member/${member.id}`}>
            <Button variant={"outline"}>Edit</Button>
          </Link>
          <Button variant={"outline"} onClick={openDialog}>
            Delete
          </Button>

          <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/30" />
              <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 shadow-lg">
                <Dialog.Title className="text-xl font-medium">
                  Are you sure?
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-gray-500">
                  This will permanently delete the member. This action cannot be
                  undone.
                </Dialog.Description>
                <div className="mt-4 flex justify-end space-x-2">
                  <Dialog.Close asChild>
                    <Button variant="ghost" onClick={closeDialog}>
                      Cancel
                    </Button>
                  </Dialog.Close>
                  <Button variant="destructive" onClick={handleDeleteClick}>
                    Delete
                  </Button>
                </div>
                <Dialog.Close asChild>
                  <button
                    className="absolute top-4 right-4 inline-flex items-center justify-center rounded-full p-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    aria-label="Close"
                  >
                    <RxCrossCircled />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      );
    },
  },
];

export function MemberDetailsTable() {
  const { data, loading, error } = GetAllMemberAdmin();
  console.log(data);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;
  return (
    <div className="w-full">
      {/* Pagination */}
      <div className="flex items-center justify-between space-x-2">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter genres..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
