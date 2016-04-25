//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    
    //Create a function to listen for clicks on the "login" button.
    //1. When a user clicks the "login" button, hide the login form elements on the page.
    //2. Fill the user's first and last name into `div.user-info`.
      //$('.btn-sm') pulls in all .btn-sm buttons, so don't use this
  
$('#login-form .btn').on('click', function (event) {
  //this is button inside the login-form. when clicked, it will execute this function; that's the event. Event not required, 
  //but can now refer to it later on if needed, e.g. as 'event-target'.   
  
 $('#login-form').hide(300);
  // or us .fadeOut instead of .hide
  //.user-info is only part of a class and that's OK
  //this one works:$('.user-info').show(); 
 
 
  $('.user-fullname').text(userInfo.firstName  + " " + userInfo.lastName);
  //the trick for displaying the user name was removingthe quote marks!
  //tried html instead of show, but it showed what was in parantheses after .html
  $('.user-info').show(); 
});

 });              
        
  //.text(getters and setters) - get text or set text
  

//_____________________View_Details______________________________
    // TODO: Create a function to listen for clicks on all the "View Details"
    // buttons so that when a user clicks a "View Details" button they see
    // the content contained in the elements with the class "details" in the
    // proper part of the screen.
    //      1. When user clicks a "view details" button, find the parent of that element.
    //      2. Within that parent, find all the elements that have the class `details`.
    //      3. Toggle visibility of all the elements within that parent with the class `details`.
    //      4. Change the text of the "view details" button to read "hide details" so the user
    //          understands they can hide the text again.
  $('.view-details').on('click', function(event) {
    console.log(event);
    var targetElement = event.target;
   
    var container = targetElement.parentElement.parentElement;

    $(container).find('.details').each(function(index, element){
        if ($(element).is(':visible')){
            $(element).fadeOut();
            targetElement.innerText = "View Details"
        } else { //toggle from view to hide details
            $(element).fadeIn();
            targetElement.innerText = "Hide Details"
        }
        });
        });
  
//______________________________________VOTE____________________________
    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    //      2. When a button is clicked, look at the `data-vote` attribute to determine
    //          what the user is voting for ("great" or "greatest").
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.
  ////////////////////////////////////////////////////

    // var voteCounts = $(this).attr('.data-vote');
 
		var voteCounts = {
       great: 0,
       greatest: 0,
       total: 0,
		}
			
    $('.vote').on('click', function(event) {
    
			$(this).attr('voteCounts'); 
  
       if(voteCounts==great) {
        voteCounts.great==voteCounts.great +1;
         
       if(voteCounts==greatest) {
       voteCounts.greatest==voteCounts.greatest +1;
            
       voteCounts.total==total +1;
       }
			 }
      var greatPercent = ((voteCounts.great/voteCounts.total)*100 + '%' );
        //$('.great-progress').css('width', greatPercent).width(); 
        $('.great-progress').css(greatPercent).width(); 
      var greatestPercent = ((voteCounts.greatest/voteCounts.total)*100 + '%');
       $('.greatest-progress').css('width', greatestPercent).width();   
      
		});



      
       

        
 

    


