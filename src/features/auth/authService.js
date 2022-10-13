// A mock function to mimic making an async request for data
export function login(user = {}) {
  const authObj = {
    accessToken: 'SF2RYUKEN'
  }
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: authObj }), 500)
  );
}

export function register(user = {}) {
  const authObj = {
    accessToken: 'SF2RYUKEN'
  }
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: authObj }), 500)
  );
}
