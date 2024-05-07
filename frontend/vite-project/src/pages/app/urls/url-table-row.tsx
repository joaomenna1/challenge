import { Button } from "@/components/ui/button";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
//import { UrlStatus } from "@/components/url-status";
import { Search } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale'

export interface UrlTableRowProps {
    list_urls: {
        id: string
        urlName: string
        status:  | 'Success'| 'Bad_Request'| 'off'| 'Not_Found'
        createdAt: Date
    }
}

export function UrlTableRow({ list_urls }: UrlTableRowProps) {
    const formattedDate = formatDistanceToNow(new Date(list_urls.createdAt), {
        locale: ptBR,
        addSuffix: true
    });

    return (
        <TableRow>
        <TableCell>
            <Button variant="outline" size="xs">
                <Search className="h-3 w-3"/>
                <span className="sr-only">Detalhes</span>
            </Button>
        </TableCell>
        <TableCell className="font-mono text-xs font-medium">{list_urls.id}</TableCell>
        <TableCell className="text-muted-foreground" >{formattedDate}</TableCell>
        <TableCell>OFF</TableCell>
        <TableCell className="font-medium">{list_urls.urlName}</TableCell>
        <TableCell>100</TableCell>
        <TableHead>
            <Button variant="ghost" size="xs">Deletar</Button>
        </TableHead>
    </TableRow>
    )
}