import React from "react";
import { metricCards } from "./metricCards";
import { MetricCard } from "@/components/global/micro/metricCard/MetricCard";
import PageContentWrapper from "@/components/global/layout/PageContentWrapper";
import EnrollmentChart from "@/app/_components/enrollment-chart/EnrollmentChart";
import { AttendanceChart } from "@/app/_components/attendance-chart/AttendanceChart";
import UpcomingEventsChart from "@/app/_components/upcoming-events-chart/UpcomingEventsChart";
import ExternalProviderChart from "@/app/_components/external-provider-chart/ExternalProviderChart";
import UpcomingActivitiesChart from "@/app/_components/upcoming-activities-chart/UpcomingActivitiesChart";

type Props = {};

const page = (props: Props) => {
  return (
    <PageContentWrapper className="flex flex-col gap-5">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {metricCards.map((card, index) => (
            <MetricCard key={index} {...card} />
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AttendanceChart />
          <EnrollmentChart />
        </div>
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
          <ExternalProviderChart />
          <UpcomingEventsChart />
          <UpcomingActivitiesChart />
        </div>
      </div>
    </PageContentWrapper>
  );
};

export default page;
