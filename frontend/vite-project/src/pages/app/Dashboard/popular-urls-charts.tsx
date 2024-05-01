import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";
import {
    ResponsiveContainer,
    Pie,
    PieChart
} from 'recharts';

const data = [
    { name: 'loja1', access: 1500 },
    { name: 'loja2', access: 300 },
    { name: 'loja3', access: 2800 },
    { name: 'loja4', access: 200 },
    { name: 'loja5', access: 250 },
]

export function PopularUrlsChart() {
    return (
        <Card className="col-span-3">
            <CardHeader className="pb-8">
                <div className="flex items-center justify-between">
                    <CardTitle>Urls populares</CardTitle>
                    <BarChart className="w-4 h-4 text-muted-foreground"/>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <PieChart style={{ fontSize: 12 }}>
                        <Pie 
                            data={data} 
                            dataKey="access" 
                            nameKey="name" 
                            cx="50%"
                            cy="50%"
                            outerRadius={86}
                            innerRadius={64}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}