"use client";

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";

type Patient = {
  id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
};

const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
];

const data: Patient[] = [
  {
    id: "1",
    name: "Emma Thompson",
    age: 35,
    gender: "Female",
    phone: "123-456-7890",
  },
  {
    id: "2",
    name: "Michael Brown",
    age: 42,
    gender: "Male",
    phone: "234-567-8901",
  },
  {
    id: "3",
    name: "Sophia Lee",
    age: 28,
    gender: "Female",
    phone: "345-678-9012",
  },
];

export default function PatientsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-5 text-2xl font-bold">Patients</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
