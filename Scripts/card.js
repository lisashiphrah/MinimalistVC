/********************************************************************************************

Author: Cassia Almeida
Description: This javascripts contains all the functions needed to make this page works.

********************************************************************************************/

//Modify this line to change colors
var colorClass = "green";


$(document).ready(function () {
    DetectTheme();
});

//Controls the actions from the menu
function MenuFunctions() {
    
    $('.contentMenu li').hover(function () {
        $(this).addClass('background-' + colorClass);
        var srcImage = $(this).find('img').attr('src');
        srcImage = srcImage.replace('White', '');
        $(this).find('img').attr('src', srcImage);

    }, function () {
        $(this).removeClass('background-' + colorClass);
        var srcImage = $(this).find('img').attr('src');
        srcImage = srcImage.replace('.png', 'White.png');
        $(this).find('img').attr('src', srcImage);
    });

}

//Detects the new selected theme
function DetectTheme() {
    $('#sendButton').addClass('sendButton-' + colorClass);
    
    $('.themes div').click(function() {
        $('#sendButton').removeClass('sendButton-' + colorClass);
        colorClass = $(this).attr('id');
        $('#sendButton').addClass('sendButton-' + colorClass);
    });
    
    InitializeContent();
    MenuFunctions();
}

//Inicialize components
function InitializeContent() {
    $('.resumeContent').hide();
    $('.portifolioContent').hide();
    $('.contactContent').hide();
    $('.contentMenu').hide();

    $('.contentMenu').fadeIn(900);
    $('.profileContent').fadeIn(900);
}

//Open profile context
function OpenProfile() {
    $('#content').fadeOut('fast', function() {
        $('.profileContent').show();
        $('.resumeContent').hide();
        $('.portifolioContent').hide();
        $('.contactContent').hide();
        $('#content').fadeIn();
    });
    
}

//Open resume context
function OpenResume() {
    $('#content').fadeOut('fast', function() {
        $('.resumeContent').show();
        $('.profileContent').hide();
        $('.portifolioContent').hide();
        $('.contactContent').hide();
        $('#content').fadeIn();
    });
}

//Open portifolio context
function OpenPortifolio() {
    $('#content').fadeOut('fast', function() {
        $('.portifolioContent').show();
        $('.profileContent').hide();
        $('.resumeContent').hide();
        $('.contactContent').hide();
        $('#content').fadeIn();
    });
}

//Open contact context
function OpenContact() {
    $('#content').fadeOut('fast', function() {
        $('.contactContent').show();
        $('.profileContent').hide();
        $('.resumeContent').hide();
        $('.portifolioContent').hide();
        $('#content').fadeIn();
    });
}

//Open facebook profile
function OpenFacebook() {
    var facebookLink = 'http://www.' + $('#facebookLink').text();
    window.open(facebookLink, '_blank');
}

//Open twitter profile
function OpenTwitter() {
    var twitterLink = 'http://www.' + $('#twitterLink').text();
    window.open(twitterLink, '_blank');
}

//Open window to send an email
function OpenEmail() {
    var emailLink = 'mailto:' + $('#emailLink').text();
    window.open(emailLink);
}

//Open linkedin profile
function OpenLinkedin() {
    var linkedinLink = 'http://www.' + $('#linkedinLink').text();
    window.open(linkedinLink, '_blank');
}
