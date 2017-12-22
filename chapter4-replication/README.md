#### replication
* Usually helps with throughput
* Don’t shard unless data doesn’t fit on disk - different from partitioning. Sharding is horizontal partitioning
* Different kinds of replication - single leader, multi leader, leaderless (ex) cassandra)
* Linearizability vs Serializability - http://www.bailis.org/blog/linearizability-versus-serializability/
	* Linearizability is the C in CAP. Writes appear instantaneous
	* Serializability is the I in ACID. Requires some total ordering of events. i.e for a group of transactions on some items, some serial order exists. If two transactions are executing concurrently, each one will see the world as if they were executing sequentially, and if one needs to read data that is written by another, it will have to wait until the other is finished
* Is CAP theorem useful? https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html
* Ex) https://github.com/Bradfield/replicated-chat-exercise-2017-08

#### MAC vs Signatures vs Hashes
MACs perform a lot better. See https://crypto.stackexchange.com/a/5647


#### How does consensus work - https://raft.github.io/raft.pdf

