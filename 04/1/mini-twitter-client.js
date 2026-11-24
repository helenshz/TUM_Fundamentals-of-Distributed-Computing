#!/usr/bin/env node
// Small Node CLI for the mini-twitter server
// Usage:
//   node mini-twitter-client.js list
//   node mini-twitter-client.js send "Name" "Message"

const BASE = process.env.MINI_TWITTER_BASE || 'http://localhost:3000';

async function listTweets(){
  //fetch tweet data from server
  const res = await fetch(`${BASE}/tweets`);

  //check for HTTP error
  if(!res.ok) throw new Error('Failed to fetch tweets: ' + res.status);

  //parse JSON data from response
  const data = await res.json();

  //data is empty?
  if(!Array.isArray(data) || data.length===0){
    console.log('No tweets');
    return;
  }
  //print tweets in reverse order (latest first)
  data.slice().reverse().forEach(t => {
    console.log('---');
    console.log(t.sender || 'anonymous');
    console.log(t.message || '');
  });
}

async function sendTweet(name, text){
  //construct payload (tweet object)
  const payload = { tweet: { sender: name, message: text }  };
  //send tweet to server
  const res = await fetch(`${BASE}/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  //check for HTTP error
  if(!res.ok){
    const txt = await res.text();
    throw new Error('Send failed: ' + res.status + ' ' + txt);
  }
  const r = await res.text();
  console.log('Sent. Server response:', r);
}

async function main(){
  const [,, cmd, a, b] = process.argv;
  try {
    if(cmd === 'list'){
      await listTweets();
    } else if(cmd === 'send'){
      if(!a || !b){
        console.error("Usage: send 'Name' 'Message'");
        process.exit(1);
      }
      await sendTweet(a, b);
    } else {
      console.log("Usage:\n  node mini-twitter-client.js list\n  node mini-twitter-client.js send 'Name' 'Message'\n");
    }
  }catch(err){
    console.error('Error:', err.message);
    process.exit(1);
  }
}

main();
