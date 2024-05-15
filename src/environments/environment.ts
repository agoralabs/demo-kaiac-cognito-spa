export const environment = {
    production: false,
    GL_KC_URL: process.env["GL_KC_URL"],
    GL_SPA_PORT: process.env["GL_SPA_PORT"],
    GL_IDENTITY_POOL_NAME: process.env["GL_IDENTITY_POOL_NAME"],
    GL_AWS_REGION: process.env["GL_AWS_REGION"],
    GL_USER_POOL_ID: process.env["GL_USER_POOL_ID"],
    GL_USER_POOL_CLIENT_ID: process.env["GL_USER_POOL_CLIENT_ID"],
    GL_OAUTH_DOMAIN: process.env["GL_OAUTH_DOMAIN"],
    GL_OAUTH_REDIRECT_LOGIN: process.env["GL_OAUTH_REDIRECT_LOGIN"],
    GL_OAUTH_REDIRECT_LOGOUT: process.env["GL_OAUTH_REDIRECT_LOGOUT"]
  };