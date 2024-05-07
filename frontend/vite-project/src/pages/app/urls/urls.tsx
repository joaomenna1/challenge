import { Helmet } from "react-helmet-async";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UrlTableRow } from "./url-table-row";
import { UrlTableFilter } from "./url-table-filters";
import { Pagination } from "@/components/pagination";
import { useQuery } from "@tanstack/react-query";
import { getUrls } from "@/api/get-urls";
import { useSearchParams } from "react-router-dom";
import { z } from 'zod'

export function Urls() {
    const [searchParams, setSearchParams] = useSearchParams()

    const pageIndex = z.coerce
    .number()
    .transform((page) => page)
    .parse(searchParams.get('page') ?? '1')

    console.log("aqui o erro",pageIndex)
    
    const { data: result } = useQuery({
        queryKey: ['urls', pageIndex],
        queryFn: () => getUrls({ pageIndex }),
    })

    function handlePaginate(pageIndex: number) {
        setSearchParams((state) => {
            state.set('page', (pageIndex).toString())

            return state
        })
    }

    return(
        <>
            <Helmet title="urls list"/>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tighter">List urls</h1>
            
            <div className="space-y-2.5">
                <UrlTableFilter/>

                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[64px]"></TableHead>
                                <TableHead className="w-[140px]">Identificador</TableHead>
                                <TableHead className="w-[180px]">Data</TableHead>
                                <TableHead className="w-[140px]">Status</TableHead>
                                <TableHead>Url</TableHead>
                                <TableHead className="w-[180px]">Total de Clicks</TableHead>
                                <TableHead className="w-[64px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            { result && result.list_urls.map(url => {
                                return <UrlTableRow key={url.id} list_urls={url} />
                            }) }
                        </TableBody>
                    </Table>
                    </div>

                    {result && (
                        <Pagination 
                            onPageChange={handlePaginate}
                            pageIndex={result.meta.pageIndex}
                            totalCount={result.meta.totalCount}
                            perPage={result.meta.perPage}
                       />
                    )}
                </div>
            </div>
        </>
    )
}