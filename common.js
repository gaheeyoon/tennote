const a4Page = document.getElementById("container");

// 칸 추가
for (let i = 0; i < 120; i++) {
  const square = document.createElement("div");
  square.className = "square";
  a4Page.appendChild(square);
}

const inputText = function () {
  let text = prompt("글씨를 입력해주세요. (최대 10글자)");
  if (text) {
    writeText(text);
  }
};

const writeText = function (text = "가나다라마바사아자차카타파하") {
  text = text.slice(0, 10); // 텍스트를 최대 10글자로 제한
  const squares = document.querySelectorAll(".square");

  for (let index = 0; index < squares.length; index++) {
    if (index >= 70) {
      break; // 70번째 이후에는 루프를 종료
    }

    const square = squares[index];
    const charIndex = index % 10; // 글자 위치를 결정하는 로직

    if (charIndex < text.length) {
      square.textContent = text[charIndex];
    } else {
      square.textContent = ""; // 남은 칸을 빈칸으로 설정
    }
  }
};

// 처음 로드 시 기본 텍스트 채우기
writeText();
