#!/bin/bash
#set -e

# Fonction pour remplacer les variables d'environnement dans un fichier
# replace_env_vars() {
#   env_file=$1
#   template_file=$2

#   # Crée un fichier temporaire
#   temp_file=$(mktemp)

#   # Remplace chaque variable d'environnement trouvée dans le template
#   while IFS= read -r line || [ -n "$line" ]; do
#     while echo "$line" | grep -q '${'; do
#       var=$(echo "$line" | sed 's/.*\${\([^}]*\)}.*/\1/')
#       line=$(echo "$line" | sed "s/\${$var}/$(eval echo \$$var)/g")
#     done
#     echo "$line" >> "$temp_file"
#   done < "$template_file"

#   mv "$temp_file" "$env_file"
# }

# Remplacer les variables dans les fichiers de template
#replace_env_vars /app/.env /app/devops/.env.template
#replace_env_vars /app/src/app/config-cognito.ts /app/devops/config-cognito.ts.template

# Lancer l'application
npm run start
