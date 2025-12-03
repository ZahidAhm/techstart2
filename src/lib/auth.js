const STORAGE_KEY = 'saas_starter_user'

export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    return data.user
  } catch {
    return null
  }
}

export async function login({ email, password }) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.msg || 'Login failed');
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data.user;
}

export async function signup({ email, password }) {
  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.msg || 'Signup failed');
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data.user;
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY);
}

export function isAuthenticated() {
  return Boolean(getCurrentUser())
}
