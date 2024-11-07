/*
반복문 조건 안에 있는 var로 선언한 변수 특징:
범위가 function이기 때문에, 반복문 조건이 틀려도 function 내에서는 계속 그 변수에 접근이 가능하다. 반복문이 종료된 후에도 마지막으로 변경된 var 변수의 값이 function 내에서 그대로 유지된다.

반복문 조건 안에 있는 let으로 선언한 변수 특징:
let 범위는 중괄호{}이기 때문에, let 변수는 중괄호 안에서만 유효하다. 반복문이 끝나면 변수도 사라지기 때문에, 반복문 밖에서는 해당 변수에 접근할 수 없다.
 */


/*
코드 설계 흐름

코드 알고리즘을 한글로 작성해본다.
문장을 보고 주요 키워드를 확인한다.

반복 → 함수, 반복문 쓸 생각을한다.
~면 → 조건문을 생각한다.
자주 쓰는 요소가 있다면 → 변수로 지정할 생각을 한다.
~하면 → 이벤트리스너를 생각한다.


코드와 한국어를 섞어서 작성해본다.
한국어를 코드로 차근차근 매꿔간다.
변수가 있다면, 변수를 가장 맨 위에 작성해 준다.

이유: 변수 지정의 목적이 여러번 '활용'하기 위함이므로, 활용할 수 있도록 맨 위에 작성한다.


이후 반복문이나 조건문을 중간에 작성해준다.

이유: 반복 또는 조건은 무언가 결과를 내기 위해 작성하는 코드이기 때문에 중간에 위치시킨다.


~하면은 동작이기 때문에 이벤트리스너 같은 게 있다면 마지막에 작성해준다.

이유: 보통 액션이고, 액션은 곧 결과를 나타내는 경우가 많기 때문에 마지막에 작성한다.

*/


/*
반복문에서 i++가 나중에 동작하는 이유

i++는 상태를 바꾸는 코드.
    상태를 바꾸기 전에 i를 이용해 중괄호 안에 있는 기능을 실행해야 함.
        중괄호 안에 기능을 발휘 했으면, 그제서야 i++로 상태를 바꿔줌.
            "현재 상태 실행 후 -> 다음 상태로 변경"이 자연스러운 흐름.
*/


for(let i = 0; i < 3; i++){
    document.querySelectorAll('.tab-button')[i].addEventListener('click', function(){
        document.querySelectorAll('.tab-button')[0].classList.remove('orange');
        document.querySelectorAll('.tab-button')[1].classList.remove('orange');
        document.querySelectorAll('.tab-button')[2].classList.remove('orange');
        document.querySelectorAll('.tab-button')[i].classList.add('orange');
    
        document.querySelectorAll('.tab-content')[0].classList.remove('show');
        document.querySelectorAll('.tab-content')[1].classList.remove('show');
        document.querySelectorAll('.tab-content')[2].classList.remove('show');
        document.querySelectorAll('.tab-content')[i].classList.add('show');
    });    
};



// 탭 버튼의 orange 클래스를 제거해주는 코드 반복 생성
// 콘텐츠의 show 클래스를 제거해주는 코드 반복 생성


// 클래스 전체를 다루는 변수를 만든다
// 왜? 그래야 반복해서 제거 하고, 생성하기에 편하니깐.

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');


function 탭클릭(클릭){
    for(let i = 0; i < tabButtons.length; i++){
        tabButtons[i].classList.remove('orange');
    }
    
    tabButtons[클릭].classList.add('orange');
    
    
    for(let i = 0; i < tabContents.length; i++){
        tabContents[i].classList.remove('show');
    }
    
    tabContents[클릭].classList.add('show');
};


for(let i = 0; i < tabButtons.length; i++){
    tabButtons[i].addEventListener('click', function(){
        탭클릭(i)
    });
};




