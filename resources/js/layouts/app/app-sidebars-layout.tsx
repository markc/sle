import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { Breadcrumbs } from '@/components/breadcrumbs';

export default function AppSidebarsLayout({ children, breadcrumbs = [] }: { children: React.ReactNode; breadcrumbs?: BreadcrumbItem[] }) {
    return (
        <AppShell variant="sidebars">
            <AppSidebar side="left" />
            <AppContent variant="sidebars">
                <div className="flex justify-between">
                    <AppSidebarHeader side="left" />
                    <AppSidebarHeader side="right" />
                </div>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
            <AppSidebar side="right" />
        </AppShell>
    );
}
