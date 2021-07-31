
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
    window.addEventListener('scroll', function(){
        let elHei = elHa.offsetTop;
        let winHei = window.innerHeight;
        if(elHei-winHei <= window.scrollY){
            elHa.classList.add('active');
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
    



  


    
    
    
    

