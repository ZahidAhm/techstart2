
const STORAGE_KEY = 'startup_products_v2';

const INITIAL_PRODUCTS = [
    {
        id: '1',
        name: 'NexusFlow',
        tagline: 'Streamline your workflow',
        description: 'An AI-powered project management tool that helps teams collaborate better and ship faster.',
        imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=NexusFlow',
        link: '#',
        os: 'Web, iOS, Android',
        platform: 'SaaS',
        screenshots: [
            'https://placehold.co/600x400/2563eb/ffffff?text=Dashboard',
            'https://placehold.co/600x400/2563eb/ffffff?text=Kanban',
            'https://placehold.co/600x400/2563eb/ffffff?text=Analytics'
        ]
    },
    {
        id: '2',
        name: 'CodeGuard',
        tagline: 'Secure your codebase',
        description: 'Automated security auditing for your repositories. Catch vulnerabilities before they deploy.',
        imageUrl: 'https://placehold.co/600x400/dc2626/ffffff?text=CodeGuard',
        link: '#',
        os: 'CLI, Web',
        platform: 'Developer Tool',
        screenshots: [
            'https://placehold.co/600x400/dc2626/ffffff?text=Report',
            'https://placehold.co/600x400/dc2626/ffffff?text=Integration'
        ]
    },
    {
        id: '3',
        name: 'DataViz',
        tagline: 'Visualize your success',
        description: 'Turn complex data into beautiful, interactive dashboards in minutes.',
        imageUrl: 'https://placehold.co/600x400/16a34a/ffffff?text=DataViz',
        link: '#',
        os: 'Web',
        platform: 'SaaS',
        screenshots: [
            'https://placehold.co/600x400/16a34a/ffffff?text=Charts',
            'https://placehold.co/600x400/16a34a/ffffff?text=Editor'
        ]
    },
    {
        id: '4',
        name: 'CloudScale',
        tagline: 'Scale without limits',
        description: 'Serverless infrastructure that automatically scales with your traffic. Pay only for what you use.',
        imageUrl: 'https://placehold.co/600x400/9333ea/ffffff?text=CloudScale',
        link: '#',
        os: 'Web, API',
        platform: 'Infrastructure',
        screenshots: [
            'https://placehold.co/600x400/9333ea/ffffff?text=Metrics',
            'https://placehold.co/600x400/9333ea/ffffff?text=Scaling'
        ]
    },
    {
        id: '5',
        name: 'SecureChat',
        tagline: 'Private team communication',
        description: 'End-to-end encrypted messaging for teams that value privacy and security.',
        imageUrl: 'https://placehold.co/600x400/0891b2/ffffff?text=SecureChat',
        link: '#',
        os: 'Windows, macOS, Linux, iOS, Android',
        platform: 'Communication',
        screenshots: [
            'https://placehold.co/600x400/0891b2/ffffff?text=Chat',
            'https://placehold.co/600x400/0891b2/ffffff?text=Encryption'
        ]
    },
    {
        id: '6',
        name: 'DevTools Pro',
        tagline: 'Supercharge your development',
        description: 'A suite of developer tools to boost productivity and code quality.',
        imageUrl: 'https://placehold.co/600x400/ea580c/ffffff?text=DevTools',
        link: '#',
        os: 'VS Code Extension',
        platform: 'Developer Tool',
        screenshots: [
            'https://placehold.co/600x400/ea580c/ffffff?text=Editor',
            'https://placehold.co/600x400/ea580c/ffffff?text=Settings'
        ]
    }
];

export function getProducts() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
        return INITIAL_PRODUCTS;
    }
    return JSON.parse(stored);
}

export function getProduct(id) {
    const products = getProducts();
    return products.find(p => p.id === id);
}

export function addProduct(product) {
    const products = getProducts();
    const newProduct = { ...product, id: crypto.randomUUID() };
    products.push(newProduct);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    return newProduct;
}

export function updateProduct(id, updates) {
    const products = getProducts();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...updates };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
        return products[index];
    }
    return null;
}

export function deleteProduct(id) {
    const products = getProducts();
    const filtered = products.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}
