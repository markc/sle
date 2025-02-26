import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';

export default function AppSidebarsLayout({ children, breadcrumbs = [] }: { children: React.ReactNode; breadcrumbs?: BreadcrumbItem[] }) {
    return (
        <AppShell variant="sidebars">
            <AppSidebar />
            <AppContent variant="sidebars">
                <div className="flex justify-between">
                    <AppSidebarHeader breadcrumbs={breadcrumbs} side="left" />
                    <AppSidebarHeader breadcrumbs={breadcrumbs} side="right" />
                </div>
                {children}
            </AppContent>
            <AppSidebar side="right" />
        </AppShell>
    );
}
