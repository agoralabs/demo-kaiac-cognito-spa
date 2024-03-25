import { Component } from '@angular/core';
import { cognitoConfig } from './config-cognito';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-kaiac-ng-cognito';
  //after auth infos
  accessToken: string | null = null;
  idToken: string | null = null;
  userId: string | null = null;
  username: string | null = null;
  email: string | null = null;
  //login infos
  loginUrl: string | null = null;
  //logoutUrl
  logoutUrl: string | null = null;
  // Méthode pour afficher le jeton d'accès
  constructor(){
    const domain = cognitoConfig.oauth.domain;
    const redirectSignIn = cognitoConfig.oauth.redirectSignIn;
    const responseType = cognitoConfig.oauth.responseType;
    const clientId = cognitoConfig.userPoolWebClientId;
    const loginUrl = 'https://' + domain + '/login?redirect_uri=' + redirectSignIn + '&response_type=' + responseType + '&client_id=' + clientId;
    //const logoutUrl = 'https://' + domain + '/logout?redirect_uri=' + redirectSignIn + '&response_type=' + responseType + '&client_id=' + clientId;
    const logoutUrl = 'https://' + domain + '/logout?logout_uri=' + redirectSignIn+ '&redirect_uri=' + redirectSignIn + '&response_type=' + responseType + '&client_id=' + clientId;
    this.loginUrl = loginUrl;
    this.logoutUrl = logoutUrl;
  }

  showAuthInfo() {
    this.fetchAuthInfoFromURL();
  }

  // Méthode pour extraire le jeton d'accès de l'URL
  private fetchAuthInfoFromURL(): void {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = params.get('access_token');
    const idToken = params.get('id_token');
    this.accessToken = accessToken;
    this.idToken = idToken;

    if (idToken) {
      // Diviser le jeton JWT en parties : en-tête, charge utile et signature
      const [header, payload, signature] = idToken.split('.');
    
      // Décoder la partie de la charge utile Base64
      const decodedPayload = JSON.parse(atob(payload));
      if (decodedPayload) {
        const userId = decodedPayload.sub;
        const username = decodedPayload.username; // Le nom de l'utilisateur peut varier en fonction de votre configuration Cognito
        const email = decodedPayload.email;

        this.email = email;
        this.username = username;
        this.userId = userId;

      }
    }
  }

  redirectToLogin() {

    if (this.loginUrl) {
      // Launch hosted UI
      window.location.assign(this.loginUrl);
    }
  }

  redirectToLogout() {

    if (this.logoutUrl) {
      window.location.assign(this.logoutUrl);
    }
  }

}
