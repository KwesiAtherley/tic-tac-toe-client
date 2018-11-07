# sh curl-scripts/json/sign-up.sh

# don't use a password you use for any real websites!
curl "https://https://tic-tac-toe-wdi.herokuapp.com/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
