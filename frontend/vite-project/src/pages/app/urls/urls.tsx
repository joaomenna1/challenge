import { Helmet } from "react-helmet-async";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UrlTableRow } from "./url-table-row";
import { UrlTableFilter } from "./url-table-filters";

export function Urls() {
    return(
        <>
            <Helmet title="urls list"/>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tighter">List urls</h1>
            </div>
            <div className="space-y-2.5">
                <UrlTableFilter/>

                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[64px]"></TableHead>
                                <TableHead className="w-[140px]">Identificador</TableHead>
                                <TableHead className="w-[180px]">Criado há</TableHead>
                                <TableHead className="w-[140px]">Status</TableHead>
                                <TableHead>Url</TableHead>
                                <TableHead className="w-[180px]">Total de Clicks</TableHead>
                                <TableHead className="w-[64px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({length: 10}).map((_,i) => {
                                return (
                                    <UrlTableRow key={i}/>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}