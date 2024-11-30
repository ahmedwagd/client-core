"use client";

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";

type Appointment = {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  status: string;
};

const columns: ColumnDef<Appointment>[] = [
  {
    accessorKey: "patientName",
    header: "Patient",
  },
  {
    accessorKey: "doctorName",
    header: "Doctor",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

const data: Appointment[] = [
  {
    id: "1",
    patientName: "Emma Thompson",
    doctorName: "Dr. Alice Johnson",
    date: "2023-06-15",
    time: "10:00 AM",
    status: "Scheduled",
  },
  {
    id: "2",
    patientName: "Michael Brown",
    doctorName: "Dr. Bob Smith",
    date: "2023-06-16",
    time: "2:30 PM",
    status: "Completed",
  },
  {
    id: "3",
    patientName: "Sophia Lee",
    doctorName: "Dr. Carol Williams",
    date: "2023-06-17",
    time: "11:15 AM",
    status: "Cancelled",
  },
];

export default function AppointmentsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-5 text-2xl font-bold">Appointments</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
