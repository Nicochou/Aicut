import Authservice from './auth.service'

export default function authHeader() {
  const user = Authservice.getCurrentUser();
  if (user && user.accessTokenJWT) {
    return { 'x-access-token': user.accessTokenJWT };
  } else {
    return {};
  }
}
