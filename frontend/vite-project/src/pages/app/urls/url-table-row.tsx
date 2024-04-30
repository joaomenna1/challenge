import { Button } from "@/components/ui/button";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";

//export interface UrlTableRowProps {}

export function UrlTableRow() {
    return (
        <TableRow>
        <TableCell>
            <Button variant="outline" size="xs">
                <Search className="h-3 w-3"/>
                <span className="sr-only">Detalhes</span>
            </Button>
        </TableCell>
        <TableCell className="font-mono text-xs font-medium">f2112ds2132134s</TableCell>
        <TableCell className="text-muted-foreground">Há 15min</TableCell>
        <TableCell>
            <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400"/>
                <span className="font-medium text-muted-foreground">Online</span>
            </div>
        </TableCell>
        <TableCell className="font-medium">www.google.com.br</TableCell>
        <TableCell>100</TableCell>
        <TableHead>
            <Button variant="ghost" size="xs">Deletar</Button>
        </TableHead>
    </TableRow>
    )
}