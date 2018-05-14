#!/usr/bin/env bash
if test "$BASH" = "" || "$BASH" -uc 'a=();true "${a[@]}"' 2>/dev/null; then
    # Bash 4.4, Zsh
    set -euo pipefail
    shopt -s nullglob globstar
else
    # Bash 4.3 and older chokes on empty arrays with set -u.
    set -eo pipefail
fi

if lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null ; then
    echo "BAIL BUILD!"
    echo "Please stop the local Gatsby development server"
    echo "The dev server can corrupt the production build"
    exit 1
fi

# Seems like Gatsby builds can get corrupted if a dev .cache exists
./node_modules/.bin/rimraf ".cache"

./node_modules/.bin/gatsby build