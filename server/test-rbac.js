// const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:5000/api';

async function testRBAC() {
    const timestamp = Date.now();
    const userEmail = `user_${timestamp}@example.com`;
    const adminEmail = `admin_${timestamp}@example.com`;

    try {
        // 1. Signup as User
        console.log('Testing Signup (User)...');
        const userRes = await fetch(`${BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: userEmail, password: 'password123' }),
        });
        const userData = await userRes.json();
        console.log('User Signup Status:', userRes.status);
        console.log('User Role:', userData.user?.role);

        // 2. Signup as Admin
        console.log('\nTesting Signup (Admin)...');
        const adminRes = await fetch(`${BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: adminEmail, password: 'password123', role: 'admin' }),
        });
        const adminData = await adminRes.json();
        console.log('Admin Signup Status:', adminRes.status);
        console.log('Admin Role (Requested):', adminData.user?.role);

        // 3. Login as User
        console.log('\nLogging in as User...');
        const loginUserRes = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: userEmail, password: 'password123' }),
        });
        const loginUserData = await loginUserRes.json();
        const userToken = loginUserData.token;

        // 4. Try to access Admin Route as User
        console.log('\nAccessing Admin Route as User...');
        const adminRouteRes = await fetch(`${BASE_URL}/users`, {
            headers: { 'x-auth-token': userToken },
        });
        console.log('Access Status:', adminRouteRes.status); // Should be 403

        // 5. Login as Admin
        console.log('\nLogging in as Admin...');
        const loginAdminRes = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: adminEmail, password: 'password123' }),
        });
        const loginAdminData = await loginAdminRes.json();
        const adminToken = loginAdminData.token;

        // Check if the role was actually set to admin
        if (loginAdminData.user.role === 'admin') {
            console.log('Admin role confirmed.');
            // 6. Access Admin Route as Admin
            console.log('\nAccessing Admin Route as Admin...');
            const adminAccessRes = await fetch(`${BASE_URL}/users`, {
                headers: { 'x-auth-token': adminToken },
            });
            console.log('Access Status:', adminAccessRes.status); // Should be 200
            const usersList = await adminAccessRes.json();
            console.log('Users found:', usersList.length);
        } else {
            console.log('Admin role NOT set (API likely ignored it).');
        }

    } catch (error) {
        console.error('Test failed:', error);
    }
}

testRBAC();
