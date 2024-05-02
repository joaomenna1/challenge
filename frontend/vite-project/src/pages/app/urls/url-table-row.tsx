import { Button } from "@/components/ui/button";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import { UrlStatus } from "@/components/url-status";
import { Search } from "lucide-react";
import { format } from 'date-fns';

export interface UrlTableRowProps {
    list_urls: {
        id: string
        urlName: string
        status:  | 'Success'| 'Bad_Request'| 'off'| 'Not_Found'
        createdAt: Date
        updateAt: Date
        authorId: string
    }
}

export function UrlTableRow({ list_urls }: UrlTableRowProps) {
    const formattedDate = format(new Date(list_urls.createdAt), 'dd/MM/yyyy HH:mm:ss');
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
        <TableCell>
            <UrlStatus  status={list_urls.status}/>
        </TableCell>
        <TableCell className="font-medium">{list_urls.urlName}</TableCell>
        <TableCell>100</TableCell>
        <TableHead>
            <Button variant="ghost" size="xs">Deletar</Button>
        </TableHead>
    </TableRow>
    )
}