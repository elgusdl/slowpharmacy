

$(function(){
    $('header').load('inc.html header',nav);
    $('footer').load('inc.html footer > div');

    function nav(){
        $('.meleft ul li').eq(1).find('div a').on('click',function(e){
            e.preventDefault();
            localStorage.like=$(this).attr('href');
            setTimeout(function(){
                location.href = "store.html";
                // location.reload();
            },10);   
        })


        $('.meleft ul li').on({
            mouseenter:function(){$('header').addClass('active')},
            mouseleave:function(){$('header').removeClass('active')}
        });

        $('header .meright a').eq(1).find('img').on('click',function(){
            // console.log($('.log_bg'));
            $('header .log_bg').toggleClass('active');
        });



        // $('header .mobile').find('img').on('click',function(){
        //     $('header .meleft').toggleClass('active');
        // });


        if(window.innerWidth < 1374){
            $('header .mobile').find('img').on('click',function(){
                if( !$('header .meleft').hasClass('active') ){
                    $('header .meleft').slideUp();
                    $('header .meleft').addClass('active');

                    $(this).css("transform","rotateZ(0deg)");
                    return;
                }else{
                    $('header .meleft').slideDown();
                    $('header .meleft').removeClass('active');

                    $(this).css("transform","rotateZ(180deg)");
                }
                
    
            });
        }
        
        
    }

});



// top버튼 생성
const elTop =  document.querySelector('.top');

window.addEventListener('scroll', function(){
    let domHei = document.documentElement.offsetHeight;
    let winHei = window.innerHeight;

    if(domHei - winHei <= window.scrollY){
        console.log('끝이야!');
    };

    if(window.innerHeight < window.scrollY){
        elTop.classList.add('active');
    }else{
        elTop.classList.remove('active');
    }
});



