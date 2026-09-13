import { request } from './index'

export function getUsers() {
  return request('/api/users')
}

export function createUser(user) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
  })
}

export function updateUser(id, user) {
  return request(`/api/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
  })
}

export function deleteUser(id) {
  return request(`/api/users/${id}`, { method: 'DELETE' })
}
