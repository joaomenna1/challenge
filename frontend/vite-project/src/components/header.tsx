import { Separator } from "@radix-ui/react-separator";
import { Home, LocateFixed, Link2 } from "lucide-react";
import { NavLink } from "./nav-link";
import { ThemeToogle } from './themes/theme-toogle'
import { AccountMenu } from "./account-menu";
import { Dialog } from "./ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { RegisterUrlDialog } from "./register-url-dialog";

export interface HeaderProps {}

export function Header() {
    return (
      <Dialog>      
        <div className="border-b">
                <div className="flex h-16 items-center gap-6 px-6">
                    <LocateFixed className="h-6 w-6"/>
                    <Separator orientation="vertical" className="h-6"/>
                    <nav className="flex items-center space-x-4 lg:space-x-6">
                        <NavLink to="/">
                            <Home className="h-4 w-4"/>
                            Inicio
                        </NavLink>
                        <NavLink to="/urls">
                            <Link2 className="h-4 w-4"/>
                            urls
                        </NavLink>
                        <DialogTrigger>
                            Cadastrar Url
                        </DialogTrigger>
                    </nav>
                    <div className="ml-auto flex items-center gap-2">
                        <ThemeToogle/>
                        <AccountMenu/>
                    </div>
                </div>
        </div>

        <RegisterUrlDialog/>
    </Dialog>
    )
}