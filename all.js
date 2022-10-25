$(function () {
    let divWidth = $('#sliderBoard').width()
    let imgCount = $('#content li').length

    for(let i = 0; i < imgCount; i++){
        $('#contentButton').append(`<li></li>`)
    }
    $('#contentButton li:nth-child(1)').addClass('clicked')

    $('#content li').width(divWidth) // li 的寬
    $('#content').width(divWidth * imgCount)    // ul 的寬



    //====================
    let index = 0
    let timer = setInterval(moveToTheNext, 5000)
    $('#contentButton li').click(function(){
        clearInterval(timer)
        index = $(this).index()
        
        $('#content').animate({
            left:divWidth * index * -1,
         })

         $(this).addClass('clicked')
         $('#contentButton li').not(this).removeClass('clicked')

         timer = setInterval(moveToTheNext, 5000)
    })

    function moveToTheNext(){
        
        if(index<imgCount - 1){
            index++
        }else{
            index = 0
        }

        $('#content').animate({
            left:divWidth * index * -1,
         })

         $(`#contentButton li:eq(${index})`).addClass('clicked')
         $('#contentButton li').not(`:eq(${index})`).removeClass('clicked')

    }
});



	$(function(){

		$('.go7_2').click(function(){
			
			if(document.querySelector('.go7_2').style.backgroundColor != 'rgb(17, 17, 17)'){
				$(this).css({
				opacity:0,
				backgroundColor: '#111'
			})
				setTimeout(function(){
					alert('答對了') 
				},500)
			}       
			// console.log(document.querySelector('.go7_2').style.backgroundColor)
			/* console.log(document.querySelector('. go7_2').style.opacity) */

			/* $(this).off('click') */
		})
		const Wrong = document.querySelectorAll('.wrong');
		Wrong.forEach(wrong => wrong.addEventListener('click', function(){
			alert('答錯了') 
		}))
		// console.log(Wrong)
		// console.log(Wrong[0])
	})

		