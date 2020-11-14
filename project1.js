$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required: true,
                minlength: 4
            },
            sname:{
                required: true,
                minlength: 4
            },
            email:{
                required: true,
                email: true
            },
            password:{
                minlength: 5,
                required: true
            },
            day:{
                required: true
            },
            month:{
                required: true,
            },
            year:{
                required: true,
            }   
        },
        messages:{
            required: "Da Mwone Ath Locka, Ing Pooru !"
        }
    })
})