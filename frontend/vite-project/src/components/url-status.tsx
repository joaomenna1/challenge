type StatusUrl =
    | 'Success'
    | 'Bad_Request'
    | 'off'
    | 'Not_Found'


interface StatusUrlProps {
    status: StatusUrl
}

const urlStatusMap: Record<StatusUrl, string> = {
    Success: 'ON',
    Bad_Request: 'Bad Request',
    off: 'off',
    Not_Found: 'Not Found'
}

export function UrlStatus({ status }: StatusUrlProps) {
    return (
        <div className="flex items-center gap-2">
            {
                status === 'Success' && (
                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                )
            }
             {
                status === 'Bad_Request' && (
                    <span className="h-2 w-2 rounded-full bg-rose-500-400"/>
                )
            }
             {
                status === 'off' && (
                    <span className="h-2 w-2 rounded-full bg-emerald-500-400"/>
                )
            }
             {
                status === 'Not_Found' && (
                    <span className="h-2 w-2 rounded-full bg-amber-500-400"/>
                )
            }
            <span className="font-medium text-muted-foreground">
                {urlStatusMap[status]}
            </span>
        </div>
    )
}