import AppLayoutTemplate from '@/layouts/app/app-sidebars-layout-no-breadcrumbs';

interface AppLayoutNoBreadcrumbsProps {
    children: React.ReactNode;
}

export default ({ children, ...props }: AppLayoutNoBreadcrumbsProps) => (
    <AppLayoutTemplate {...props}>
        {children}
    </AppLayoutTemplate>
);
