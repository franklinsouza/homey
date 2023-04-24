export function login (body) {
  return {
    url: 'http://localhost:3000/api/customers/login',
    options: {
      method: 'POST',
      body: JSON.stringify(body),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  };
}

export function logOut () {
  return {
    url: 'http://localhost:3000/api/customers/logout',
    options: {
      method: 'POST',
      credentials: 'include',
    }
  }
}

export function register (body) {
  return {
    url: 'http://localhost:3000/api/customers',
    options: {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    }
  }
}

export function me () {
  return {
    url: 'http://localhost:3000/api/customers/me',
    options: {
      credentials: 'include'
    }
  }
}

export function hostPost (body) {
  return {
    url: 'http://localhost:3000/api/hosts',
    options: {
      method: 'POST',
      body:JSON.stringify(body),
      headers: {
        'Content-Type' : 'application/json'
      }
    }
  }
}