// simulating simple queue based communication between 2 processes
var queue = [];
const RING_NOW = 1;
const RING_LATER = 2;
const NUM_SECONDS = 1;
function enqueue() {
    queue.push([RING_NOW]);
    queue.push([RING_LATER, NUM_SECONDS, 4000]);
}

enqueue();

function bellDequeue() {
    function ringBell() {
        if (queue.length > 0) {
            var message = queue.shift();
            if (message[0] == RING_NOW) {
                console.log("Ringing \u0007");
            } else if (message[0] == RING_LATER) {
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
