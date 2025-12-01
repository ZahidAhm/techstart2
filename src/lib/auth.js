const STORAGE_KEY = 'saas_starter_user'

export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function login({ email }) {
  const user = { email }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  return user
}

export function signup({ email }) {
  const user = { email }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  return user
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY)
}

export function isAuthenticated() {
  return Boolean(getCurrentUser())
}
