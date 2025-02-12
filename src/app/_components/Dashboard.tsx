"use client";

import { Navbar } from "@/components/global/layout/navbar/Navbar";
import { Inter } from "next/font/google";

import { Sidebar } from "@/components/global/layout/sidebar/Sidebar";
import React, { useState } from "react";
import { MetricCard } from "@/app/_components/matricCard/MatricCard";
import { AttendanceChart } from "@/app/_components/attendance-chart/AttendanceChart";
import { StaffList } from "@/app/_components/staff-list/StaffList";
import { DocumentsList } from "@/app/_components/document-list/DocumentList";
import { PaymentChart } from "@/app/_components/payment-chart/PaymentChart";
import { UpcomingActivities } from "@/app/_components/upcoming-activities/UpcomingActivities";
import { ActivityEnrollment } from "@/app/_components/activity-enrollment/ActivityEnrollment";

export default function Dashboard() {

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Students"
          value="200"
          icon="assets/svgs/students.svg"
          link={{ text: "View users", href: "#" }}
        />
        <MetricCard
          title="Externals"
          value="10"
          icon="assets/svgs/externals.svg"
          link={{ text: "View users", href: "#" }}
        />
        <MetricCard
          title="Activities"
          value="98"
          icon="assets/svgs/participants.svg"
          link={{ text: "View activities", href: "#" }}
        />
        <MetricCard
          title="Pending Payemnts"
          value="¥5500"
          icon="assets/svgs/pending-payments.svg"
          link={{ text: "View payments", href: "#" }}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AttendanceChart />
        <StaffList />
        <DocumentsList />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <PaymentChart />
        <ActivityEnrollment />
        <UpcomingActivities />
      </div>
    </div>
  );
}
