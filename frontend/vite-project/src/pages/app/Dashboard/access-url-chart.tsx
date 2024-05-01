import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    ResponsiveContainer, 
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    Tooltip
} from 'recharts'

const data = [
    { date: '18/05', access: 1500 },
    { date: '19/05', access: 300 },
    { date: '20/05', access: 200 },
    { date: '21/05', access: 2000 },
    { date: '22/05', access: 2500 },
    { date: '23/05', access: 800 },
    { date: '24/05', access: 5000 },
]

export function AccessUrlChart() {
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle>Acessos Url no periodo</CardTitle>
                    <CardDescription>Acessos diário no período</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} style={{ fontSize: 12 }}>
                        <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
                        <YAxis stroke="#888" axisLine={false} tickLine={false} />
                        <CartesianGrid vertical={false} className="stroke-muted"/>
                        <Line type="linear" strokeWidth={2} dataKey="access"/>
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}