// const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:5000/api/auth';

async function testAuth() {
    try {
        // 1. Signup
        console.log('Testing Signup...');
        const signupRes = await fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'test@example.com', password: 'password123' }),
        });
        const signupData = await signupRes.json();
        console.log('Signup Status:', signupRes.status);
        console.log('Signup Data:', signupData);

        if (signupRes.status !== 200) {
            console.error('Signup failed');
        }

        // 2. Login
        console.log('\nTesting Login...');
        const loginRes = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'test@example.com', password: 'password123' }),
        });
        const loginData = await loginRes.json();
        console.log('Login Status:', loginRes.status);
        console.log('Login Data:', loginData);

        if (loginRes.status === 200 && loginData.token) {
            console.log('Login successful, token received');
        } else {
            console.error('Login failed');
        }

    } catch (error) {
        console.error('Test failed:', error);
    }
}

testAuth();
