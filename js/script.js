/**
 * Delared Object collection
 */
var qoutes = [
{
    quote: 'Don\'t cry because it\'s over, smile because it happened.',
    source: 'Dr. Seuss',
    citation: null,
    year: null,
    tags:['Motivation']
},
{
    quote:'Already know you that which you need.',
    source:'Yoda',
    citation:'Star Wars',
    year:'1813',
    tags:['Humor', 'Movie']
},
{
    quote:'A Big Mac\'s a Big Mac, but they call it Le Big Mac.',
    source:'Vincent',
    citation:'Pulp Fiction',
    year:'1994',
    tags:['Life', 'Awesome', 'Just do it']
},
{
    quote:'Blah. blah, blah, blah, blah',
    source:'Avi',
    citation:'REVOLVER',
    year:'2005',
    tags:['Action', 'Suspence']
},
{
    quote:'In Russia we only had two TV channels. Channel One was propaganda. Channel Two consisted of a KGB officer telling you: Turn back at once to Channel One.',
    source:'Yakov Smirnoff',
    citation: null,
    year:null,
    tags:['Vodka', 'Red Bull']
},
{
    quote:'The weak can never forgive. Forgiveness is the attribute of the strong.',
    source:'Mahatma Gandhi',
    citation: null,
    year: null,
    tags:['Peace', 'Out']
}


];

/**
 * Function to generate random number
 */
function getRandomNumber() {
    var rand = Math.floor(Math.random() * 6);
    console.log(rand)
    return rand;
}


/**
 * Function to select random object from the object collection 
 */
function getRandomQuote() {
    var qouteObj = qoutes[getRandomNumber()];
    console.log(qouteObj)
    return qouteObj;
}

/**
 * Function to generate random back ground color
 */
function randBGColor(){
    var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
    document.body.style.setProperty('--main-bg-color', randomColor)
}

/**
 * Function to print property values on html front end
 */
function printQuote() {
    randBGColor()
    var message='';
    // assign returned object to a variable
    var qouteObj = getRandomQuote();
    // get the child web elements 
    var div = document.getElementById('quote-box');
    var children = div.children;
    console.log(children);
    if(qouteObj.quote != null) {children[0].innerHTML = qouteObj.quote;}
    if(qouteObj.source != null) {message += qouteObj.source}
    if(qouteObj.citation != null) {message += "<span class=\"citation\">"+qouteObj.citation+"</span>";}
    console.log(message);
    if(qouteObj.year != null) {message += "<span class=\"year\">"+qouteObj.year+"</span>";}
    console.log(message);
    children[1].innerHTML = message;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// Load values for the first time
printQuote();
// Set interval to load values after given time dration
setInterval(function(){ printQuote(); }, 30000);

