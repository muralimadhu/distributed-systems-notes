#### Practical Definition
A bunch of nodes, acting independently, and communicating with each other, to achieve a common goal, often appearing to its users as a single coherent system

#### Why is it hard ?
* Each node may have its own notion of time, so no global clock to coordinate or synchronize
* Managing group membership - which node is in, and which node is out
* A whole bunch of failure situations to consider - node failure, network failure etc
* Manage transparency to the user - how transparent should to the system be to the user i.e should we surface replication failure, migration failure, storage failure etc. In practice, its not possible for the system to be completely transparent and act like a single node system
* Manage message passing - UDP or TCP/IP ? UDP is faster, because no error checking, and no order. Ex) Streaming video. TCP/IP is slower because packets are error checked and received in order. Ex) HTTP requests
* Operational costs of managing a distributed system is often neglected

#### Before distributing your system
* First rule of distributed systems - Dont distribute your system
* [Amdahl's Law] (https://home.wlu.edu/~whaleyt/classes/parallel/topics/amdahl.html)
When thinking about performance increase, think about speeding up your application first, before adding more resources. Ex) If 20% of your program is computation (not parallelizable), increasing the number of cores from 1 to 10 will only give a ~3.5 times increase in performance. Performance is always limited by the weakest link(serial processing in this case)
* Virtual cores dont give the same performance as a real cores. Running on AWS may seem easy, but performance can be misleading. Ex) your program may run on hyperthreads( vs a regular thread ), hypervisor vm (IO is a lot slower due to switching costs, double the number of context switches compared to not using a vm), and may miss OS cache more times because it may share the cache with other programs. Think hard before deciding to run on a vm. More info on caches, hyperthreads, hypervisor: [Read this book] (http://pages.cs.wisc.edu/~remzi/OSTEP/0)

#### Concepts
* Scalability - Your system's ability to grow to a higher workload. Could be functional - how easily can new features be added, could be geographic - how easily can your system be run in a distributed manner in different geographies, could be load - how easily can your system be changed for increased load etc
* Consistency - Does requesting the same data from two different nodes at the same time always return the same result ? The consistency model determines how/when nodes see data changes 
* Availability - Responsiveness/uptime - How often does your system return a result
* Reliability - Fault tolerance - Ability to do the same thing all the time consistently. Doesnt mean highly available, or scalable. Ex) If a system is only up for 10 hours once a week( say every Tuesday ) and consistently maintains this behavior, its a reliable system
* Integrity - Ability to maintain data/resource integratity or constrains. If no matter what the request, data is never corrupted, its a sign of a sytem with highly integrity
* Safety - Ability to recover from failures. i.e how often does data get corrupted or system goes into some kind of unrecoverable state


#### Idempotent methods
Like a pure function - same input always generates same output. Discussion: Can HTTP POST be made idempotent ? Should PUT be used instead ? Ex) for a payment processing system, what happens if a POST request is made to create a payment, and response times out. Is it because payment was posted and response dint get back to the client, or did the server never receive the request ? Always try to use idempotent design, where in doing the same action multiple times shouldnt change the state of the system. Ex) In the payment POST scenario, make the client send a payment transaction id in a PUT request. Retryint the request shouldnt create new payments. 
