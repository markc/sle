import { SidebarTrigger } from '@/components/ui/sidebar';

interface AppSidebarHeaderProps {
    side?: 'left' | 'right';
}
//
export function AppSidebarHeader({ side = 'left' }: AppSidebarHeaderProps) {
    return (
        <header className="flex h-12 shrink-0 items-center gap-2 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className={`flex items-center ${side === 'right' ? 'flex-row-reverse' : ''}`}>
                <SidebarTrigger side={side} className={side === 'right' ? '-mr-1' : '-ml-1'} />
            </div>
        </header>
    );
}
