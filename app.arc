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
post /login
post /subsets

# @aws
# profile default
# region us-west-1
  