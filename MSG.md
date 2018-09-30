Hahahahaha
Sure
I’ll only reply with stack overflow links
Bruh. That's not a hint. I've been doing that
XD
Yes it is XD
https://www.google.co.jp/amp/4dev.tech/2017/12/how-to-load-a-json-file-in-reactjs/amp/
ok ok
me first. then you.
thankzzz...
THU 11:28 AM
I dont get it. 😑
https://codesandbox       (insert .io)     /embed/q6vn81loq?codemirror=1
1. Select Key.js
2. Toggle the tab on the top right of the screen.
ah
its not a list
its an object
i guess this is the one you want?
Hmmp.... I'll check that out.
THU 10:36 PM
Oh don’t forget to unescape the text! Haha that’s another quite time consuming but valuable lesson
what?
unescape the text?
i'm still working on calling the json
such a pain.... such a paaaiiin.
Wow
that sarcasm
Hahaha
Hahahahaha
XD
Ask questions
I’ll reply them tomorrow
Night!
Ok Ok.
Gwoodnight!!!
XD
FRI 8:45 AM
I need to go back to basics and study JSON data types. There seems to be a difference in how you call string, number, object, array, etc.
Mmm???
I think they appear in jsx exactly the same
I only realised my gap when the 'right' error message popped up.
What comes out of the json appears in HTML
Hahahah oh
What was it?
So, I can call some, but not all of your json data. And this bugger showed up...
Hahahahaha a list of things
Called an array in js
You have to .map it like you did initially
It’s great you found this out
I only learnt it from my colleagues code
About time for me. 2 days!!! Omg.
So I'm guessing that...
Hmm what were the other errors like?
...the entities part is an array.
XD well I called it entities and not entity XD XD XD
Syntax. You dont get much from syntax
Hmmm ok what’s your conclusion?
So how do you determine type from json? Haha
I'm going to learn that up today. I dont know yet.
XD I actually spent half a day wondering why I couldn’t match two tweet ids together and then finally realized that the thing coming out of the json was a string and I was comparing against integers
And learn unescape. Whatever that is
Oh XD I meant URL encoding
All the & amp things
But first... breakfast and office work.
Ah, I see. Okay
Hahahaha
Hmm I think you just need to read up on JavaScript types
As well as how to find out what type it is and how to use those types
oh. They're called javascript types.
FRI 11:00 AM
XD just think of them as python types with different names
Strings numbers nulls arrays and objects
Is
Strings int/float None list and dict
I think I'm on to something
FRI 4:56 PM
Did you just set me up to call this json structure? https://codesandbox (insert .io) /embed/q6vn81loq?codemirror=1
Here's the structure.
Cause its sure as hell complicated.
FRI 7:15 PM
yeap that's quite complicated XD
its a recursive set of data
the first json has the set of stuff, plus children, and in each children, there is the same set of stuff
it took me damn long to get around to understanding it as well as actually code it up XD
know the phrase 'turtles all the way down'? XD
programmers use that a lot hahaa
and yes your understanding of the structure  is correct XD
good stuff! now just to put them into cards, with all entities turned into info for the card, and a children means it branches off from the original tweet (with multiple branches, because multiple users reply to him)
and if someone replies to the reply, they get a child too!!!!!!
hahahah that's in this example so its quite good, but try calling the api to see if you get other arrangements too
but basically it starts from a first tweet (the url as input)
also if you could help me stress test the api it would help too XD
https://transit-app-landing-page.now.sh
XD I’ve added the responsive text based on scroll position, as well as adjusted the page3 to work properly from iPhone 5 screen size upward XD
The text works sweet on desktop but on mobile the positioning is a bit funky so I’ll have to fix that again XD
The code to add that interactivity was surprisingly non trivial given the end result >< but damn interesting to write hahaha
W.o.w
Your app.
Its so good
My goodness
XD it’s just the landing page
Which is amazing in itself. Apps today don't even do that yet
Hahaha oh I think some do
I plan to turn it into react native for my colleague XD
You're picking up native already?
Might involve a rewrite of the schedule components but at least I have a fair idea of how it works
Oh nope XD the other programmer is doing it
I’ll just ride on his app XD
And start learning when I work on it XD XD
Damn. Flying before you start to walk eh... smart.
Ahahahahh that’s sorta how I got around to improving in react
I have a feeling I’ll probably be quite a lot less comfortable if I didn’t have the app to work on hahaha
sounds exactly the same way how I learnt react from ya. Hahaha
and back to the top, I haven't finished loading the data locally yet. I'm only half way figuring out what the WHOLE json file looks like. I cant load the second level children the same way I load the first - idk why. Might be awhile before I start calling your api.
So yeh
Hmmmm XD XD you plan to load everything and display it?
I should, no?
I can only load like 10 lines for now
What about thinking of it as: every time you see a child(ren), run the same code before
So your code is one that takes an object (dictionary), then processes every key in the object, and at the very last, for every child the object has, call the same exact function again
That’s how I constructed the json. Calling generate_tweet_data() inside generate_tweet_data()
It’s a bit mind blowing, it still is for me, and I still can’t really get my head around it the same way I see a non-recursive function XD
Aha. Just like form 5 add math functions. Nice. I'll try that
XD XD k then hahahah I’ll be doing something on Sunday XD hopefully some typescript and then c# XD because another personal project needs c#
Good coding! XD
Ah. Nice stuff. Learning new stuff every week.
Okay!
SAT 8:48 PM
So, I was trying to access your Flasgger API. I went 'Try it out' > 'Execute' > 'Request URL'. I pulled the URL and got an error message - Failed to fetch. 

So I downloaded the data instead. And loaded it locally! https://codesandbox.io/s/q6vn81loq
Now I've gotta work on Flassger, what should I know, and how should I use it?
SAT 9:59 PM
Erm flasgger is an automatic api creator
You just need to call the api actually
Flasgger is for when you are too lazy to do all the HTML and css and stuff to make your api work, so you plug in flasgger and it works
It’s based on swagger
Hmm pretty sure it works XD it even works with mobile twitter which was surprising XD
Just go to twitter, click on any tweet with a set of replies
Paste into the endpoint and run
Oooohhh I think o know what you mean
See the box that says request URL? That’s the one you want to put in your frontend
The GET request that starts with ?url=whateverurl
The bit after URL is the thing that the user of the website can input to see the corresponding reply tree
Mm but yes, loading locally works too nice! So the only thing left is to load from API
because it means the json structure has been parsed correctly
Hmm I dunno why I can’t send the codesandbox link
XD if you wanna see the solution check it out XD
But I realized
I made it way harder that it needed to be >< sorry sorry
Didn’t notice that the keys were always changing
The more structured way is to give it a key ‘label’ and the value
I’ll change that in the api
Ah. You need to send me the code. Or fork my sandbox. If you give me that url, i'll load up my own sandbox.
Yeap! I know what you're talking about. I loaded the GET request url (http://tweet-tree-backend.herokuapp.com/v1/tweets/tree?url=https%3A%2F%2Ftwitter.com%2Ffchollet%2Fstatus%2F1044465230317645824)
Walah.... 'Failed to fetch' your flasgger url.
I'll try another way. Maybe that specific method i used to load was stupid. XD
Oh? Check the console
Mmm I didn’t see your loading code XD but edited the json display code to not rely on hardcoded entities
Also the screen doesn’t usually tell you anything useful, always go see the console
Oh what in the world
It reverted ><
Ok I’ll send you an edit tomorrow XD
Gonna sleep!
Ah. Alright. All the best with your C# tomorrow.
Gwoodnight!
12:50 PM
mm slight update
XD
{
            "label": "interestingness",
            "salience": 0.1374233067035675,
            "type": "OTHER"
        },
        {
            "label": "rise",
            "salience": 0.10632061958312988,
            "type": "OTHER"
        },
        {
            "label": "human designer",
            "salience": 0.02982301451265812,
            "type": "PERSON"
        },
        {
            "label": "algorithms",
            "salience": 0.023752950131893158,
            "type": "OTHER"
        },
        {
            "label": "forms",
            "salience": 0.02278689108788967,
            "type": "OTHER"
        }
this is what the new format for entities looks like
instead of "forms": {"salience": 12.32.131, "type": "OTHER"}
its now {"label": "forms"... etc}
response_1538283100914.json
ok and i think the backend is now updated XD if you look at the json now you might see that it makes a lot more sense
https://codesandbox.io/s/4wkkpl7kz4
this is the version from yesterday, dealing with funny keys (the old API)
notice it doesn't deal with children yet
erm ohshit i coded over the last one XD
well just look at it then, it has a function called RenderTweetObject that calls itself at every children to create the same output, so it renders the entire structure of the json output, children and all. (only it's very messy cause all children look the same)
you're getting there XD this is about the time to start structuring your code so you don't lose track of it in a superlong file
oh if you have the fetch code you want me to look at just send it to me!
p.s. the code i just wrote for you won't work with the new API XD XD XD XD cause i switched out the funny keys
I'm lost - ish. 😅 its ok. This is good. I'll just go over your code and try to make sense of it
Your latest code is here right? 4wkkpl7kz4
In this codesandbox id o mean
Yeap hahaha
The one that deals with recursive children
Okeh
3:20 PM
Does it make sense? XD
I'm out til night actually. I havent dive into it yet.
Sorreh.
XD no worries haha enjoy your day!
4:37 PM
here's a little link i use as my journal of whatever i need to do with react XD
https://react-playground-tliqun-rkzyvqgsww.now.sh/main
