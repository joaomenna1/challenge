import { Helmet } from "react-helmet-async";
import { MonthRegisterUrlCard } from "./month-register-url-card"
import { AvarageResponseTimeCard } from "./average-response-time-card";
import { StatusUrlUptimeCard } from "./status-url-uptime-card";
import { MaxResponseTimeCard } from "./max-response-time-card";
import { AccessUrlChart } from "./access-url-chart";
import { PopularUrlsChart } from "./popular-urls-charts";

export function Dashboard() {
    return (
        <>
            <Helmet title="Dashboard"/>
            <div className="flex flex-col gap-4">
                <div className="text-3xl font-bold tracking-tight">Dashboard</div>

                <div className="grid grid-cols-4 gap-4">
                    <MonthRegisterUrlCard />
                    <AvarageResponseTimeCard/>
                    <MaxResponseTimeCard/>
                    <StatusUrlUptimeCard/>
                </div>

                <div className="grid grid-cols-9 gap-4">
                    <AccessUrlChart/>
                    <PopularUrlsChart/>
                </div>
            </div>
        </>
    )
}