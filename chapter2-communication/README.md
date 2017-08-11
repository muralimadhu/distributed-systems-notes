#### What kind ?
RPC or messaging are common. Messaging is the most common. Communication can be sync or async, persistent or transient

#### The Web Model
* Http -> for Req/Res (client/server model)
* Json(mostly) -> for message encoding
* Web Sockets -> for lower latency messaging
* SSL -> Secure connections with CA infrastructure. How SSL works ?
	* Browser connects to a web server (website) secured with SSL (https). Browser requests that the server identify itself.

	* Server sends a copy of its SSL Certificate, including the server’s public key.

	* Browser checks the certificate root against a list of trusted CAs and that the certificate is unexpired, unrevoked, and that its common name is valid for the website that it is connecting to. If the browser trusts the certificate, it creates, encrypts, and sends back a symmetric session key using the server’s public key.

 
	* Server decrypts the symmetric session key using its private key and sends back an acknowledgement encrypted with the session key to start the encrypted session.

 
	* Server and Browser now encrypt all transmitted data with the session key.

* DNS -> Domain name resolution

This model is inherently client/server. Its not really distributed. Discussion: How would a distributed browser work ? Ex) What if instead of requesting for a resource from a server, the browser first checks other nodes on the LAN for a recent copy of that page ? How will it deal with multiple responses from different nodes ? 

#### Message Format
Think about reducing message size. JSON is readable but very large. Binary data or bytes is the best size wise, but is not very debuggable. Think about BSON. Ex) Resp (Redis Protocol)

#### Messaging
Mostly involves some kind of a queue manager, and a bunch of queues. Check [ZeroMQ guide](http://zguide.zeromq.org/page:all) for an example

