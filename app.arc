@app
init

# @ws

@scheduled
check-me rate(1 minute)

@events
hello

@http
get /
get /about
get /post/:postId
get /hello
post /login
post /subsets
post /hello

# @aws
# profile default
# region us-west-1
  