/*
* URLS
*/
export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const API_URL = process.env.REACT_APP_API_URL;
/*******************************************************/
/*
* TOKENS
*/
export const TWITCH_APP_URL_TOKEN = process.env.REACT_APP_TWITCH_APP_URL_TOKEN;
export const TWITCH_APP_REVOKE_TOKEN = process.env.REACT_APP_TWITCH_APP_REVOKE_TOKEN;
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
/*******************************************************/
/*
* PATHS
*/
// TWITCH
export const API_URL_CREATECLIP = '/createClip';
export const API_URL_ACTIVATEML = '/activateML';
// AUTH
export const API_LOGIN = '/auth/signin';
export const API_REGISTER = '/auth/signup';
// CLIP
export const API_GETCLIP_ALL = '/clip/getallClip';
export const API_GETCLIP_BYID = '/clip/getClipById';
export const API_GETCLIP_ALL_PUB = '/clip/getAllPublishedClip';
export const API_GETCLIP_BYUSERID = '/clip/getAllClipByUserId';
export const API_GETCLIP_ALL_PUB_BYUSERID = '/clip/getEditClipByUserId';
export const API_DELCLIP_BYID='/clip/getEditClipByUserId';
export const API_DELCLIP_ALL='/clip/getEditClipByUserId';
export const API_POSTCLIP='/clip/getEditClipByUserId';
export const API_PUTCLIP='/clip/getEditClipByUserId';
// COMMENT
export const API_GETCOMMENT_ALL = '/comment/getallComment';
export const API_GETCOMMENT_BYID = '/comment/getCommentById';
export const API_GETCOMMENT_BYUSERID = '/comment/getAllCommentByUserId';
export const API_DELCOMMENT_BYID='/comment/getEditCommentByUserId';
export const API_DELCOMMENT_ALL='/comment/getEditCommentByUserId';
export const API_POSTCOMMENT='/comment/getEditCommentByUserId';
export const API_PUTCOMMENT='/comment/getEditCommentByUserId';
// USERS
export const API_GETUSER_ALL = '/user/getAllUser';
export const API_GETUSER_BYID = '/user/getUserById';
export const API_DELUSER_BYID='/user/deleteOneUser';
export const API_DELUSER_ALL='/user/deleteAllUser';
export const API_PUTUSER='/user/updateOneUser';
// CONTENT
export const API_PUBLIC_CONTENT = '/content/all';
export const API_USER_CONTENT = '/content/user';
export const API_MOD_CONTENT = '/content/mod';
export const API_ADMIN_CONTENT ='/content/admin';
export const API_STRE_CONTENT ='/content/stre';
// TEST
export const API_TEST_SUCCESS = '/test/testSuccess';
export const API_TEST_ERROR = '/test/testError';
export const API_TEST_AUTHORIZE = '/test/TestAuthorize';
/*******************************************************/
