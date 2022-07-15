        const btn = document.querySelector( '#btn' );
        const text = document.querySelector( '.show' );
        btn.addEventListener( 'click',button);
        function button() {
            text.classList.toggle( 'hide' );
            btn.textContent == "Read More"
                ? ( btn.textContent = "Read Less" )
                : ( btn.textContent = "Read More" );
            }
                
        const btn1 = document.querySelector( '#btn-1' );
        const text1 = document.querySelector( '.show-1' );
        btn1.addEventListener( 'click',button1);
         function button1() { 
            text1.classList.toggle( 'hide-1' );
             btn1.textContent == "Read More"
                ? ( btn1.textContent = "Read Less" )
                : ( btn1.textContent = "Read More" );
            }
