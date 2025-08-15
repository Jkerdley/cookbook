"use client";

import { siteConfig } from "@/app/config/site.config";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
export const Logo = () => {
    return (
        <Image className="mr-2" src={"logo.svg"} alt={siteConfig.title} width={32} height={32} priority/>
    );
};

export function Header() {
    const pathname = usePathname()

    return (
        <Navbar isBordered isBlurred={false}>
            <NavbarBrand>
                <Link href="/" className="color-white">
                <Logo />
                <p className="font-bold color-white text-inherit">{siteConfig.projectName}</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">

               {siteConfig.navItems.map((item) => { 
                const isActive = pathname === item.href 
                   return <NavbarItem key={item.href}>
                        <Link className={`${isActive ? "text-blue-300" : "text-foreground"} hover:text-blue-300 transition-colors duration-300`} color="foreground" href={item.href}>
                            {item.label}
                        </Link>
                    </NavbarItem>
                })}
            
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Вход</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Регистрация
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
