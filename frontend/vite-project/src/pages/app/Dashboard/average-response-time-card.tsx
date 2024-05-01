import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hourglass, Network } from "lucide-react";

export function AvarageResponseTimeCard() {
    return (
        <Card>
            <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">  
                <CardTitle className="text-base font-semibold">
                Tempos médio de resposta
                </CardTitle>
                <Hourglass className="h-4 w-4 text-muted-foreground"/>
            </CardHeader> 
            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tight">
                    220 ms
                </span>
                <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 dark:text-emerald-400">+9%</span>{' '}em relação ao mês passado
                </p>
            </CardContent>
        </Card>
    )
}