// This is question answers variable........... 

var questionsAndAnswers = [
    {
        "question": "What is your name",
        "answer": "My name is Assistant."
    },
    {
        "question": "How are you",
        "answer": "I'm doing well, thank you."
    },
    {
        "question": "What can you do",
        "answer": "I can assist with programming, technical tasks, and information retrieval."
    },
    {
        "question": "Hi, how are you",
        "answer": "Great, thanks for asking!"
        },
        {
        "question": "What's up",
        "answer": "Doing well, you?"
        },
        {
        "question": "Ready for class",
        "answer": "Absolutely!"
        },
        {
        "question": "Favorite subject",
        "answer": "That's a tough one!"
        },
        {
        "question": "Need help",
        "answer": "Always happy to learn more!"
        },
        {
        "question": "Section 101",
        "answer": "Yep, that's me!"
        },
        {
        "question": "Liking this class?",
        "answer": "So far, so good!"
        },
        {
        "question": "Big plans today?",
        "answer": "Just focusing on school!"
        },
        {
        "question": "Early bird?",
        "answer": "Depends on the day!"
        },
        {
        "question": "Coffee or tea",
        "answer": "Coffee all the way!"
        },
        {
        "question": "Prefer books or movies?",
        "answer": "I enjoy both!"
        },
        {
        "question": "Team player?",
        "answer": "Definitely!"
        },
        {
        "question": "Tests or projects?",
        "answer": "Depends on the topic!"
        },
        {
        "question": "Free time plans?",
        "answer": "Probably catching up on homework!"
        },
        {
        "question": "Music lover?",
        "answer": "Absolutely!"
        },
        {
        "question": "Favorite genre?",
        "answer": "It depends on my mood!"
        },
        {
        "question": "Sports fan?",
        "answer": "Definitely!"
        },
        {
        "question": "Favorite team?",
        "answer": "The [insert team name]!"
        },
        {
        "question": "Future plans?",
        "answer": "Still figuring it out!"
        },
        {
        "question": "Dream job?",
        "answer": "Something that makes a difference!"
        },
        {
        "question": "Learning a new skill?",
        "answer": "Always trying to!"
        },
        {
        "question": "Favorite quote?",
        "answer": "Maybe next time!"
        },
        {
        "question": "Advice for others?",
        "answer": "Work hard and never give up!"
        },
        {
        "question": "Most challenging class?",
        "answer": "[Insert subject name]"
        },
        {
        "question": "Most rewarding class?",
        "answer": "[Insert subject name]"
        },
        {
        "question": "Enjoy weekends",
        "answer": "Absolutely!"
        },
        {
        "question": "Weekend plans",
        "answer": "Relaxing and recharging!"
        },
        {
        "question": "See you next class",
        "answer": "See you then!"
        }
    
];




var sendBtn=document.getElementById("sendBtn");
var textbox=document.getElementById('textbox');
var chatContainer=document.getElementById('chatContainer');

var user={message:""}; 

function sendMessage(userMessage){
    var messageElement= document.createElement('div');

    messageElement.style.textAlign="right";
    messageElement.style.margin="10px";

    messageElement.innerHTML="<span> You:</span>" +
    "<span>"+userMessage+"</span>";

    chatContainer.appendChild(messageElement);


}




function chatbotResponse(userMessage){
    var chatbotmessage = "";
    
    for (var i = 0; i < questionsAndAnswers.length; i++) {
        if (userMessage.toLowerCase() === questionsAndAnswers[i].question.toLowerCase()) {
            chatbotmessage = questionsAndAnswers[i].answer;
            break; 
        }
    }

   
    if (chatbotmessage === "") {
        chatbotmessage = "I'm not sure how to respond to that.";
    }

    var messageElement = document.createElement('div');
    messageElement.innerHTML = "<span>Chatbot:</span>" + "<span>" + chatbotmessage + "</span>";
    chatContainer.appendChild(messageElement);
}








sendBtn.addEventListener('click', function(e){
     var userMessage=textbox.value;
    if(userMessage==""){
        alert('please type a message')
    }
    else{
         let userMessageText=userMessage.trim();
         user.message=userMessageText;

         textbox.value="";
         sendMessage(userMessageText);

         chatbotResponse(userMessageText);

    }
}) 