# Porthole

An http window into [secure-scuttlebutt](https://github.com/ssbc/patchwork). 
Currently totally mvp and just returns stringified JSON.

The server responds to requests of the format : 

```
/%:post_id
/%25:post_id

/post/:post_id
```
where :post_id is the scuttlebutt id less its leading %

e.g. 

http://porthole.mixmix.io:5000/%zZk1h5NIRrtR9MGaMj9ue3Lsn9+kkZAzwHlBvwodsDk=.sha256
http://porthole.mixmix.io:5000/%25zZk1h5NIRrtR9MGaMj9ue3Lsn9+kkZAzwHlBvwodsDk=.sha256

http://porthole.mixmix.io:5000/post/zZk1h5NIRrtR9MGaMj9ue3Lsn9+kkZAzwHlBvwodsDk=.sha256
