import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import ProductDetail from '@/plugins/ProductCatalog/components/ProductDetail';
import productStore from '@/plugins/ProductCatalog/store';

interface Props {
    id: string;
}

interface Product {
    id: number;
    name: string;
    category: string;
    categoryName: string;
    price: number;
    image: string;
    description: string;
    detailedDescription?: string;
    specifications?: Array<{name: string, value: string}>;
}

export default function ProductDetailPage({ id }: Props) {
    // Get product name for the title
    const products = productStore.getState().products as Product[];
    const product = products.find((p: Product) => p.id === parseInt(id));
    const productName = product ? product.name : `Product ${id}`;
    
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
            title: productName,
            href: `/products/${id}`,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={productName} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ProductDetail productId={id} />
            </div>
        </AppLayout>
    );
}
