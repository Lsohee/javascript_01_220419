// 매개 변수 a와 b 는 값이 들어갈 공간 -> 없으면 값을 넣을 수 가 없음
// function sum(a,b){
//   return a + b;
//   return : 뱉어

// }

// console.log(sum(9,1));


// 내가 만들고 싶은거 = 스크롤을 내린 만큼 음악이 자연스럽게 소리가 줄었다 커졌다 하는 것
// 어떤 알고리즘으로 만들 수 있을까?
// 1번 트랙 음량= a / 2번 트랙 음량= b 라고 지정 
// 최대음량으로 만들고 싶은 스크롤의 y좌표를 알파 베타로 설정



function scroll(a){
  return a/3;
}

console.log(scroll(6));
