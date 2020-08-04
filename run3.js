(function() {
//http*://www.google.com/recaptcha/
    //var mainFunc = function(){
        var visitButton = $('.reply_markup_button_w3')[0].getElementsByClassName('reply_markup_button')[0];

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
            target[0].click();
            var okButton = $('.md_simple_modal_footer')[0].getElementsByClassName('btn-md-primary')[0];
            okButton.click();
            var modal = $('.confirm_modal_window')[0];
            modal.click();

            
        };

        visitButton.click();
        setTimeout(function(){
        var okButton = $('.md_simple_modal_footer')[0].getElementsByClassName("btn-md-primary")[0];
        okButton.click();
        }, 1000);




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