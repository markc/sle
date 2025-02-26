import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ProductCategories from '@/plugins/ProductCatalog/components/ProductCategories';

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
        title: 'Categories',
        href: '/products/categories',
    },
];

export default function ProductCategoriesPage() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ProductCategories />
            </div>
        </AppLayout>
    );
}
