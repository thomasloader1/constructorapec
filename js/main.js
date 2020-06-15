const navMenu = document.querySelector('#navigation');
const itemGridContent = $(`#item-grid-content`)

navMenu.addEventListener('click', e =>{
    console.log(e.target.innerHTML);
    let { target } = e;
    target.nodeName === "A" ? setMiddleContent(`${target.innerHTML}-grid`, target) : console.log("No es un link")
});

const setMiddleContent = ( nameGridContainer , element) =>{
    switch (nameGridContainer){
        case 'home-grid':
            $('.item-grid-img').delay("fast").fadeOut();
            $('.nav-grid').delay("fast").fadeOut();
            
            setTimeout(() => {
                $('.item-grid-img').css('height', '100%').delay("fast").fadeIn()
                $(`#${nameGridContainer}`).delay("slow").css("grid-template-rows", "10% 75% 15%")
                itemGridContent.toggleClass("d-none").css('overflow', 'scroll');
                $('.nav-grid').css('align-self', 'center');
                $('.nav-grid').delay("fast").fadeIn();
            }, 700);
        break;
        default :
            $('.item-grid-img').css('height', '%').delay("fast").fadeIn()
            $(`#${nameGridContainer}`).delay("slow").css("grid-template-rows", "repeat(2, 50%)")
        
    }

    
}

const getPage = (namePage) =>{
    $.ajax({ url: `${namePage}.html`, success: function(res){
        itemGridContent.html(res)
    }})
}

