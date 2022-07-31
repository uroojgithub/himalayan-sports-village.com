var hamburger = {
    elements: '',
    Init: () => {
        hamburger.elements = document.querySelectorAll(".cm-hamburger");
        hamburger.createHamburger();
        hamburger.BindUiActions();
    },
    BindUiActions: () => {
        document.querySelector(".cm-hamburger").addEventListener("click", function(){
            this.classList.toggle("active");
        });
    },
    createHamburger: () => {
        if(hamburger.elements.length) {
            hamburger.elements.forEach( (item, index) => {
                item.innerHTML = hamburger.createHamburgerHtml(item, index);
            } );
        }else{
            console.log("Hamburger Element Not Found.");
        }
    },
    createHamburgerHtml: () => {
        return `
            <span class="hamberger-bars hamberger-bar-1"></span>
            <span class="hamberger-bars hamberger-bar-2"></span>
            <span class="hamberger-bars hamberger-bar-3"></span>
        `;
    }
}