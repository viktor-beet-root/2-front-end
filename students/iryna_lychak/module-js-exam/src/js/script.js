


jQuery(function ($) {


    $(document).delegate('.btn.reply.btn_reply','click',function(e){ 
    
    $('#overlay').fadeIn(400, function(){ 
      $("button.button__cancel.btn").trigger('click');
    
    $('#modal_form') .css('display', 'block') .animate({opacity: 1, top: '0%', left: '0%'}, 200); });}); 
    
    $(document).delegate('#modal_close, #overlay','click',function(e){  $('#modal_form').animate({opacity: 0, top: '45%'}, 200, function(){ $(this).css('display', 'none'); $('#overlay').fadeOut(400); });});
    
    $(document).delegate('.button__reply.btn, #overlay','click',function(e){ 
    
     $(".comments__forms ").trigger('reset');
    
     $('#modal_form').animate({opacity: 0, top: '45%'}, 200, function(){ $(this).css('display', 'none'); $('#overlay').fadeOut(400); });});
    
    
    
    if(localStorage.getItem('coments_store')){
      $('.messages-list').html(localStorage.getItem('coments_store'));
    
    }
    
    
    //btn like
    
    $(document).delegate('.btn.like.heart-like','click',function(e){
    
     $(this).addClass('active');
    
    
          var a = this;
            var likes_count = parseInt($(this).parent().parent().parent().parent().find('.count').text()) || 0;
          
                    var likes = parseInt(likes_count)+1;
                   $(this).parent().parent().parent().parent().find('.count').html(likes);
    
    
    var commentcontent = $('ul.messages-list').html();
    
    localStorage.setItem('coments_store', commentcontent);
    
        });
    
    
    
    
    
    
    $(document).delegate('.btn.btn_dislike','click',function(e){
       e.preventDefault();
    
        var a = this;
       
                var count = parseInt($(a).find('.count_like').text()) || 0;
                $(a).find('.count_like').text(count - 1);
     
    var commentcontent = $('ul.messages-list').html();
    
    localStorage.setItem('coments_store', commentcontent);
           
    });
    
    
    
    
    
    
    $(document).delegate('.btn.btn_like','click',function(e){
       e.preventDefault();
     
        var a = this;
       
                var count = parseInt($(a).find('.count_like').text()) || 0;
                $(a).find('.count_like').text(count + 1);
     
    var commentcontent = $('ul.messages-list').html();
    
    localStorage.setItem('coments_store', commentcontent);
           
    });
    
    
    
    
    $(document).delegate('button.btn.remove','click',function(e){
    
    $(this).parent().parent().parent().parent().remove();
    
    
    
    
    var ids = $(this).parent().parent().parent().parent().attr('id');
    
    
    $.each('#'+ids,function() {
      $('#'+ids).html('');
    });
    
    
    var commentcontent = $('ul.messages-list').html();
    
    localStorage.setItem('coments_store', commentcontent);
    smile_convert();
       });
    
    
    
    
    
    
    $(document).delegate('.message__smiles','click',function(e){
    
    
    var smile = $(this).attr('data-smiles');
    const text = $('form.comments__form.reply .message_textarea').val();
     const result = `${text}`;
     $('form.comments__form.reply .message_textarea').val(result + ' ' +'[::'+smile+'::]');
    
    console.log(smile)
     });
    
    
    
    $(".message__smile").click(function(){
    
    var smile = $(this).attr('data-smile');
    const text = $('.message_textarea').val();
     const result = `${text}`;
     $('.message_textarea').val(result + ' ' +'[::'+smile+'::]');
    
     });
    
    
    
    
     $('.button__cancel.btnt').on('click', function() {
    
      $(".comments__forms").trigger('reset');
      $(".form__save").trigger('reset');
    
        });
    
    
    //Save my name, email, and website in this browser for the next time I comment
    
    if($('input.btn-on').prop('checked')==true){
    
    
    var username= $('input[name=user-name]').val();
    var useremail= $('input[name=user-email]').val();
    var userwww= $('input[name=userwww]').val();
     var message = $(".comments__forms textarea[name=message_textarea]").val();
    
    
    
    if(username.length>0){
    localStorage.setItem('username', username);
    }
    if(useremail.length>0){
    localStorage.setItem('useremail', useremail);
    }
    if(userwww.length>0){
    localStorage.setItem('userwww', userwww);
    }
    if(message.length>0){
    localStorage.setItem('message', message);
    }
    
    localStorage.getItem('message');
    
    }else{
    
    localStorage.setItem('username', '');
    localStorage.setItem('useremail', '');
    localStorage.setItem('userwww', '');
    localStorage.setItem('message', '');
    
    }
    
    
    
    
    // Reply comment
    
    
    
    $(document).delegate('button.button__reply.btn','click',function(e){
    
    checkEmail();
    checkName();
    checkDomain();
    checkMessage();
    
    
    
    
    
       function  checkName() {
     const regExp = /[a-z]{2,10}(\d{1,5})?/i;
    
    var username= $('input[name=reply-user-name]').val();
            if (!username) {
    
    localStorage.setItem('reply-username', '');
    $('.reply-comments-form-message-error').html('This is Name invalid');
    $('.reply-comments-form-message-error').css( 'display','block');
    $('.reply-comments-form-message-error').css( 'opacity',' 1');
    
    $('input[name=reply-user-name]').css('border-style','solid');
    $('input[name=reply-user-name]').css('border-color','red');
    $('input[name=reply-user-name]').css('border-width','1px');
    
      setTimeout(function(){
    $('.reply-comments-form-message-error').fadeOut(3000);
    $('input[name=reply-user-name]').css('border-style','none');
    }, 3000); 
            } else if (!username.match(regExp)) {
    
    localStorage.setItem('username', '');
     $('.reply-comments-form-message-error').html('Only latin letter and numbers');
    $('.reply-comments-form-message-error').css( 'display','block');
    $('.reply-comments-form-message-error').css( 'opacity',' 1');
    
    $('input[name=reply-user-name]').css('border-style','solid');
    $('input[name=reply-user-name]').css('border-color','red');
    $('input[name=reply-user-name]').css('border-width','1px');
      setTimeout(function(){
    $('.reply-comments-form-message-error').fadeOut(3000);
    $('input[name=reply-user-name]').css('border-style','none');
    }, 3000); 
    
    
            }else{
     
    localStorage.setItem('reply-username', username);
    $('.button__reply.btn').removeAttr('disabled');
         
        }
    }
         
         function checkEmail() {
         var inputEmail = $('input[name=reply-user-email]').val();
            const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    
            if (!inputEmail ) {
    localStorage.setItem('useremail','');
              console.log('This field is required');
    $('.reply-comments-form-message-error').html('This is email invalid');
    $('.reply-comments-form-message-error').css( 'display','block');
    $('.reply-comments-form-message-error').css( 'opacity',' 1');
    
    $('input[name=reply-user-email]').css('border-style','solid');
    $('input[name=reply-user-email]').css('border-color','red');
    $('input[name=reply-user-email]').css('border-width','1px');
    
    setTimeout(function(){
    $('.reply-comments-form-message-error').fadeOut(3000);
    $('input[name=reply-user-email]').css('border-style','none');
    }, 3000);
    
            }
            if (inputEmail  !== '' && !inputEmail .match(regExp)) {
    localStorage.setItem('reply-useremail','');
    $('.reply-comments-form-message-error').html('This is email invalid');
    $('.reply-comments-form-message-error').css( 'display','block');
    $('.reply-comments-form-message-error').css( 'opacity',' 1');
    $('input[name=reply-user-email]').css('border-style','solid');
    $('input[name=reply-user-email]').css('border-color','red');
    $('input[name=reply-user-email]').css('border-width','1px');
    
    setTimeout(function(){
    $('.reply-comments-form-message-error').fadeOut(3000);
    $('input[name=reply-user-email]').css('border-style','none');
    }, 3000);
          console.log( 'This is email invalid');
                
            }else{
    
    localStorage.setItem('reply-useremail', inputEmail);
    console.log(localStorage.getItem('reply-useremail'));
     
        }
          }
           function checkDomain() {
          
          var userwww = $('input[name=reply-userwww]').val();
    
           const regExp = /[a-zA-z]+:\/\/[^\s]*/;
    //console.log( inputWebsite.match(regExp));
            if (userwww.match(regExp)==null) {
     
    $('.reply-comments-form-message-error').html('This website address invalid');
    $('.reply-comments-form-message-error').css( 'display','block');
    $('.reply-comments-form-message-error').css( 'opacity',' 1');
    $('input[name=reply-userwww]').css('border-style','solid');
    $('input[name=reply-userwww]').css('border-color','red');
    $('input[name=reply-userwww]').css('border-width','1px');
    
    setTimeout(function(){
    $('.reply-comments-form-message-error').fadeOut(3000);
    $('input[name=reply-userwww]').css('border-style','none');
    }, 3000);
    
    localStorage.setItem('reply-userwww', '');
    
            }else{
    
    localStorage.setItem('reply-userwww', userwww);
    
    }
       
        }
    });
    
       
         function  checkMessage() {
             var message = $(".comments__forms textarea[name=reply-message_textarea]").val();
            var messageLength = message .length;
     console.log(messageLength);
            if (messageLength== 0) {
    $('.reply-comments-form-message-error').html('This is Message invalid');
    $('.reply-comments-form-message-error').css( 'display','block');
    $('.reply-comments-form-message-error').css( 'opacity',' 1');
    $('.comments__forms textarea[name=reply-message_textarea]').css('border-style','solid');
    $('.comments__forms textarea[name=reply-message_textarea]').css('border-color','red');
    $('.comments__forms textarea[name=reply-message_textarea]').css('border-width','1px');
    
    setTimeout(function(){
    $('.reply-comments-form-message-error').fadeOut(3000);
    $('.comments__forms textarea[name=reply-message_textarea]').css('border-style','none');
    }, 3000);
          console.log( 'This is Message invalid');
    
            } else if (messageLength <15) {
             
    $('.reply-comments-form-message-error').html('Message is too short (minimum 15 characters)');
    $('.reply-comments-form-message-error').css( 'display','block');
    $('.reply-comments-form-message-error').css( 'opacity',' 1');
    $('.comments__forms textarea[name=reply-message_textarea]').css('border-style','solid');
    $('.comments__forms textarea[name=reply-message_textarea]').css('border-color','red');
    $('.comments__forms textarea[name=reply-message_textarea]').css('border-width','1px');
    
    setTimeout(function(){
    $('.reply-comments-form-message-error').fadeOut(3000);
    $('.comments__forms textarea[name=reply-message_textarea]').css('border-style','none');
    }, 3000);
          console.log( 'Message is too short (minimum 15 characters)');
           } else if (messageLength > 500) {
             
    $('.reply-comments-form-message-error').html('Message is too long (maximum 500 characters)');
    $('.reply-comments-form-message-error').css( 'display','block');
    $('.reply-comments-form-message-error').css( 'opacity',' 1');
    $('.comments__forms textarea[name=reply-message_textarea]').css('border-style','solid');
    $('.comments__forms textarea[name=reply-message_textarea]').css('border-color','red');
    $('.comments__forms textarea[name=reply-message_textarea]').css('border-width','1px');
    
    setTimeout(function(){
    $('.reply-comments-form-message-error').fadeOut(3000);
    $('.comments__forms textarea[name=reply-message_textarea]').css('border-style','none');
    }, 3000);
          console.log( 'Message is too long (maximum 500 characters)');
            }else{
     
    localStorage.setItem('reply-message', message);
    ;
    
    ReplyComment();
        
        }
    
    }
    
    
    
    
    //Add Comment 
     $('button.button__post.btn').on('click', function() {
    
    
    checkEmail();
    checkName();
    checkDomain();
    checkMessage();
    
    
    
    //$('#user-email').on('input', validate);
    
       function  checkName() {
            const regExp = /[a-z]{2,10}(\d{1,5})?/i;
      
    var username= $('input[name=user-name]').val();
            if (!username) {
    
    localStorage.setItem('username', '');
    $('.comments-form-message-error').html('This is Name invalid');
    $('.comments-form-message-error').css( 'display','block');
    $('.comments-form-message-error').css( 'opacity',' 1');
    
    $('input[name=user-name]').css('border-style','solid');
    $('input[name=user-name]').css('border-color','red');
    $('input[name=user-name]').css('border-width','1px');
    
      setTimeout(function(){
    $('.comments-form-message-error').fadeOut(3000);
    $('input[name=user-name]').css('border-style','none');
    }, 3000); 
            } else if (!username.match(regExp)) {
    
    localStorage.setItem('username', '');
     $('.comments-form-message-error').html('Only latin letter and numbers');
    $('.comments-form-message-error').css( 'display','block');
    $('.comments-form-message-error').css( 'opacity',' 1');
    
    $('input[name=user-name]').css('border-style','solid');
    $('input[name=user-name]').css('border-color','red');
    $('input[name=user-name]').css('border-width','1px');
      setTimeout(function(){
    $('.comments-form-message-error').fadeOut(3000);
    $('input[name=user-name]').css('border-style','none');
    }, 3000); 
    
    
            }else{
     
    localStorage.setItem('username', username);
    //console.log(localStorage.getItem('username'));
         
        }
    }
         
         function checkEmail() {
         var inputEmail = $('input[name=user-email]').val();
            const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    
            if (!inputEmail ) {
    localStorage.setItem('useremail','');
              console.log('This field is required');
               $('.comments-form-message-error').html('This is email invalid');
    $('.comments-form-message-error').css( 'display','block');
    $('.comments-form-message-error').css( 'opacity',' 1');
    
    $('input[name=user-email]').css('border-style','solid');
    $('input[name=user-email]').css('border-color','red');
    $('input[name=user-email]').css('border-width','1px');
    
    setTimeout(function(){
    $('.comments-form-message-error').fadeOut(3000);
    $('input[name=user-email]').css('border-style','none');
    }, 3000);
    
            }
            if (inputEmail  !== '' && !inputEmail .match(regExp)) {
    localStorage.setItem('useremail','');
    $('.comments-form-message-error').html('This is email invalid');
    $('.comments-form-message-error').css( 'display','block');
    $('.comments-form-message-error').css( 'opacity',' 1');
    $('input[name=user-email]').css('border-style','solid');
    $('input[name=user-email]').css('border-color','red');
    $('input[name=user-email]').css('border-width','1px');
    
    setTimeout(function(){
    $('.comments-form-message-error').fadeOut(3000);
    $('input[name=user-email]').css('border-style','none');
    }, 3000);
          console.log( 'This is email invalid');
                
            }else{
    
    localStorage.setItem('useremail', inputEmail);
    console.log(localStorage.getItem('useremail'));
     
        }
          }
           function checkDomain() {
          
          var userwww = $('input[name=userwww]').val();
    
           const regExp = /[a-zA-z]+:\/\/[^\s]*/;
    //console.log( inputWebsite.match(regExp));
            if (userwww.match(regExp)==null) {
     
    $('.comments-form-message-error').html('This website address invalid');
    $('.comments-form-message-error').css( 'display','block');
    $('.comments-form-message-error').css( 'opacity',' 1');
    $('input[name=userwww]').css('border-style','solid');
    $('input[name=userwww]').css('border-color','red');
    $('input[name=userwww]').css('border-width','1px');
    
    setTimeout(function(){
    $('.comments-form-message-error').fadeOut(3000);
    $('input[name=userwww]').css('border-style','none');
    }, 3000);
    
    localStorage.setItem('userwww', '');
    
            }else{
    
    localStorage.setItem('userwww', userwww);
    
    }
       
        }
    
       
         function  checkMessage() {
             var message = $(".comments__forms textarea[name=message_textarea]").val();
            var messageLength = message .length;
     console.log(messageLength);
            if (messageLength== 0) {
                $('.comments-form-message-error').html('This is Message invalid');
    $('.comments-form-message-error').css( 'display','block');
    $('.comments-form-message-error').css( 'opacity',' 1');
    $('.comments__forms textarea[name=message_textarea]').css('border-style','solid');
    $('.comments__forms textarea[name=message_textarea]').css('border-color','red');
    $('.comments__forms textarea[name=message_textarea]').css('border-width','1px');
    
    setTimeout(function(){
    $('.comments-form-message-error').fadeOut(3000);
    $('.comments__forms textarea[name=message_textarea]').css('border-style','none');
    }, 3000);
          console.log( 'This is Message invalid');
    
            } else if (messageLength <15) {
             
                            $('.comments-form-message-error').html('Message is too short (minimum 15 characters)');
    $('.comments-form-message-error').css( 'display','block');
    $('.comments-form-message-error').css( 'opacity',' 1');
    $('.comments__forms textarea[name=message_textarea]').css('border-style','solid');
    $('.comments__forms textarea[name=message_textarea]').css('border-color','red');
    $('.comments__forms textarea[name=message_textarea]').css('border-width','1px');
    
    setTimeout(function(){
    $('.comments-form-message-error').fadeOut(3000);
    $('.comments__forms textarea[name=message_textarea]').css('border-style','none');
    }, 3000);
          console.log( 'Message is too short (minimum 15 characters)');
           } else if (messageLength > 500) {
             
                            $('.comments-form-message-error').html('Message is too long (maximum 500 characters)');
    $('.comments-form-message-error').css( 'display','block');
    $('.comments-form-message-error').css( 'opacity',' 1');
    $('.comments__forms textarea[name=message_textarea]').css('border-style','solid');
    $('.comments__forms textarea[name=message_textarea]').css('border-color','red');
    $('.comments__forms textarea[name=message_textarea]').css('border-width','1px');
    
    setTimeout(function(){
    $('.comments-form-message-error').fadeOut(3000);
    $('.comments__forms textarea[name=message_textarea]').css('border-style','none');
    }, 3000);
          console.log( 'Message is too long (maximum 500 characters)');
            }else{
     
    localStorage.setItem('message', message);
    //console.log(localStorage.getItem('message'));
    
    AddComment();
        
        }
    
    }
    
    
    
    });
    
    
    
    function ReplyComment() {
    
    
    if (localStorage.getItem('reply-message') && localStorage.getItem('reply-username') && localStorage.getItem('reply-useremail') && localStorage.getItem('reply-userwww')){
    var message =   localStorage.getItem('reply-message');
    var username =   localStorage.getItem('reply-username');
    var userwww =   localStorage.getItem('reply-userwww');
    
    
    
    var  comenid = localStorage.getItem('comentsid');
    
    var now = new Date().toLocaleTimeString();
    
    var addtext =' <div  id="ids'+comenid+'"><header class="reply__header" ><div class="reply__face face"><div class="face__img"><img src="images/people1.jpg" alt=""></div><a class="face__web" href="'+userwww+'">Website</a>  </div><div class="reply__group"> <h4 class="reply__title">'+username+'</h4><div class="reply__publish-date">'+now+'  ago</div> </div> </header> <div class="reply__content"> <p class="reply__text"><span class="q">'+message+'</p>  </div>  <footer class="reply__footer"><button class="btn reply btn_reply""><img src="images/button_reply.svg" alt="">   Reply</button>   <div class="marks__btn"><button class="btn btn_like"><img src="images/button_like.svg"   alt=""><div class="count_like"></button>  <button class="btn btn_dislike"><img src="images/button_dislike.svg"   alt=""><div class="count_like"></button>    </div></footer>  </div></div> ';
    
    
    
    var commentcontent = $('.comment__reply.reply').html();
    
     var result = `${commentcontent}`;
      $('.comment__reply.reply').html(result+ '\n ' +addtext);
    
    
    
    var messages = $('ul.messages-list').html();
    
     var results = `${messages}`;
    localStorage.setItem('coments_store', results);
    
    smile_convert();
    
     $(".button__cancel.btn ").trigger('click');
    
    }
    }
    
     function AddComment() {
    
    
    if (localStorage.getItem('message') && localStorage.getItem('username') && localStorage.getItem('useremail') && localStorage.getItem('userwww')){
    var message =   localStorage.getItem('message');
    var username =   localStorage.getItem('username');
    var userwww =   localStorage.getItem('userwww');
    
    
    
    var commentcontent = $('ul.messages-list').html();
    
    var  comentsid = new Date().getTime().toString();
    
    localStorage.setItem('comentsid', + comentsid);
    
    var now = new Date().toLocaleTimeString();
    
    
    //console.log(commentcontent);
    var addtext =' <li class="messages-list__item comment" id="ids'+comentsid+'"><div class="comment__wrapper"><header class="comment__header"><div class="reply__face face"><div class="face__img"><img src="images/people2.jpg" alt=""></div><a class="face__web" href="'+userwww+'">Website</a></div><div class="comment__group"><h4 class="comment__title">'+username+'</h4><div class="comment__publish-date">'+now +'  ago</div></div><div class="comment__actions"><button class="btn edit"><img src="images/button_editor.svg" alt=""></button>&nbsp;<button class="btn remove"><img src="images/button_remove.svg" alt=""></button></div></header><div class="comment__content"><div class="comment__text">'+message+'</div><div class="comment__like-wrapper"><button class="btn like heart-like"><div class="count"></div></button></div></div><footer class="comment__footer"><button class="btn reply btn_reply"><img src="images/button_reply.svg" alt="">Reply</button><div class="marks__btn"><button class="btn btn_like"><img src="images/button_like.svg" alt=""><div class="count_like"></button>&nbsp;<button class="btn btn_dislike"><img src="images/button_dislike.svg" alt=""><div class="count_like"></div></button></div></footer></div></div></li><div class="comment__reply reply"></div> ';
    
    
    
      var result = `${commentcontent}`;
      $('.messages-list').html(result + '\n ' +addtext);
    
    
    localStorage.setItem('coments_store', result + '\n ' +addtext);
    
    smile_convert();
    
     $(".button__cancel.btn ").trigger('click');
    
    
    }
    }
    
    
    function smile_convert()
    {
      var array_smiles = [
    
    
    ['[::smile::]','<svg class="smile__icon" viewBox="0 0 21 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 0C4.6996 0 0 4.76953 0 10.6562C0 16.543 4.6996 21.3125 10.5 21.3125C16.3004 21.3125 21 16.543 21 10.6562C21 4.76953 16.3004 0 10.5 0ZM10.5 19.25C5.83004 19.25 2.03226 15.3957 2.03226 10.6562C2.03226 5.9168 5.83004 2.0625 10.5 2.0625C15.17 2.0625 18.9677 5.9168 18.9677 10.6562C18.9677 15.3957 15.17 19.25 10.5 19.25ZM7.1129 9.96875C7.8623 9.96875 8.46774 9.3543 8.46774 8.59375C8.46774 7.8332 7.8623 7.21875 7.1129 7.21875C6.36351 7.21875 5.75806 7.8332 5.75806 8.59375C5.75806 9.3543 6.36351 9.96875 7.1129 9.96875ZM13.8871 9.96875C14.6365 9.96875 15.2419 9.3543 15.2419 8.59375C15.2419 7.8332 14.6365 7.21875 13.8871 7.21875C13.1377 7.21875 12.5323 7.8332 12.5323 8.59375C12.5323 9.3543 13.1377 9.96875 13.8871 9.96875ZM14.0565 13.0883C13.1758 14.1625 11.876 14.7812 10.5 14.7812C9.12399 14.7812 7.82419 14.1668 6.94355 13.0883C6.58367 12.65 5.94012 12.5941 5.5125 12.9551C5.08065 13.3203 5.0256 13.9691 5.38125 14.4074C6.65141 15.9543 8.51855 16.8395 10.5 16.8395C12.4815 16.8395 14.3486 15.9543 15.6187 14.4074C15.9786 13.9691 15.9194 13.3203 15.4875 12.9551C15.0599 12.5941 14.4163 12.65 14.0565 13.0883Z" fill="inherit"></path></svg>'],
    
    
    ['[::cool::]','<svg class="smile__icon" viewBox="0 0 21 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 0C4.6996 0 0 4.76953 0 10.6562C0 16.543 4.6996 21.3125 10.5 21.3125C16.3004 21.3125 21 16.543 21 10.6562C21 4.76953 16.3004 0 10.5 0ZM10.5 19.25C5.83004 19.25 2.03226 15.3957 2.03226 10.6562C2.03226 5.9168 5.83004 2.0625 10.5 2.0625C15.17 2.0625 18.9677 5.9168 18.9677 10.6562C18.9677 15.3957 15.17 19.25 10.5 19.25ZM15.4875 12.9594C15.0556 12.5941 14.4163 12.6543 14.0565 13.0926C13.1758 14.1668 11.876 14.7855 10.5 14.7855C9.12399 14.7855 7.82419 14.1711 6.94355 13.0926C6.58367 12.6543 5.94012 12.5984 5.5125 12.9594C5.08065 13.3246 5.0256 13.9734 5.38125 14.4117C6.65141 15.9586 8.51855 16.8438 10.5 16.8438C12.4815 16.8438 14.3486 15.9586 15.6187 14.4117C15.9786 13.9734 15.9194 13.3246 15.4875 12.9594ZM7.1129 9.96875C7.8623 9.96875 8.46774 9.3543 8.46774 8.59375C8.46774 7.8332 7.8623 7.21875 7.1129 7.21875C6.36351 7.21875 5.75806 7.8332 5.75806 8.59375C5.75806 9.3543 6.36351 9.96875 7.1129 9.96875ZM13.8871 7.39062C12.799 7.39062 11.5204 8.1168 11.351 9.19961C11.279 9.68086 11.8379 9.98164 12.1893 9.66367L12.5915 9.29844C13.2181 8.73125 14.5476 8.73125 15.1742 9.29844L15.5764 9.66367C15.9363 9.98164 16.4909 9.67656 16.4147 9.19961C16.2538 8.1168 14.9752 7.39062 13.8871 7.39062Z" fill="inherit"></path></svg>'],
    
    
    ['[::nice::]','<svg class="smile__icon" viewBox="0 0 21 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 0C4.6996 0 0 4.76953 0 10.6562C0 16.543 4.6996 21.3125 10.5 21.3125C16.3004 21.3125 21 16.543 21 10.6562C21 4.76953 16.3004 0 10.5 0ZM10.5 19.25C5.83004 19.25 2.03226 15.3957 2.03226 10.6562C2.03226 5.9168 5.83004 2.0625 10.5 2.0625C15.17 2.0625 18.9677 5.9168 18.9677 10.6562C18.9677 15.3957 15.17 19.25 10.5 19.25ZM14.0565 13.0883C13.1758 14.1625 11.876 14.7812 10.5 14.7812C9.12399 14.7812 7.82419 14.1668 6.94355 13.0883C6.58367 12.65 5.94436 12.5941 5.5125 12.9551C5.08065 13.3203 5.0256 13.9691 5.38125 14.4074C6.65141 15.9543 8.51855 16.8395 10.5 16.8395C12.4815 16.8395 14.3486 15.9543 15.6187 14.4074C15.9786 13.9691 15.9194 13.3203 15.4875 12.9551C15.0556 12.5941 14.4163 12.65 14.0565 13.0883ZM5.77923 8.72266C6.10524 8.13398 6.59214 7.79453 7.1129 7.79453C7.63367 7.79453 8.12056 8.13398 8.44657 8.72266L8.84879 9.45312C8.9377 9.61211 9.11129 9.65508 9.24254 9.61211C9.39496 9.56484 9.49657 9.41875 9.48387 9.25547C9.34415 7.44648 8.12056 6.1875 7.1129 6.1875C6.10524 6.1875 4.88165 7.44648 4.74194 9.25547C4.72923 9.41445 4.83085 9.56484 4.98327 9.61211C5.12722 9.65938 5.29657 9.59062 5.37702 9.45312L5.77923 8.72266ZM13.8871 6.1875C12.8794 6.1875 11.6558 7.44648 11.5161 9.25547C11.5034 9.41445 11.605 9.56484 11.7575 9.61211C11.9056 9.65938 12.0708 9.59062 12.1512 9.45312L12.5534 8.72266C12.8794 8.13398 13.3663 7.79453 13.8871 7.79453C14.4079 7.79453 14.8948 8.13398 15.2208 8.72266L15.623 9.45312C15.7119 9.61211 15.8855 9.65508 16.0167 9.61211C16.1692 9.56484 16.2708 9.41875 16.2581 9.25547C16.1183 7.44648 14.8948 6.1875 13.8871 6.1875Z" fill="inherit"></path> </svg>'],
    
    
    ['[::hi::]','<svg class="smile__icon" viewBox="0 0 16 22" xmlns="http://www.w3.org/2000/svg"><path d="M12.7656 9.25547C13.2618 7.85469 14.6911 3.80273 14.6911 2.50508C14.6911 1.36211 14.0252 0.403906 12.8377 0.403906C10.9462 0.403906 9.24978 6.06289 8.71965 7.41211C8.30826 6.1875 6.38282 0 4.68639 0C3.36742 0 2.74822 0.983984 2.74822 2.22148C2.74822 3.73828 4.19867 7.66992 4.72456 9.18242C4.45737 9.08359 4.16898 8.99766 3.87634 8.99766C2.88393 8.99766 1.82791 10.248 1.82791 11.2578C1.82791 11.6402 2.03572 12.1773 2.16719 12.534C0.602237 12.9637 4.64418e-06 14.0207 4.64418e-06 15.6148C-0.00423643 18.7172 2.89666 22 6.97657 22C11.981 22 15.094 18.193 15.094 13.2816C15.094 11.4297 14.8013 9.7582 12.7656 9.25547ZM11.2643 4.64062C11.4339 4.11211 12.1592 1.87773 12.8377 1.87773C13.2025 1.87773 13.3 2.26016 13.3 2.56523C13.3 3.38594 11.663 7.91914 11.3025 8.92461L9.8605 8.6668L11.2643 4.64062ZM4.07992 2.07539C4.07992 1.56406 4.69487 0.111719 6.04353 4.09922L7.51094 8.40898C6.84934 8.35312 6.33617 8.28008 6.0096 8.46914C5.54733 7.23164 4.07992 3.32578 4.07992 2.07539ZM3.98237 10.4844C5.22501 10.4844 6.82813 14.5492 6.82813 15.0992C6.82813 15.3184 6.62032 15.5891 6.37858 15.5891C5.49219 15.5891 3.11719 12.2848 3.11719 11.391C3.12143 11.0602 3.65581 10.4844 3.98237 10.4844ZM11.7987 18.4895C10.5645 19.8645 8.98684 20.5777 7.14621 20.5777C4.62701 20.5777 2.63795 19.177 1.67947 16.7836C0.954246 14.9187 1.84063 13.8488 2.55313 13.8488C3.03661 13.8488 4.85603 16.4398 4.85603 16.9898C4.85603 17.2004 4.52947 17.3465 4.35983 17.3465C3.67701 17.3465 3.40983 16.6805 2.19264 15.1379C0.933041 16.4141 3.06206 18.8719 4.66518 18.8719C5.7721 18.8719 6.49309 17.832 6.27679 17.0672C6.43371 17.0672 6.6288 17.0801 6.773 17.0414C6.81965 18.2059 7.15893 19.5938 8.54152 19.6926C8.54152 19.6539 8.62635 19.3875 8.62635 19.3746C8.62635 18.627 8.17679 17.9738 8.17679 17.2133C8.17679 15.9973 9.09711 14.8199 10.0301 14.1324C10.3694 13.8746 10.7808 13.7156 11.1795 13.5695C11.5909 13.4105 12.0277 13.2258 12.3415 12.9078C12.2949 12.4266 12.0998 12.0012 11.6248 12.0012C10.45 12.0012 6.51005 12.173 6.51005 10.2953C6.51005 10.0074 6.51429 9.73242 7.248 9.73242C8.61786 9.73242 12.0955 10.0762 13.1134 10.9828C13.881 11.6746 14.144 15.8469 11.7987 18.4895ZM7.61697 13.0754C8.02835 13.2086 8.45246 13.2473 8.87657 13.3332C8.56273 13.5652 8.28282 13.8488 8.01563 14.1539C7.89688 13.7887 7.75268 13.432 7.61697 13.0754Z" fill="inherit"></path> </svg>'],
    
    
    
    ['[::bad::]','<svg class="smile__icon" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M11 0C4.92339 0 0 4.76953 0 10.6562C0 16.543 4.92339 21.3125 11 21.3125C17.0766 21.3125 22 16.543 22 10.6562C22 4.76953 17.0766 0 11 0ZM11 19.25C6.10766 19.25 2.12903 15.3957 2.12903 10.6562C2.12903 5.9168 6.10766 2.0625 11 2.0625C15.8923 2.0625 19.871 5.9168 19.871 10.6562C19.871 15.3957 15.8923 19.25 11 19.25ZM7.45161 9.96875C8.23669 9.96875 8.87097 9.3543 8.87097 8.59375C8.87097 7.8332 8.23669 7.21875 7.45161 7.21875C6.66653 7.21875 6.03226 7.8332 6.03226 8.59375C6.03226 9.3543 6.66653 9.96875 7.45161 9.96875ZM14.5484 7.21875C13.7633 7.21875 13.129 7.8332 13.129 8.59375C13.129 9.3543 13.7633 9.96875 14.5484 9.96875C15.3335 9.96875 15.9677 9.3543 15.9677 8.59375C15.9677 7.8332 15.3335 7.21875 14.5484 7.21875ZM14.9032 13.4062H7.09677C6.51129 13.4062 6.03226 13.8703 6.03226 14.4375C6.03226 15.0047 6.51129 15.4688 7.09677 15.4688H14.9032C15.4887 15.4688 15.9677 15.0047 15.9677 14.4375C15.9677 13.8703 15.4887 13.4062 14.9032 13.4062Z" fill="inherit"></path> </svg>'],
    
    ['[::angry::]','<svg class="smile__icon" viewBox="0 0 21 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 0C4.6996 0 0 4.76953 0 10.6562C0 16.543 4.6996 21.3125 10.5 21.3125C16.3004 21.3125 21 16.543 21 10.6562C21 4.76953 16.3004 0 10.5 0ZM10.5 19.25C5.83004 19.25 2.03226 15.3957 2.03226 10.6562C2.03226 5.9168 5.83004 2.0625 10.5 2.0625C15.17 2.0625 18.9677 5.9168 18.9677 10.6562C18.9677 15.3957 15.17 19.25 10.5 19.25ZM10.5 13.0625C9.07742 13.0625 7.73952 13.6984 6.825 14.807C6.46512 15.2453 6.5244 15.8941 6.95625 16.2594C7.3881 16.6246 8.02742 16.5688 8.3873 16.1305C9.4373 14.8543 11.5627 14.8543 12.6127 16.1305C12.9556 16.5473 13.595 16.6418 14.0438 16.2594C14.4756 15.8941 14.5306 15.2453 14.175 14.807C13.2605 13.6984 11.9226 13.0625 10.5 13.0625ZM8.46774 9.96875C8.90383 9.96875 9.31028 9.68086 9.44153 9.23398C9.60242 8.68828 9.29758 8.1125 8.75988 7.94922L5.37278 6.91797C4.83085 6.75039 4.26774 7.06406 4.10685 7.60977C3.94597 8.15547 4.25081 8.73125 4.78851 8.89453L5.98246 9.25977C5.85121 9.47031 5.75806 9.70664 5.75806 9.97305C5.75806 10.7336 6.36351 11.348 7.1129 11.348C7.8623 11.348 8.46774 10.7293 8.46774 9.96875ZM16.8931 7.60977C16.7323 7.06406 16.1692 6.75469 15.6272 6.91797L12.2401 7.94922C11.7024 8.1125 11.3976 8.68828 11.5585 9.23398C11.6897 9.68086 12.0962 9.96875 12.5323 9.96875C12.5323 10.7293 13.1377 11.3438 13.8871 11.3438C14.6365 11.3438 15.2419 10.7293 15.2419 9.96875C15.2419 9.70234 15.1488 9.46602 15.0175 9.25547L16.2115 8.89023C16.7492 8.73125 17.054 8.15547 16.8931 7.60977Z" fill="inherit"></path></svg>'],
    
    ['[::sad::]','<svg class="smile__icon" viewBox="0 0 21 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 0C4.6996 0 0 4.76953 0 10.6562C0 16.543 4.6996 21.3125 10.5 21.3125C16.3004 21.3125 21 16.543 21 10.6562C21 4.76953 16.3004 0 10.5 0ZM10.5 19.25C5.83004 19.25 2.03226 15.3957 2.03226 10.6562C2.03226 5.9168 5.83004 2.0625 10.5 2.0625C15.17 2.0625 18.9677 5.9168 18.9677 10.6562C18.9677 15.3957 15.17 19.25 10.5 19.25ZM7.1129 9.96875C7.8623 9.96875 8.46774 9.3543 8.46774 8.59375C8.46774 7.8332 7.8623 7.21875 7.1129 7.21875C6.36351 7.21875 5.75806 7.8332 5.75806 8.59375C5.75806 9.3543 6.36351 9.96875 7.1129 9.96875ZM13.8871 7.21875C13.1377 7.21875 12.5323 7.8332 12.5323 8.59375C12.5323 9.3543 13.1377 9.96875 13.8871 9.96875C14.6365 9.96875 15.2419 9.3543 15.2419 8.59375C15.2419 7.8332 14.6365 7.21875 13.8871 7.21875ZM10.5 12.7188C8.79798 12.7188 7.19758 13.4793 6.10524 14.807C5.74536 15.2453 5.80464 15.8941 6.23649 16.2594C6.66835 16.6203 7.30766 16.5645 7.66754 16.1262C8.37036 15.2711 9.40343 14.777 10.5 14.777C11.5966 14.777 12.6296 15.2668 13.3325 16.1262C13.6754 16.543 14.3105 16.6375 14.7635 16.2594C15.1954 15.8941 15.2504 15.2453 14.8948 14.807C13.8024 13.4793 12.202 12.7188 10.5 12.7188Z" fill="inherit"></path> </svg>']];
      array_smiles.forEach(function(item) {
        $('.comment__text').each(function() {
          var text = $(this).html();
          $(this).html(text.replace(item[0], item[1]));
        });
      });
    }
    
    smile_convert();
});
    
    
const slider = new Swiper (".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$('.switch-btn').click(function(){
  $(this).toggleClass('switch-on');
  if ($(this).hasClass('switch-on')) {
    $(this).trigger('on.switch');
  } else {
    $(this).trigger('off.switch');
  }
});

$(function() {
  $.fn.scrollToTop = function() {
      $(this).hide().removeAttr("href");
          if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
          const scrollDiv = $(this);
      $(window).scroll(function() {
          if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
          else $(scrollDiv).fadeIn("slow")
      });
      $(this).click(function() {
          $("html, body").animate({scrollTop: 0}, "slow")
      })
  }
});
 
$(function() {
  $(".top").scrollToTop();
});
    