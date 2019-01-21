@app
min-web

@http
get /
get /js/:file

@static
staging min-web-static-stage
production min-web-static-prod
