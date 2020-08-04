(function() {
//http*://www.google.com/recaptcha/
    //var mainFunc = function(){
    
        var getSizeList = function(){
            var listMessages = $('.im_history_message_wrap');
            return listMessages.length;
        }

        var atualSize = getSizeList();

        var linkClickFunc = function(){
            var listMessages = $('.im_history_message_wrap');
            var sizeList = listMessages.length;
            var elementView = listMessages[sizeList-1];
            var target = elementView.getElementsByClassName("reply_markup_button");
            target[2].click();

        };

        var checkLink = setInterval(function(){
            if(getSizeList() > atualSize ){
                linkClickFunc();
                clearInterval(checkLink);
            }
        }, 500);

   // }
/*
    setTimeout(function(){
        mainFunc();
    }, 15000);

    /*
    setInterval(function(){
        //window.close();
        mainFunc();
    }, 25000);
    */
})();