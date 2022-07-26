#!/bin/bash


# exit when any command fails
set -e

domain='prod'
distribution_id='E2VA0U1BD87QZT' # TODO get this using the domain

npm run build

aws s3 sync build/ s3://$domain-impruvi-web-static-assets

aws cloudfront create-invalidation --distribution-id "$distribution_id" --paths "/*"