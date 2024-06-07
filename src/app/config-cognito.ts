//

export const cognitoConfig = {
    identityPoolId: 'keycloak-identity-pool',
    region: 'us-west-2',
    userPoolId: 'us-west-2_mL3CQcBPf',
    userPoolWebClientId: '57d2thdumfcj30o721s9fkl4oc',
    oauth: {
      domain: 'kaiac.auth.us-west-2.amazoncognito.com',
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: 'http://localhost:4200/login',
      redirectSignOut: 'http://localhost:4200/login',
      responseType: 'token',
      options: {
          AdvancedSecurityDataCollectionFlag: true
      }
    },
    apiUrl: 'https://service-api.skyscaledev.com/'
}