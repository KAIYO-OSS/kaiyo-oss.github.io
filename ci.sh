#!/usr/bin/env bash

if [[ $1 == "ci" ]]
then
  echo "doing ci with $1 $2"
  echo "log in to acr"
  docker login kaiyodevinternal.azurecr.io -u kaiyodevinternal -p LdRemp=TpjMhmPzS=4OSaItQbqmynLje
  echo "building docker image"
  docker build -t landing-page-kaiyo-service .
  echo "tagging docker image"
  docker tag landing-page-kaiyo-service kaiyodevinternal.azurecr.io/landing-page-kaiyo-service:"$2"
  echo "pushing docker image to acr"
  docker push kaiyodevinternal.azurecr.io/landing-page-kaiyo-service:"$2"
  echo "pushed image with tag - $2"

elif [[ $1 == "cd" ]];
then
  echo "doing cd with $1 $2 $3 $4"
  az account set --subscription d867b0bb-af70-44a1-a08f-02f69b5a189e
  az aks get-credentials --resource-group kaiyo-prod --name kaiyo-prod
  echo "upgrading or installing helm service $2 $3"
  helm upgrade --install "$2" https://kaiyo-oss.github.io/Helm-Charts/servicechart-1.1.0.tgz -f "$3" --set image.tag="$4"
  echo "deployed"
fi


