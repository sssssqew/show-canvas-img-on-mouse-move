let container = document.querySelector('.container')
let canvas = document.querySelector('.canvas')
let columnOne = document.querySelector('.one')
let columnTwo = document.querySelector('.two')
let columnThree = document.querySelector('.three')
let columnFour = document.querySelector('.four')

for (let i = 1; i <= 16; i++) {
    let imgDiv = document.createElement('div')
    let divImage = document.createElement('img')
    divImage.src = `./imgs/${i}.jpg`
    imgDiv.appendChild(divImage)

    if(i < 5){
        columnOne.appendChild(imgDiv)
    }else if(i < 9){
        columnTwo.appendChild(imgDiv)
    }else if(i < 13){
        columnThree.appendChild(imgDiv)
    }else{
        columnFour.appendChild(imgDiv)
    }
}

// x (음수) : 마우스가 컨테이너 좌측 모서리보다 왼쪽에 있는 경우
// x (제로) : 마우스가 컨테이너 좌측 모서리에 있는 경우
// x (양수) : 마우스가 컨테이너 좌측 모서리보다 오른쪽에 있는 경우
// 기준점을 브라우저 좌측 모서리에서 컨테이너 좌측 모서리로 옮김
// 해당 코드는 마우스 포인트 (0, 0) 기준점을 컨테이너(container)의 좌측상단 모서리로 변경함
window.addEventListener('mousemove', (e) => {
    let x = e.clientX - container.getBoundingClientRect().left 
    let y = e.clientY - container.getBoundingClientRect().top 
    console.log(x)
    canvas.style.transform = `translate(-${x}px, -${y * 3}px)`
})
// 마우스 포인트가 컨테이너 안으로 들어가는 순간부터 canvas 가 이동하기 시작함
// 마우스 포인트가 오른쪽으로 움직이면 canvas 는 왼쪽으로 움직임 (오른쪽에 위치한 사진을 보기 좋음)
// 마우스 포인트가 아래쪽으로 움직이면 canvas 는 위쪽으로 올라감 (아래쪽에 위치한 사진을 보기 좋음)

