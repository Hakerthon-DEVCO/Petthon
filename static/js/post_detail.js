//수정/삭제 버튼 뜨게 하기
let plus = document.getElementById('plusBtn'); //플러스 버튼 찾기

plus.addEventListener('click', () => { //이벤트 리스너
    let btns = document.querySelector('.btns'); //수정/삭제 버튼 찾기

    if(btns.style.display === 'none' || btns.style.display === '') { //수정/삭제 버튼이 안 보이는 상태였으면 보이게 하기
        btns.style.display = 'block';
    }
    else { //수정/삭제 버튼이 보이는 상태였으면 안 보이게 하기
        btns.style.display = 'none';
    }
});



//모달창 띄우기 코드
const closeButton = document.getElementById('closePopup'); //모달창 내리는 버튼 찾기

closeButton.addEventListener('click', () => { //모달창 아니오 누르면 모달창 사라지게
    modal.style.display = 'none';
});

const openModalBtn = document.getElementById('open-modal'); //모달창 띄우는 버튼 찾기
const modal = document.getElementById('modal'); //모달창 찾기
// const closeModalBtn = document.getElementsByClassName('close')[0];
// console.log(closeModalBtn);

openModalBtn.addEventListener('click', function(event) { //모달창 띄우기 버튼 누르면 모달창 띄우기
    event.preventDefault(); 
    modal.style.display = 'block'; 
});

// closeModalBtn.addEventListener('click', function() {
//     modal.style.display = 'none';
// });

window.addEventListener('click', function(event) { //모달창 외에 아무 곳 터치하면 모달창 안 보이게 사라지기
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

  
