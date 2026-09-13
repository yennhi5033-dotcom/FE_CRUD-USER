const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://overflowing-communication-production-daab.up.railway.app'

export async function request(path, options = {}) {
  let response
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(`Cannot connect to the API at ${API_BASE_URL}. Start the backend or set VITE_API_URL to its address.`, { cause: error })
    }
    throw error
  }

  if (!response.ok) {
    let message = `Request failed with status ${response.status}`
    try {
      const body = await response.json()
      message = body.message || body.error || message
    } catch {
      // Keep the HTTP status when the server does not return JSON.
    }
    throw new Error(message)
  }

  return response.json()
}
