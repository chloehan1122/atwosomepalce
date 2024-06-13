window.onload = function(){
    //메인 배너 슬라이드 기능 넣기
    let btn_next = document.querySelector(".main_btn_next")
    let btn_prev = document.querySelector(".main_btn_prev")
    let train = document.querySelector(".main_train")
    let one = document.querySelector(".main_cur_slide")
    let main_count = 0

    btn_next.addEventListener("click",function(){ 
        main_count++
        if(main_count>1){main_count=1}
        train.style.transform = `translateX(${main_count*-50}%)`
        one.innerHTML = main_count+1
    })

    btn_prev.addEventListener("click",function(){
        main_count--
        if(main_count<0){main_count=0}
        train.style.transform = `translateX(${main_count*-50}%)`
        one.innerHTML = main_count+1
    })

    //브랜드서포트 영역 슬라이드 기능 넣기
    let btn_brand_next = document.querySelector(".btn_story_next")
    let btn_brand_prev = document.querySelector(".btn_story_prev")
    let brand_train = document.querySelector(".support_train")
    let brand_num = document.querySelector(".brand_cur")
    let brand_count = 0

    btn_brand_next.addEventListener("click",function(){
        brand_count++
        if(brand_count>3){brand_count=3}
        brand_train.style.transform = `translateX(${brand_count*-25}%)`
        brand_num.innerHTML = brand_count+1
    })

    btn_brand_prev.addEventListener("click",function(){
        brand_count--
        if(brand_count<0){brand_count=0}
        brand_train.style.transform = `translateX(${brand_count*-25}%)`
        brand_num.innerHTML = brand_count+1
    })

    // 프렌차이즈 영역 움직이는 원 넣기
    let animationBG = document.querySelector(".animation_bg")
    let result = ``
    let num = 15
    for(let i=0 ; i<num ; i++){
        let divtop = Math.random()*800
        // 50~950px
        let dtime = Math.random()*10+5
        // 5~15초
        let stime = Math.random()*4
        // 0~4초
        result += `<div class="circle" style="animation: moveRtoL ${dtime}s linear ${stime}s infinite; top: ${divtop}px;">움직이는 원</div>`
    }
    console.log(result)
    animationBG.innerHTML = result
}