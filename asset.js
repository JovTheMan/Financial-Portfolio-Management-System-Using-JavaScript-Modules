// asset.js
export const assets = [
    { id: 1, name: 'AAPL', type: 'stock', price: 150, quantity: 10 },
    { id: 2, name: 'GOOGL', type: 'stock', price: 2800, quantity: 5 },
    { id: 3, name: 'US Treasury Bond', type: 'bond', price: 1000, quantity: 20 }
];

export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}
