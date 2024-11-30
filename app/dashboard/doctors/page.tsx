"use client";

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";

type Doctor = {
  id: string;
  name: string;
  specialty: string;
  phone: string;
};

const columns: ColumnDef<Doctor>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "specialty",
    header: "Specialty",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
];

const data: Doctor[] = [
  {
    id: "1",
    name: "Dr. Alice Johnson",
    specialty: "Cardiology",
    phone: "123-456-7890",
  },
  {
    id: "2",
    name: "Dr. Bob Smith",
    specialty: "Pediatrics",
    phone: "234-567-8901",
  },
  {
    id: "3",
    name: "Dr. Carol Williams",
    specialty: "Neurology",
    phone: "345-678-9012",
  },
];

export default function DoctorsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-5 text-2xl font-bold">Doctors</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
