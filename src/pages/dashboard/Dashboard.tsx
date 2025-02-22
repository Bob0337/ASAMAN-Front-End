"use client";

import { Navbar } from "@/components/navbar/Navbar";

import { Sidebar } from "@/components/sidebar/Sidebar";
import React, { useState } from "react";
import { MetricCard } from "@/components/matricCard/MatricCard";
import { AttendanceChart } from "@/components/attendance-chart/AttendanceChart";
import { StaffList } from "@/components/staff-list/StaffList";
import { DocumentsList } from "@/components/document-list/DocumentList";
import { PaymentChart } from "@/components/payment-chart/PaymentChart";
import { UpcomingActivities } from "@/components/upcoming-activities/UpcomingActivities";
import { ActivityEnrollment } from "@/components/activity-enrollment/ActivityEnrollment";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-y-auto">
          <Navbar />
          <div className="flex-1 space-y-4 bg-[#F5F5FA] p-4 pt-6 md:p-8">
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
          {/* <main className="flex-1 overflow-y-auto relative z-[1]">
              {children}
            </main> */}
        </div>
      </div>
    </>
  );
}
