const cowsay = require('cowsay');
// test
const serve = require('workspace-a/lib').serve;
serve(cowsay.say({
    text: "Hellooo froom workspace-b!",
    e: "oO",
    T: "U "
}))
