console.log('Bot is starting')

var Twit = require('twit');



var T = new Twit({
  consumer_key:         'AM7dUHfhhRzp0etkEb6MlRV4A',
  consumer_secret:      '1KrTMwyhpkRcwk3IYAbUB1TWn2mVBLeHRDp088ssrDAOYOtBOF',
  access_token:         '1248464980908724225-QTIHRuAw0uwiwtzaMoXUuDAqujGZaG',
  access_token_secret:  'LY30zdQTQj06rG7mCE7ALaYE7PByUV06zJcfuZTVBAfVh',
});

var stream = T.stream('statuses/filter', { track: '@PhoenixCrea2ion' })
var s2=T.stream('statuses/filter', { track: '#createphoenix' })
stream.on('tweet',followed)
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
// twitThat('having bad internet is very bad thing')
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
