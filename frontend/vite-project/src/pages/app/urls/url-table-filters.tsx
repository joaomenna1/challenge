import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export function UrlTableFilter() {
    return (
        <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="Id da Url" className="h-8 w-auto"/>
            <Input placeholder="url name" className="h-8 w-[320px]"/>
            <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos Status</SelectItem>
          <SelectItem value="sucess">sucess</SelectItem>
          <SelectItem value="Bad Request">Bad Request</SelectItem>
          <SelectItem value="Unauthorized">Unauthorized</SelectItem>
          <SelectItem value="Not Found"> Not Found</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" variant="outline">
        <Search className="mr-2 h-4 w-4" />
        Remover Filtros
      </Button>
        </form>
    )
}