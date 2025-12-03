const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'users.json');

if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

function getUsers() {
    const data = fs.readFileSync(DB_FILE);
    return JSON.parse(data);
}

function saveUser(user) {
    const users = getUsers();
    users.push(user);
    fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2));
    return user;
}

function findUserByEmail(email) {
    const users = getUsers();
    return users.find(u => u.email === email);
}

function findUserById(id) {
    const users = getUsers();
    return users.find(u => u.id === id);
}

module.exports = {
    getUsers,
    saveUser,
    findUserByEmail,
    findUserById
};
