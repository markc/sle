<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function ()
{
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function ()
{
    Route::get('dashboard', function ()
    {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // ProductCatalog routes
    Route::get('products', function ()
    {
        return Inertia::render('products/list');
    })->name('products.list');

    Route::get('products/categories', function ()
    {
        return Inertia::render('products/categories');
    })->name('products.categories');

    Route::get('products/search', function ()
    {
        return Inertia::render('products/search');
    })->name('products.search');

    Route::get('products/{id}', function ($id)
    {
        return Inertia::render('products/detail', ['id' => $id]);
    })->name('products.detail');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
