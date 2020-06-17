const navMenu = document.querySelector('#navigation');
const itemGridContent = $(`#item-grid-content`);
let itemGridImg = $('.item-grid-img');
let navGrid = $('.nav-grid');

navMenu.addEventListener('click', e => {
    console.log(e.target.innerHTML);
    let { target } = e;
    target.nodeName === "A" ? setMiddleContent(`${target.innerHTML}`) : console.log("No es un link")
});

const setMiddleContent = (nameGridContainer) => {
    tookGridContainer(nameGridContainer);
}

const getPage = (namePage) => {
    $.ajax({
        url: `${namePage}.html`,
        success: function(res) {
            itemGridContent.html(res)
        }
    })
}

/**
 * 
 * @param {*} nameGridContainer - Paso nombre y obtengo fila del medio con transicion
 */
function tookGridContainer(nameGridContainer) {

    switch (nameGridContainer) {
        case 'home':
            searchPage(nameGridContainer);
            break;
        case 'obras':
            searchPage(nameGridContainer);
            break;
        default:
            itemGridImg.css('height', '50%').delay("fast").fadeIn();
            $(`#home-grid`).delay("slow").css("grid-template-rows", "repeat(2, 50%)");
    }

    function searchPage(namePage) {
        if ($('#home-grid').hasClass('expanded')) {
            let hasClicked = false;
            if (hasClicked === true) {
                closePage();
                hasClicked = false;
            } else {
                getPage(namePage);
                hasClicked = true;
            }
            console.log(hasClicked);
        } else {
            openPage(namePage);
        }
    }

    function openPage(namePage) {
        itemGridImg.delay("fast").fadeOut();
        navGrid.delay("fast").fadeOut();
        setTimeout(() => {
            getPage(namePage);
            getItemContainerContentData(`#home-grid`);
        }, 700);
    }

    function closePage() {
        console.log(itemGridContent.html())
    }

    function getItemContainerContentData(selector) {
        $('#home-grid').toggleClass('expanded')
        itemGridImg.css('height', '100%').delay("fast").fadeIn();
        $(`${selector}`).delay("slow").css("grid-template-rows", "10% 75% 15%");
        itemGridContent.toggleClass("d-none").css('overflow', 'scroll');
        navGrid.css('align-self', 'center').delay("fast").fadeIn();
        //? navGrid.delay("fast").fadeIn();
    }
}