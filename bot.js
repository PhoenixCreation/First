console.log('Bot is starting')

//twit is package used for twitter connection.
var Twit = require('twit');


// Enter you api keys here in appropriate fields. You can get your API keys on devloper account of twitter.
var T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
});
//here 'stream' variable will continously check for tweets with '@PhienixCrea2ion'
var stream = T.stream('statuses/filter', { track: '@PhoenixCrea2ion' })
//here 's2' varible will continously check for tweets with '#createphoenix'
var s2=T.stream('statuses/filter', { track: '#createphoenix' })
//if '@PhoenixCrea2ion' is found in tweet call followed function. This is not for following trigger.
stream.on('tweet',followed)
//if '#createphoenix' is found in tweet call hashedme function.
s2.on('tweet',hashedme)

function hashedme(eventMsg){
  var name=eventMsg.user.screen_name;
  var disname=eventMsg.user.name;
  var text=eventMsg.text;
   var r= Math.floor(Math.random()*1000)
   twitThat('@'+name+' Thank you for using my hashtag '+ r)
    console.log(disname + ' mentioned you :')
    console.log(text);
    console.log('-------------------------------------------------');

}

function followed(eventMsg){
  var name=eventMsg.user.screen_name;
  var disname=eventMsg.user.name;
  var text=eventMsg.text;
   var r= Math.floor(Math.random()*1000)
   twitThat('@'+name+' Thank you for mentioning me '+ r)
    console.log(disname + ' mentioned you :')
    console.log(text);
    console.log('-------------------------------------------------');

}

//function that tweets from your account
function twitThat(twitcontent){
  var x=Math.floor(Math.random(0)*1000)
  // var content = twitcontent+' '+x;
  var content = twitcontent;
  T.post('statuses/update', { status: content }, function(err, data, response) {
    if(err){
      console.log(err)
    }
    else{
      console.log("succesfuly twitted ")
    }
  })
}
