/**
 * ProductCatalog Store
 * 
 * State management for the ProductCatalog plugin.
 * This is a simple implementation that could be expanded
 * to use Redux, Zustand, or any other state management library.
 */

// Initial state with sample data
const initialState = {
  products: [
    {
      id: 1,
      name: 'Ergonomic Office Chair',
      category: 'furniture',
      categoryName: 'Furniture',
      price: 249.99,
      image: '/images/products/chair.jpg',
      description: 'Comfortable ergonomic office chair with lumbar support and adjustable height.',
      detailedDescription: 'This premium ergonomic office chair is designed for maximum comfort during long work sessions. Features include adjustable height, tilt, and armrests, breathable mesh back, and excellent lumbar support. Suitable for home office or professional environments.',
      specifications: [
        { name: 'Material', value: 'Mesh and high-grade plastic' },
        { name: 'Weight Capacity', value: '300 lbs' },
        { name: 'Dimensions', value: '26"W x 26"D x 38-42"H' },
        { name: 'Adjustable Height', value: 'Yes' },
        { name: 'Warranty', value: '5 years' }
      ]
    },
    {
      id: 2,
      name: 'Standing Desk',
      category: 'furniture',
      categoryName: 'Furniture',
      price: 399.99,
      image: '/images/products/desk.jpg',
      description: 'Electric standing desk with memory settings and spacious work surface.',
      detailedDescription: 'Transform your workspace with this electric standing desk. Featuring a smooth and quiet motor, it allows you to easily switch between sitting and standing positions. The desk includes memory settings for your preferred heights and a spacious work surface to accommodate multiple monitors and accessories.',
      specifications: [
        { name: 'Material', value: 'Engineered wood and steel' },
        { name: 'Weight Capacity', value: '200 lbs' },
        { name: 'Dimensions', value: '60"W x 30"D x 25-50"H' },
        { name: 'Adjustment Type', value: 'Electric motor' },
        { name: 'Warranty', value: '3 years' }
      ]
    },
    {
      id: 3,
      name: 'Wireless Keyboard',
      category: 'electronics',
      categoryName: 'Electronics',
      price: 79.99,
      image: '/images/products/keyboard.jpg',
      description: 'Slim wireless keyboard with backlit keys and multi-device connectivity.',
      detailedDescription: 'This premium wireless keyboard offers a comfortable typing experience with backlit keys for working in low-light conditions. Connect to multiple devices simultaneously and switch between them with a simple key press. The rechargeable battery provides up to 3 months of use on a single charge.',
      specifications: [
        { name: 'Connectivity', value: 'Bluetooth 5.0' },
        { name: 'Battery Life', value: 'Up to 3 months' },
        { name: 'Backlight', value: 'Yes, adjustable brightness' },
        { name: 'Compatible With', value: 'Windows, macOS, iOS, Android' },
        { name: 'Warranty', value: '1 year' }
      ]
    },
    {
      id: 4,
      name: 'Wireless Mouse',
      category: 'electronics',
      categoryName: 'Electronics',
      price: 49.99,
      image: '/images/products/mouse.jpg',
      description: 'Ergonomic wireless mouse with customizable buttons and precision tracking.',
      detailedDescription: 'This ergonomic wireless mouse is designed for comfort and productivity. It features customizable buttons, precision tracking on virtually any surface, and a long-lasting battery. The contoured design fits naturally in your hand, reducing strain during extended use.',
      specifications: [
        { name: 'Connectivity', value: 'Bluetooth and USB receiver' },
        { name: 'Battery Life', value: 'Up to 2 months' },
        { name: 'DPI Range', value: '200-4000 DPI' },
        { name: 'Buttons', value: '6 programmable buttons' },
        { name: 'Warranty', value: '1 year' }
      ]
    },
    {
      id: 5,
      name: 'Monitor Stand',
      category: 'accessories',
      categoryName: 'Accessories',
      price: 89.99,
      image: '/images/products/monitor-stand.jpg',
      description: 'Adjustable monitor stand with built-in USB hub and cable management.',
      detailedDescription: 'Elevate your monitor to the perfect height with this adjustable stand. It includes a built-in USB hub for convenient connectivity and cable management features to keep your desk tidy. The sturdy construction supports monitors up to 32 inches and 20 pounds.',
      specifications: [
        { name: 'Material', value: 'Aluminum and steel' },
        { name: 'Weight Capacity', value: '20 lbs' },
        { name: 'Compatible Sizes', value: '13-32 inch monitors' },
        { name: 'USB Ports', value: '4 USB 3.0 ports' },
        { name: 'Warranty', value: '2 years' }
      ]
    },
    {
      id: 6,
      name: 'Desk Lamp',
      category: 'accessories',
      categoryName: 'Accessories',
      price: 59.99,
      image: '/images/products/lamp.jpg',
      description: 'LED desk lamp with adjustable brightness and color temperature.',
      detailedDescription: 'This modern LED desk lamp offers adjustable brightness levels and color temperatures to suit any task or mood. The flexible arm allows you to direct light exactly where you need it, while the touch controls make adjustments simple and intuitive. Energy-efficient LEDs provide bright, flicker-free illumination.',
      specifications: [
        { name: 'Light Source', value: 'LED' },
        { name: 'Power', value: '10W' },
        { name: 'Color Temperature', value: '2700K-6500K (adjustable)' },
        { name: 'Brightness Levels', value: '5 levels' },
        { name: 'Warranty', value: '1 year' }
      ]
    }
  ],
  categories: [
    {
      id: 'furniture',
      name: 'Furniture',
      description: 'Office furniture for a comfortable and productive workspace.'
    },
    {
      id: 'electronics',
      name: 'Electronics',
      description: 'Electronic devices and peripherals for your computing needs.'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Essential accessories to complement your office setup.'
    }
  ],
  cart: [],
  filters: {
    searchQuery: '',
    priceRange: { min: null, max: null },
    selectedCategories: []
  }
};

// Actions
const actions = {
  addToCart: (state, { productId, quantity }) => {
    const product = state.products.find(p => p.id === productId);
    if (!product) return state;

    const existingItem = state.cart.find(item => item.productId === productId);
    let newCart;

    if (existingItem) {
      newCart = state.cart.map(item => 
        item.productId === productId 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      newCart = [...state.cart, { productId, quantity, price: product.price }];
    }

    return {
      ...state,
      cart: newCart
    };
  },
  
  removeFromCart: (state, productId) => {
    return {
      ...state,
      cart: state.cart.filter(item => item.productId !== productId)
    };
  },
  
  updateCartItemQuantity: (state, { productId, quantity }) => {
    return {
      ...state,
      cart: state.cart.map(item => 
        item.productId === productId 
          ? { ...item, quantity }
          : item
      )
    };
  },
  
  clearCart: (state) => {
    return {
      ...state,
      cart: []
    };
  },
  
  updateFilters: (state, filters) => {
    return {
      ...state,
      filters: {
        ...state.filters,
        ...filters
      }
    };
  }
};

// Simple store implementation
class Store {
  constructor(initialState, actions) {
    this.state = initialState;
    this.actions = actions;
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  dispatch(actionName, payload) {
    if (this.actions[actionName]) {
      this.state = this.actions[actionName](this.state, payload);
      this.notifyListeners();
    } else {
      console.error(`Action "${actionName}" not found`);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.state));
  }
}

// Create and export the store
const productStore = new Store(initialState, actions);

export default productStore;
