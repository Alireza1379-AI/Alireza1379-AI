$(function () {
    "use strict";
    $.validator.setDefaults({ignore: [],
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-danger');
            $(element).addClass('form-control-danger');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-danger');
            $(element).removeClass('form-control-danger');
        },
        errorElement: 'p',
        errorClass: 'form-control-feedback text-white help-block mt-3',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length || element.parent('label').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
    $("#subscribeform").submit(function (e) {
        e.preventDefault();
    }).validate({
        rules: {email: {required: true, email: true}},
        messages: {email: {required: "Please enter your email address", email: "Please enter a valid email address"}},
        submitHandler: function (form) {
            var $jssubscribebtn = $("#js-subscribe-btn");
            var $jssubscriberesult = $("#js-subscribe-result");
            $jssubscribebtn.attr("disabled", true);
            var redirect = $('#subscribeform').data('redirect');
            var noredirect = false;
            if (redirect == 'none' || redirect == "" || redirect == null) {
                noredirect = true;
            }
            $jssubscriberesult.fadeIn("slow").html('<p class="mt-3 help-block text-white">Please wait...</p>');
            var success_msg = $jssubscriberesult.data('success-msg');
            var error_msg = $jssubscriberesult.data('error-msg');
            var dataString = $(form).serialize();
            $.ajax({
                type: "POST", data: dataString, url: "php/subscribe.php", cache: false, success: function (d) {
                    $(".form-group").removeClass("has-success");
                    if (d == 'success') {
                        if (noredirect) {
                            $jssubscriberesult.fadeIn('slow').html('<p class="mt-3 help-block text-white">' + success_msg + '</p>').delay(3000).fadeOut('slow');
                        } else {
                            window.location.href = redirect;
                        }
                    } else {
                        $jssubscriberesult.fadeIn('slow').html('<p class="mt-3 help-block text-white">' + error_msg + '</p>').delay(3000).fadeOut('slow');
                        if (window.console) {
                            console.log('PHP Error: ' + d);
                        }
                    }
                    $jssubscribebtn.attr("disabled", false);
                }, error: function (d) {
                    $jssubscriberesult.fadeIn('slow').html('<p class="mt-3 help-block text-white"> Sorry. Cannot access the PHP Server</p>').delay(3000).fadeOut('slow');
                    $jssubscribebtn.attr("disabled", false);
                    if (window.console) {
                        console.log('Ajax Error: ' + d.statusText);
                    }
                }
            });
            return false;
        }
    });
});