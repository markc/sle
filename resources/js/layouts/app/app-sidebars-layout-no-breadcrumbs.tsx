import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { Sidebar, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { SidebarHeader } from "@/components/ui/sidebar-header"
import { Link } from '@inertiajs/react';
import AppLogo from '@/components/app-logo';

export default function AppSidebarsLayoutNoBreadcrumbs({ children }: { children: React.ReactNode; breadcrumbs?: BreadcrumbItem[] }) {
    return (
        <AppShell variant="sidebars">
            <div className="fixed top-0 left-0 right-0 flex justify-between w-full bg-sidebar z-999 border-b border-sidebar-border/50">
                <AppSidebarHeader side="left" />
                <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
                <AppSidebarHeader side="right" />
            </div>
            <div className="flex flex-1 w-full mt-12">
                <AppSidebar side="left" />
                    <AppContent variant="sidebars">
                        {children}
                    </AppContent>
                <AppSidebar side="right" />
            </div>
        </AppShell>
    );
}
