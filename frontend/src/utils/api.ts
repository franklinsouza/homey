type reqType = {
  url: string, 
  options: RequestInit
}

type loginBody = {
  email: string,
  password: string
}

type registerBody = {
  username: string
  email: string
  password: string
  typeOption: string
}

type hostPostBody = {
  owner: string, 
  username: string, 
  title: string,
  address: string,
  bedrooms: string,
  type: string
}


export function login(body:loginBody):reqType{
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

export function logOut():reqType {
  return {
    url: 'http://localhost:3000/api/customers/logout',
    options: {
      method: 'POST',
      credentials: 'include',
    }
  }
}

export function register(body:registerBody):reqType {
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

export function me():reqType {
  return {
    url: 'http://localhost:3000/api/customers/me',
    options: {
      credentials: 'include'
    }
  }
}

export function hostPost(body:hostPostBody):reqType {
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