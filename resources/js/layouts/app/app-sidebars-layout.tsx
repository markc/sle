import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { Breadcrumbs } from '@/components/breadcrumbs';

export default function AppSidebarsLayout({ children, breadcrumbs = [] }: { children: React.ReactNode; breadcrumbs?: BreadcrumbItem[] }) {
    return (
        <AppShell variant="sidebars">
            <div className="fixed top-0 left-0 right-0 flex justify-between w-full bg-blue z-999 border-red-700 border-b border-sidebar-border/50">
                <AppSidebarHeader side="left" />
                <AppSidebarHeader side="right" />
            </div>
            <div className="flex flex-1 w-full mt-12"> {/* Add top margin to account for fixed header */}
                <AppSidebar side="left" />
                <AppContent variant="sidebars">
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    {children}
                </AppContent>
                <AppSidebar side="right" />
            </div>
        </AppShell>
    );
}
