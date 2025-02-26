import { SidebarProvider } from '@/components/ui/sidebar';
import { useState } from 'react';

interface AppShellProps {
    children: React.ReactNode;
    variant?: 'header' | 'sidebar' | 'sidebars';
}

export function AppShell({ children, variant = 'header' }: AppShellProps) {
    const [isLeftOpen, setIsLeftOpen] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('sidebar_left') !== 'false' : true));
    const [isRightOpen, setIsRightOpen] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('sidebar_right') !== 'false' : true));

    const handleLeftSidebarChange = (open: boolean) => {
        setIsLeftOpen(open);

        if (typeof window !== 'undefined') {
            localStorage.setItem('sidebar_left', String(open));
        }
    };

    const handleRightSidebarChange = (open: boolean) => {
        setIsRightOpen(open);

        if (typeof window !== 'undefined') {
            localStorage.setItem('sidebar_right', String(open));
        }
    };

    if (variant === 'header') {
        return <div className="flex min-h-screen w-full flex-col">{children}</div>;
    }

    return (
        <SidebarProvider 
            defaultOpen={isLeftOpen} 
            open={isLeftOpen} 
            onOpenChange={handleLeftSidebarChange}
            rightSidebarOpen={isRightOpen}
            onRightSidebarOpenChange={handleRightSidebarChange}
        >
            {children}
        </SidebarProvider>
    );
}
