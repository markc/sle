import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';

export default function AppSidebarsLayoutNoBreadcrumbs({ children }: { children: React.ReactNode; breadcrumbs?: BreadcrumbItem[] }) {
    return (
        <AppShell variant="sidebars">
            <div className="fixed top-0 left-0 right-0 flex justify-between w-full bg-sidebar z-999 border-b border-sidebar-border/50">
                <AppSidebarHeader side="left" />
                <AppSidebarHeader side="right" />
            </div>
            <div className="flex flex-1 w-full mt-16">
                <AppSidebar side="left" />
                <AppContent variant="sidebars">
                    {children}
                </AppContent>
                <AppSidebar side="right" />
            </div>
        </AppShell>
    );
}
