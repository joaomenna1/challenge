import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, TrendingUp } from "lucide-react";

export function StatusUrlUptimeCard() {
    return (
        <Card>
            <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">  
                <CardTitle className="text-base font-semibold">
                Status de URL Uptime
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground"/>
            </CardHeader> 
            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tight">
                    99.5%
                </span>
                <p className="text-xs text-muted-foreground">
                <span className="text-rose-500 dark:text-rose-400">0.5%</span>{' '}das urls nao estava disponíveis
                </p>
            </CardContent>
        </Card>
    )
}