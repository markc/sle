import { SidebarProvider } from '@/components/ui/sidebar';
import { useState, useEffect } from 'react';

interface AppShellProps {
    children: React.ReactNode;
    variant?: 'header' | 'sidebar' | 'sidebars';
}

export function AppShell({ children, variant = 'header' }: AppShellProps) {
    const [isLeftOpen, setIsLeftOpen] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('sidebar_left') !== 'false' : true));
    const [isRightOpen, setIsRightOpen] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('sidebar_right') !== 'false' : true));

    // Force both sidebars to be visible when using the 'sidebars' variant
    useEffect(() => {
        if (variant === 'sidebars' && typeof window !== 'undefined') {
            // Set both sidebars to be open
            localStorage.setItem('sidebar_left', 'true');
            localStorage.setItem('sidebar_right', 'true');
            setIsLeftOpen(true);
            setIsRightOpen(true);
        }
    }, [variant]);

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

    // For sidebars variant, ensure both left and right sidebars are enabled
    const isSidebarsVariant = variant === 'sidebars';
    
    return (
        <SidebarProvider 
            defaultOpen={true} 
            open={isLeftOpen} 
            onOpenChange={handleLeftSidebarChange}
            rightSidebarOpen={isSidebarsVariant ? isRightOpen : false}
            onRightSidebarOpenChange={handleRightSidebarChange}
        >
            <div className="flex min-h-screen w-full flex-col">
                {children}
            </div>
        </SidebarProvider>
    );
}
