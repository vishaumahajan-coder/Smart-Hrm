const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
    fetchParties: async () => {
        await delay(500);
        return [
            { id: 1, name: 'ABC Corporation', city: 'Mumbai', balance: 5000 },
            { id: 2, name: 'XYZ Traders', city: 'Delhi', balance: -1200 },
        ];
    },

    fetchItems: async () => {
        await delay(500);
        return [
            { id: 1, name: 'Laptop i7', category: 'Electronics', stock: 15, price: 45000 },
            { id: 2, name: 'Office Chair', category: 'Furniture', stock: 8, price: 3500 },
        ];
    },

    login: async (username, password) => {
        await delay(800);
        if (username === 'admin' && password === 'admin') {
            return { success: true, user: { name: 'Administrator' } };
        }
        return { success: false, message: 'Invalid credentials' };
    }
};
