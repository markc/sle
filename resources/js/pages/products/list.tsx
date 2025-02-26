import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ProductList from '@/plugins/ProductCatalog/components/ProductList';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Products',
        href: '/products',
    },
];

export default function ProductListPage() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Catalog" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ProductList />
            </div>
        </AppLayout>
    );
}
