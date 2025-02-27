import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';

export default function AppSidebarsLayoutNoBreadcrumbs({ children }: { children: React.ReactNode; breadcrumbs?: BreadcrumbItem[] }) {
    return (
        <AppShell variant="sidebars">
            <AppSidebar side="left" />
            <AppContent variant="sidebars">
                <div className="flex justify-between">
                    <AppSidebarHeader side="left" />
                    <AppSidebarHeader side="right" />
                </div>
                {children}
            </AppContent>
            <AppSidebar side="right" />
        </AppShell>
    );
}
