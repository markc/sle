import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';

export default function AppSidebarsLayoutNoBreadcrumbs({ children }: { children: React.ReactNode; breadcrumbs?: BreadcrumbItem[] }) {
    return (
        <AppShell variant="sidebars">
            <div className="fixed flex justify-between w-full bg-tertiary z-10">
                <AppSidebarHeader side="left" />
                <AppSidebarHeader side="right" />
            </div>
            <div className="flex flex-1 w-full">
                <AppSidebar side="left" />
                <AppContent variant="sidebars">
                    {children}
                </AppContent>
                <AppSidebar side="right" />
            </div>
        </AppShell>
    );
}
