import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ProductSearch from '@/plugins/ProductCatalog/components/ProductSearch';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Products',
        href: '/products',
    },
    {
        title: 'Search',
        href: '/products/search',
    },
];

export default function ProductSearchPage() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Search Products" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ProductSearch />
            </div>
        </AppLayout>
    );
}
