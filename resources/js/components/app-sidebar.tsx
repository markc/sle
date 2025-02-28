import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Products',
        url: '/products',
        icon: Folder,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        url: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        url: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen,
    },
];

interface AppSidebarProps {
    side?: 'left' | 'right';
}

export function AppSidebar({ side = 'left' }: AppSidebarProps) {
    // Different content for left and right sidebars
    if (side === 'right') {
        return (
            <Sidebar collapsible="icon" variant="inset" side={side}>
                <SidebarContent>
                    <div className="p-4">
                        <h3 className="text-lg font-medium">Right Sidebar Content</h3>
                        <p className="mt-2 text-sm">This is the right sidebar content area.</p>
                    </div>
                </SidebarContent>

                <SidebarFooter>
                    <div className="p-4">
                        <p className="text-sm">Right sidebar footer</p>
                    </div>
                </SidebarFooter>
            </Sidebar>
        );
    }

    // Left sidebar (default)
    return (
        <Sidebar collapsible="icon" variant="inset" side={side}>
            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
