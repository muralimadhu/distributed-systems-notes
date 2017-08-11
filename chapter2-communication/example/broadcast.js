// NOT COMPLETE YET

// Channel -> has queues and topics. Each worker has a queue, and can subscribe to topics

var channel = {
    // topics: {
         // topic: []
    // },
    // queues: {
    //     id: []
    // }
};
const RING_NOW = 1;
const RING_LATER= 2;
const NUM_SECONDS = 1;

function pushTask(taskID) {
    join(channel, taskID);
    send(channel, members(channel), [RING_NOW])
    send(channel, members(channel), [RING_LATER, NUM_SECONDS, 4000])
}

function join(channel, id) {
   if(!channel.queues[id]) {
      channel.queues[id] = [];
   }
}

function joinTopic(channel, topic, id) {
    join(channel, id)
    if(!channel.topics[topic]){
       channel.topics[topic] = [id];
    }
    else{
        channe.topics[topic].push(id);
    }
}

function members(channel) {
    return Object.keys(channel.queues);
}

function send(channel, ids, message){
    for(id in ids) {
       if(channel.queues[id]) {
           channel.queues[id].push(message);
       }
    }
}

function receive(channel, id ) {
    if(channel[id] && channel[id].length > 0) {

    }
}


function bellDequeue() {
    function ringBell() {
        if (queue.length > 0) {
            var message = queue.shift();
            if(message[0] == RING_NOW){
                console.log("Ringing \u0007");
            }
            else if(message[0] == RING_LATER){
                setTimeout(() => {
                    console.log("Ringing \u0007");
            }, message[2]);
            }
            console.log(message);
        }
    }
    setInterval(ringBell, 100);
}

bellDequeue();

function printAndExit() {
    console.log(queue);
    process.exit();
}

setTimeout(printAndExit, 5000);

