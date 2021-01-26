// Search

const prompt = require('prompt');

prompt.start();

prompt.get(['username', 'email'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
});

function onErr(err) {
    console.log(err);
    return 1;
}





// Search

const keywordArr = ['jim', 'john'];

const message = 'Hello john, how are you doing today?'

let has = keywordArr.reduce((r,v) => message.toLowerCase().includes(v.toLowerCase()) || r, false)

console.log(has)
