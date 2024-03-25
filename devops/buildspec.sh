#!/bin/bash

THE_DATE=$(date '+%Y-%m-%d %H:%M:%S')
echo "Build started on $THE_DATE"

appenvsubstr(){
    p_template=$1
    p_destination=$2
    envsubst '$TF_VAR_ENV_APP_GL_SCRIPT_MODE' < $p_template \
    | envsubst '$TF_VAR_ENV_APP_GL_NAMESPACE' \
    | envsubst '$TF_VAR_ENV_APP_GL_NAME' \
    | envsubst '$TF_VAR_ENV_APP_GL_STAGE' \
    | envsubst '$TF_VAR_ENV_APP_BE_DOMAIN_NAME' \
    | envsubst '$TF_VAR_ENV_APP_BE_URL' \
    | envsubst '$TF_VAR_ENV_APP_BE_LOCAL_PORT' \
    | envsubst '$TF_VAR_ENV_APP_BE_LOCAL_SOURCE_FOLDER' \
    | envsubst '$TF_VAR_ENV_APP_GL_AWS_REGION_ECR' \
    | envsubst '$TF_VAR_ENV_APP_GL_DOCKER_REPOSITORY' \
    | envsubst '$TF_VAR_ENV_APP_KC_URL' \
    | envsubst '$TF_VAR_ENV_APP_GL_IDENTITY_POOL_NAME' \
    | envsubst '$TF_VAR_ENV_APP_GL_USER_POOL_ID' \
    | envsubst '$TF_VAR_ENV_APP_GL_USER_POOL_CLIENT_ID' \
    | envsubst '$TF_VAR_ENV_APP_GL_OAUTH_DOMAIN' \
    | envsubst '$TF_VAR_ENV_APP_GL_OAUTH_REDIRECT_LOGIN' \
    | envsubst '$TF_VAR_ENV_APP_GL_OAUTH_REDIRECT_LOGOUT' \
    | envsubst '$TF_VAR_ENV_APP_GL_AWS_REGION' > $p_destination
}


appenvsubstr devops/appspec.yml.template appspec.yml
appenvsubstr devops/appspec.sh.template devops/appspec.sh
chmod 777 devops/appspec.sh
appenvsubstr devops/.env.template .env

appenvsubstr devops/config-cognito.ts.template src/app/config-cognito.ts

appenvsubstr devops/Dockerfile.template Dockerfile
appenvsubstr devops/docker-compose.yml.template docker-compose.yml
