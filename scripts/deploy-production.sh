#!/bin/bash
set -uex

netlifyctl deploy --yes --site-id $NETLIFY_SITE_ID --access-token $NETLIFY_ACCESS_TOKEN --base-directory ./public