
    //about 나타나기
    window.addEventListener('scroll', function(){
        const elAbout = document.querySelector('.ab');
        
        let elHei;
        let winHei = window.innerHeight;

        elHei = elAbout.offsetTop;

        if(elHei-winHei <= window.scrollY){
        elAbout.classList.add('active');
        }
    });



    //news 나타나기
    const elNews = document.querySelector('.news');
    window.addEventListener('scroll', function(){
        let elHei = elNews.offsetTop;
        let winHei = window.innerHeight;
        if(elHei-winHei <= window.scrollY){
            elNews.classList.add('active');
        }
    });




    //store 나타나기
    window.addEventListener('scroll', function(){
        const elStore = document.querySelector('.st');
        
        let elHei;
        let winHei = window.innerHeight;

        elHei = elStore.offsetTop;

        if(elHei-winHei <= window.scrollY){
        elStore.classList.add('active');
        }
    });




    //ha 나타나기
    const elHa = document.querySelector('.ha');
    const elHa1 = document.querySelector('.ha > div');
    window.addEventListener('scroll', function(){
        let elHei = elHa.offsetTop;
        let winHei = window.innerHeight;
        if(elHei-winHei <= window.scrollY){
            elHa1.classList.add('active');
        }
    });




    //work 나타나기
    window.addEventListener('scroll', function(){
        const elWork = document.querySelector('.work');
        
        let elHei;
        let winHei = window.innerHeight;

        elHei = elWork.offsetTop;

        if(elHei-winHei <= window.scrollY){
        elWork.classList.add('active');
        }
    });
    

    $(function(){

        //모바일 메인 포토
        $(".photo").slick({           
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    arrows: false,
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay:true,
                    autoplaySpeed:900,
                  }
                }
            ]
        });


        // store slick
        $(".fvt").slick({
            arrow: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,

            responsive: [ 
                {  
                    breakpoint: 767,
                    settings: {
                        arrows: true,
                        // dots: true,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay:true,
                        autoplaySpeed:3000
                    }
                }
            ]
        });


        // work slick
        $(".wo .slider").slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay:true,
            autoplaySpeed:3000,
            
            responsive: [ 
                {  
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay:true,
                        autoplaySpeed:3000
                    }
                }
            ]

        });

    })

 
  


    
    
    
    

