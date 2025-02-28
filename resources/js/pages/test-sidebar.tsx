import { AppShell } from '@/components/app-shell';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from '@/components/ui/sidebar';
import { Head } from '@inertiajs/react';

export default function TestSidebar() {
    return (
        <>
            <Head title="Test Sidebar" />
            <SidebarProvider defaultOpen={true} rightSidebarOpen={true}>
                <div className="flex min-h-screen w-full flex-col">
                    <div className="fixed top-0 left-0 right-0 flex justify-between w-full bg-tertiary z-50 border-b border-sidebar-border/50 h-12">
                        <div>Left Header</div>
                        <div>Right Header</div>
                    </div>
                    <div className="flex flex-1 w-full mt-12">
                        {/* Left Sidebar */}
                        <Sidebar side="left" variant="inset">
                            <SidebarHeader>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton size="lg">
                                            Left Sidebar
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarHeader>
                            <SidebarContent>
                                <div className="p-4">
                                    <h3 className="text-lg font-medium">Left Sidebar Content</h3>
                                    <p className="mt-2 text-sm">This is the left sidebar content area.</p>
                                </div>
                            </SidebarContent>
                            <SidebarFooter>
                                <div className="p-4">
                                    <p className="text-sm">Left sidebar footer</p>
                                </div>
                            </SidebarFooter>
                        </Sidebar>

                        {/* Main Content */}
                        <main className="flex-1 p-4">
                            <h1 className="text-2xl font-bold mb-4">Test Sidebar Page</h1>
                            <p>This is a test page to debug the sidebar layout.</p>
                        </main>

                        {/* Right Sidebar */}
                        <Sidebar side="right" variant="inset">
                            <SidebarHeader>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton size="lg">
                                            Right Sidebar
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarHeader>
                            <SidebarContent>
                                <div className="p-4">
                                    <h3 className="text-lg font-medium">Right Sidebar Content</h3>
                                    <p className="mt-2 text-sm">This is the right sidebar content area.</p>
                                </div>
                            </SidebarContent>
                            <SidebarFooter>
                                <div className="p-4">
                                    <p className="text-sm">Right sidebar footer</p>
                                </div>
                            </SidebarFooter>
                        </Sidebar>
                    </div>
                </div>
            </SidebarProvider>
        </>
    );
}
