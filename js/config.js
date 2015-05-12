// for navigator language
// var lang = window.navigator.language;
// you can change the language
var lang = 'en';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'zip':'52240,us',
    'units':'imperial',
    'lang':lang
};

// Calendar can be changed from the calendar php file
var feed = 'http://www.cbsnews.com/latest/rss/us';
var numCalendarEvents = 10;

// compliments:
var morning = [
            'Good morning!',
            'Make today great.',
            'How was your sleep?'
        ];
        
var afternoon = [
            'Hope your day is going well!',
            'You look great!',
            'You\'ve almost made it.'
        ];
       
var evening = [
            'Brush your teeth!',
            'Goodnight!',
            'Sleep tight!'
        ];
