#!/bin/bash


# exit when any command fails
set -e

domain='prod'
distribution_id='E2VA0U1BD87QZT'
if [ "$domain" = "prod" ]; then
  distribution_id='E2VA0U1BD87QZT'
else
  distribution_id='E36I6FFQGKJITX'
fi

echo $distribution_id

DOMAIN=$domain npm run build:$domain

aws s3 sync build/ s3://$domain-impruvi-web-static-assets

aws cloudfront create-invalidation --distribution-id "$distribution_id" --paths "/*"
