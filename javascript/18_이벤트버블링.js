/*
이벤트 버블링이란 이벤트 발생시 주변에까지 영향을 준다는 이론이라고 생각 하면 된다.
    예컨대 하위 태그에서 이벤트가 발생할시, 자식 태그의 상위 태그인 부모 태그까지 이벤트의 영향을 주는 걸 말한다.
*/


// 텝버튼 누르면
// 텝버튼에 부착된 오렌지 모두 제거
// 누른 탭버튼에 오렌지 부착

// 텝버튼과 일치하는 콘텐츠에 붙은 쇼 모두 제거
// 누른 탭버튼과 일치하는 콘텐츠에 쇼 부착


function 편리함(숫자){
    document.querySelectorAll('.tab-button')[숫자].addEventListener('click', function(){
        document.querySelectorAll('.tab-button')[0].classList.remove('orange');
        document.querySelectorAll('.tab-button')[1].classList.remove('orange');
        document.querySelectorAll('.tab-button')[2].classList.remove('orange');
        document.querySelectorAll('.tab-button')[숫자].classList.add('orange');
    
        document.querySelectorAll('.tab-content')[0].classList.remove('show');
        document.querySelectorAll('.tab-content')[1].classList.remove('show');
        document.querySelectorAll('.tab-content')[2].classList.remove('show');
        document.querySelectorAll('.tab-content')[숫자].classList.add('show');
    });
};


document.querySelector('.list').addEventListener('click', function(e){
    for(let i = 0; i < 3; i++){
        let 숫자 = i;

        if(e.target == document.querySelectorAll('.tab-button')[숫자]){
            편리함(숫자);
        };
    };
});



