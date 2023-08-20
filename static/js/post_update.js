const fileInput = document.getElementById('fileInput'); //파일 선택 input 찾기
const boolInput = document.getElementById('boolInput'); //사진 있냐없냐 input 찾기
const file = document.getElementById('fileName'); //파일 이름 뜨는 부분 찾기
const del = document.getElementById('del'); //삭제 버튼 찾기
let change = document.getElementById('change'); //img 태그 찾기
let upload = document.getElementById('upload'); //'사진 업로드 해주세요' 부분 찾기

// 이미지가 이미 선택되어 있는지 확인 후, 파일 이름을 표시
window.onload=function(){
  if (change.src != '') {
    upload.style.display = 'none'; //사진이 있으면 '사진 업로드 해주세요' 안 보이게
    // let img = new Image();
    // img.src = change.src;
    // let padding = img.height / 2;
    // console.log(padding);
    // let container = document.querySelector('.container');
    // container.style.paddingBottom = `${padding}px`;
    
    
    //파일 이름 쪼개기
    let last = change.src.lastIndexOf('/')
    let name = change.src.substring(last+1, change.src.length);
    name = decodeURIComponent(name);
    let test = name.substring(0, name.lastIndexOf('.'));
    let extension = name.substring(name.lastIndexOf('.'), name.length+1);

    //사진 파일 이름이 있을 때
    if (name !== '') {
      if(test.length <= 10) {
        file.innerText = `${name}`;
      }
      else {
        let short = test.substring(0, 7) + '...' + extension;
        file.innerText = `${short}`;
      }
      del.style.display = 'inline-block';
    }
    else {
      upload.style.display = 'block';
    }
  }
};

// textarea 요소를 가져오기
const textarea = document.getElementById("editArea");

// 높이를 자동으로 조절하는 함수를 만들기
function autoResize() {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
}

// textarea의 내용이 변경될 때마다 높이를 자동으로 조절
textarea.addEventListener("input", autoResize);

// 페이지 로드 시 초기 높이를 설정
autoResize();

//글자수 세기 js
// textarea 요소와 글자 수를 표시할 div 요소를 가져오기
const textarea_cnt = document.getElementById("editArea");
const charCountDiv = document.getElementById("charCount");

// textarea의 내용이 변경될 때마다 글자 수를 업데이트하는 함수 만들기
function updateCharCount() {
    const text = textarea_cnt.value;
    const charCount = text.length;
    charCountDiv.textContent = `(${charCount} / 150)`;
}

// textarea의 내용이 변경될 때마다 updateCharCount 함수를 호출
textarea_cnt.addEventListener("input", updateCharCount);

// 페이지 로드 시 초기 글자 수를 설정
updateCharCount();

//maxlength 작동이 안돼서.. 글자 수 제한하기
function maxLengthCheck(object) {
    if (object.value.length > object.maxlength)
        object.value = object.value.slice(0, object.max.length)
}

// 파일 선택이 완료되었을 때의 이벤트를 처리
fileInput.addEventListener("change", function () {
  if (fileInput.files.length > 0) {
    upload.style.display = 'none';
    let fileName = fileInput.files[0].name;
    // console.log(fileName);
    let imgName = fileName.substring(0, fileName.lastIndexOf('.'));
    let extension = fileName.substring(fileName.lastIndexOf('.'), fileName.length + 1);

    if (imgName.length <= 10) {
      file.textContent = imgName + extension;
    } 
    else {
      let shortenedFileName = fileName.substring(0, 7) + '...' + extension;
      file.textContent = shortenedFileName;
    }

    // let image = new Image();
    // let select = fileInput.files[0]
    // image.src = URL.createObjectURL(select);

    // let container = document.querySelector('.container');

    // image.onload = function () {
  
    // let height = image.height;
    // console.log(height);
    // container.style.paddingBottom = `${height}px`;
    // }
  }
});

const imageInput = document.getElementById('fileInput');
const imageView = document.getElementById('change');

imageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  console.log(file);
  if (file && file.type.startsWith('image/')) {
    imageView.src = URL.createObjectURL(file);
    imageView.style.display = 'block';
    imageView.style.width = '332px';
    del.style.display = 'inline-block';
  } 
  // else {
  //   imageView.src = '';
  // }
});

del.addEventListener('click', () => {
  upload.style.display = 'block'; //사진 삭제하면 '사진 업로드 해주세요!' 뜨게하기
  imageView.src = '';
  imageView.style.display = 'none';
  file.textContent = '';
  del.style.display = 'none';
  fileInput.value = "";
  boolInput.value = "N";
})

// 등록 버튼 클릭 이벤트 처리
let submitButton = document.getElementById('stop'); //등록 버튼 찾기
let tvalue = document.getElementById('postTitle'); //내용 부분 찾기
let alert = document.getElementById('alertText'); //경고문 찾기
alert.style.display = 'none'; //경고문 처음엔 안 보이게

submitButton.addEventListener('click', function (event) {
  let text = tvalue.value.trim(); // textarea의 텍스트를 가져와서 앞뒤 공백을 제거
  
  if (text.length === 0) {
    // 텍스트가 비어있을 경우 폼 제출 막기
    event.preventDefault(); // 폼 제출을 막기
    // tvalue.style.border = '1px solid #68B1F4';
    // tvalue.style.borderRadius = '10px';
    alert.style.display = 'block';
  }
});