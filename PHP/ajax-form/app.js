$(function() {
    // 1. get the form
    const form = $('#subscriptionForm');
    const formMessage = $('#formMessage');

    // 2. setup one event listener for form, intercept the form submit event
    $(form).submit(function(e) {
        e.preventDefault();
    });

    // 3. serialize the form data.
    const formData = $(form).serialize();

    // 4. pass the ajax method the form data
    $.ajax({
       type: 'POST',
       url: $(form).attr('action'), // location of the script the form data will be sent to
       data: formData // populate the data with formData
     }) 
     .done(function(response) {
         // 5. handle the successful response from the server
         $(formMessage).removeClass('is-hidden');
         $(formMessage).addClass('is-visible');

         // 6. set the message text for that div
         $(formMessage).text(response);

         // 7. clear the inputs
         $('#name').val('');
         $('#email').val('');
         $('#message').val('');
     })
     .fail(function(data) {
         // 8. make sure the message div has the hidden class
         $(formMessage).removeClass('is-visible');
         $(formMessage).addClass('is-hidden');

         // 9. set the message text
         if (data.responseText !== '') {
             $(formMessage).text(data.responseText);
         } else {
             $(formMessage).text('There was an error sorry please try again.');
         }
     });

});