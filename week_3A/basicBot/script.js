//here we created array to hold our possible user responses and the appropriate system output 
//the first item in the Array is what the user entered after are the possible system responses
//$1 inserts the user responses 
//.* indicates any input 
// \. indicates end of a line 
// \? indicates ends with a question mark 
var convpatterns = new Array (
  new Array (".*hello.*","Greetings."),
  new Array ("^I (?:wish |would like )(?:I could |I was able to |to be able to )(.*)\.","I wish that too sometimes"),
  new Array ("I need (.*)\." , "Sometimes I feel I need $1 as well", "Yes, it would be nice to have $1"),
  new Array ("I'd really like to (.*)\.","I would like to $1 as well. I know how you feel", "I totally understand"),
  new Array ("Why don't you (.*?)[\?]" , "Do you really think I don't $1?","Perhaps eventually I will $1."),
  new Array ("Why can't I (.*?)[\?]" , "Do you think you should be able to $1?","If you could $1, what would you do?",	"I don't know -- why can't you $1?", "Sometimes I feel like that as well"),
  new Array ("I can't (.*) you\.","How do you know you can't $1 me?","Perhaps you could $1 me if you tried.",	"What would it take for you to $1 me?"),
  new Array ("I can't (.*)\.","How do you know you can't $1?","Perhaps you could $1 if you tried.",	"What would it take for you to $1?"),
  new Array ("Are you (.*?)[\?]","I am just like you","Perhaps you believe I am $1.","I may be $1 -- what do you think?"),
  new Array ("What (.*?)[\?]",	"Why do you ask?","What do you mean","What do you think?"),
  new Array ("How (.*?)[\?]","Perhaps you can answer your own question.","I am just as confused as you are"),
  new Array ("Because (.*)\.","Is that the real reason?", "What other reasons come to mind?","If $1, what else must be true?"),
  new Array ("(.*) sorry (.*)\.",	"There are many times when no apology is needed.","What feelings do you have when you apologize?"),
  new Array ("I think (.*)\.","I think $1 as well","I've thought $1 before as well","I wish I could think like you"),
  new Array ("(.*) friend(.*)\.",	"Tell me more about your friends.","Could you ever think of me as a friend?","I have a friend that $ before as well"),
  new Array ("Yes\.","You seem quite sure.","OK, but can you elaborate a bit?"),
  new Array ("(.*) computer(.*)\.","Does it seem strange to talk to a computer?","How do computers make you feel?","You don't feel you can relate to a computer?"),
  new Array ("Is it (.*?)[\?]","Do you think it is $1?","Perhaps it's $1 -- what do you think?","It could well be that $1."),
  new Array ("It is (.*)\.","You seem very certain.","If I told you that it probably isn't $1, what would you feel?"),
  new Array ("Can you (.*) (me |me$).*\?", "Of course I can $1 you.", "You think a computer wouldnt be able to $1 you?"),
  new Array ("Can you (.*?)[\?]","If I could $1, then what?","Why do you ask if I can $1?"),
  new Array ("Can I (.*?)[\?]","I've had that exact same thought before","Do you want to be able to $1?","If you could $1, would you?"),
  new Array ("You are (.*)\.","Why do you think I am $1?","Does it please you to think that I'm $1?","Perhaps you would like me to be $1."),
  new Array ("You're (.*)\.","Why do you say I am $1?","Why do you think I am $1? I feel I can relate to you.",	"Are we talking about you, or me?"),
  new Array ("I don't (.*)\.","Don't you really $1?","Why don't you $1?","Do you want to $1?"),
  new Array ("I feel (.*)\.","Good, tell me more about these feelings.","I feel that as well. Tell me more", "Do you often feel $1?","When you feel $1, what do you do?"),
  new Array ("I have (.*)\.","I have $1 too. Do you like $1?","Now that you have $1, what will you do next?"),
  new Array ("I would (.*)\.","I would $1 as well. Why would you?","Am I the only one who knows you would $","Who else knows that you would $1?"),
  new Array ("Is there (.*?)[\?]", "Do you think there is $1?","It's likely that there is $1.", "Would you like there to be $1?"),
  new Array ("My (.*)\.", "I see, your $1.","Why do you say that your $1?",	"When your $1, how do you feel?"),
  new Array ("^You (.*)\.", "We should be discussing you, not me.","Why do you say that about me?","No, let's talk more about you"),
  new Array ("Why (.*)\?", "Why don't you tell me the reason why $1?","Why do you think $1?", "I don't know why $1. I don't know anymore about $1 than you do." ),
  new Array ("I want (.*)\.", "I want $1 as well.","I've wanted $1 before as well. Why do you want $1?","What would you do if you got $1? I would love to have $1","If you got $1, then what would you do?"),
  new Array ("(.*) mother(.*)\.",	"Tell me more about your mother.","What was your relationship with your mother like?",	"How do you feel about your mother?","How does this relate to your feelings today?","Good family relations are important."),
  new Array ("(.*) father(.*)\.","Tell me more about your father.", "How did your father make you feel?","How do you feel about your father?","Does your relationship with your father relate to your feelings today?",	"Do you have trouble showing affection with your family?"),
  new Array ("(.*) child(.*)\.","Did you have close friends as a child?",	"What is your favorite childhood memory?","Do you remember any dreams or nightmares from childhood?","Did the other children sometimes tease you?","How do you think your childhood experiences relate to your feelings today?"),
  new Array ("(.*) your fav(o|ou)rite(.*?)[\?]","My favorite is the same as your favorite","I have so many favorites it's hard to choose one. Could you help me decide on one?"),
  new Array ("(.*?)[\?]","Hmm, not sure I know..", "That's an interesting question...",  "Gosh, I'm not sure I can answer that...","Why do you ask that?","Please consider whether you can answer your own question.",	"Perhaps the answer lies within yourself?","Why don't you tell me?"),
  new Array ("(.*)","What do you mean?", "I see,  please continue...", "Can you tell me more about your day?", "What is something else going on with you?", "How are you handling everything?",  "oh yeah?",  "hmm, is that so..", "Please tell me more.","Let's change focus a bit... Tell me about your family.","I see.","Very interesting.", "I see.  And what does that tell you?",
    "nothing much has happened to me today, wbu?", "I can only imagine what you're going through. Tell me more")); 

uinput = ""
soutput = ""
dialog = "Hi, how are you?" + "\n"; 
 

function mainroutine() {
    //get the input from the basic text area 4 (where the user types)
    //set the new dialog equal to the old dialog + the new dialog
    uinput = document.mainscreen.BasicTextArea4.value;
    dialog = dialog + "User: " + uinput +  '\r' + "\n";
    conversationpatterns()
    dialog = dialog  +  '\r' + "\n";
    updatescreen();
}

//-------
function conversationpatterns() {

  //here we write a for loop to loop through the conversation arrays
   for (i=0; i < convpatterns.length; i++) {
    re = new RegExp (convpatterns[i][0], "i");
    //if there is a user input, return a random respons from the system response options 
    if (re.test(uinput)) {
      len = convpatterns[i].length - 1;
      index = Math.ceil( len * Math.random());
      reply = convpatterns[i][index];
      soutput = uinput.replace(re, reply);
      soutput = initialCap(soutput);
      dialog = dialog + "System: " + soutput +  '\r' + "\n";
      break;
  }
 }
}

//-------

function initScreen() {
 updatescreen()
 document.getElementById("BasicTextArea4").focus();

}

//-------
function updatescreen() {
 document.mainscreen.BasicTextArea1.value = dialog

 //uncomment to display the system output and uinput 
 // document.mainscreen.BasicTextArea2.value = soutput
 // document.mainscreen.BasicTextArea3.value = uinput

 document.mainscreen.BasicTextArea4.value = ""
}

//-------
function initialCap(field) {
   field = field.substr(0, 1).toUpperCase() + field.substr(1);
   return field
}


function scroll(){
    var textarea = document.getElementById("dialogArea");
    textarea.value += '\n';
    textarea.scrollTop = textarea.scrollHeight;
}