$.ajax({
    url:'data/data_store.json',

    success:function(data){
        
        let tagList,url,like,tagTitle;
        like = localStorage.like;
        num = localStorage.num;
        url = location.pathname;
        // localStorage = 데이터를 사용자 로컬에 보존하는 방식.


        
        let pageNum,pageEa,pageAll,pageTag,endItem;
            pageNum = 1;
            itemEa = 20;
            startItem = 0;
            endItem = itemEa;
            itemAll = data[like].length;
            pageAll = Math.ceil(itemAll / itemEa);



        // console.log(data.title[like]);
        tagTitle='';
        tagTitle = `${data.title[like]}`;
        $('.st h2').text(tagTitle);



        //list
        function list(){
            //paging
            
            pageTag='';
            startItem = itemEa*(pageNum-1);

            tagList='';

            data[like].forEach(function(v,k){
                if(startItem <= k && endItem > k){
                tagList += `<li>
                                <a href="page_1.html">
                                    <figure>
                                    <img src="${v.photo}" alt="없음">
                                        <figcaption class="bottom">
                                            <p>
                                                <b>${v.name}</b><br>
                                                ${v.price}
                                            </p>
                                        </figcaption>
                                        <figcaption class="up">
                                            <p>
                                                <b>${v['ho-tit']}</b><br>
                                                <br>
                                                <small>${v['ho-text']}</small>
                                            </p>
                                            <a class="sha" href="#"><img src="${v['ho-share']}" alt="없음"></a>
                                        </figcaption>
                                    </figure>
                                </a>
                            </li>`;
                }
            });
            $('.st ul').html(tagList);

            

            $('.st ul li').on('click',function(e){
                e.preventDefault();
                localStorage.num=$(this).index();
                setTimeout(function(){
                    location.href = 'page_1.html';
                },10);
            })




            
           function pageing(){
               
                for(let i=1;i<=pageAll; i++){
                    pageTag += `<li class="num${i}">
                                <a href="#">${i}</a>
                                </li>`;
                }
                $('.num ol').html(pageTag);
                
                $('.num ol li a').removeClass("active");
                $('.num ol li').eq(pageNum-1).find("a").addClass("active");

                $('.num ol li a').on('click',function(e){
                    e.preventDefault();
                    pageNum = $(this).text();
                    endItem = itemEa * pageNum;

                    list();

                })
            

               
                
                $('.num p:nth-of-type(1)').find('img').on('click',function(){
                    pageNum = 1;
                    endItem = itemEa * pageNum;
                    
                    list();         

                   
                });
                $('.num p:nth-of-type(2)').find('img').on('click',function(){
                    pageNum = 2;
                    endItem = itemEa * pageNum;
                    list();         

                });

            } pageing();
            
            
        } 


       


        function detail(){
            let tit = data[like][num].name;
            let img = `<img src="${data[like][num].photo}" alt="없음">`;
            let coin = parseInt(data[like][num].price) * 0.1
            let summary = `<tbody>
                    <tr>
                        <th scope="row">판매가</th>
                        <td>${data[like][num].price}</td>
                    </tr>
                    <tr>
                        <th scope="row">적립금</th>
                        <td>${coin.toFixed(2)*100}원 (1%)</td>
                    </tr>
                    <tr>
                        <th scope="row">상품코드</th>
                        <td>${data[like][num].code}</td>
                    </tr>
                </tbody>`;

            $('.de_1 h3').html(tit);
            $('.de_1 figure').html(img);
            $('.de_1 table:first').html(summary);

            let deContents='';
            data[like][num].detail.forEach(function(v,k){
                if(Object.keys(v) == 'de-pho' ){
                    deContents = `<img src="${v['de-pho']}">`;
                }else{
                    deContents = `<p>${v['de-text']}</p>`;
                }
                $('.de2 .de2_1').append(deContents);

            })
            
        }

        if(url.match('store')){
            list();
        }else{
            detail();
        }
        
    },

    error:function(e){
        console.log(e.status);
    }
});


