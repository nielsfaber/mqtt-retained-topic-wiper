


var mqtt = require('mqtt');

var myArgs = process.argv;
if (myArgs.length != 3 || !myArgs[2] || !String(myArgs[2]).length) {
  console.log('missing argument for base_topic');
  process.exit();
}
var base_topic = myArgs[2];
var client = mqtt.connect('mqtt://127.0.0.1');
var count = 0;
client.on('connect', () => {
  client.subscribe(`${base_topic}/#`);
  console.log(`listening for retained topics on ${base_topic}...`);
  setTimeout(() => {
    console.log(`Completed, total of ${count} topics where cleared`);
    process.exit();
  }, 1000);
});

client.on('message', (topic, message) => {
  if (!message.toString().length) return;
  count = count + 1;
  client.publish(topic, null, { retain: true });
  console.log(`topic ${topic} retains payload '${message.toString()}' --> cleared`);
});
