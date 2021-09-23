export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessTokenJWT) {
    return { 'x-access-token': user.accessTokenJWT };
  } else {
    return {};
  }
}
