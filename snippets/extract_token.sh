curl -d "client_id=admin-cli" -d "username=admin" -d "password=admin" -d "grant_type=password" http://localhost:8080/auth/realms/master/protocol/openid-connect/token | jq .access_token | sed -e 's/^"//' -e 's/"$//'
