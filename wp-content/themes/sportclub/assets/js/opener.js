var opener = {
    Init: () => {
        opener.BindUiActions();
    },
    BindUiActions: () => {
        document.querySelector("[data-open]").addEventListener("click", function(){
            var el = this.getAttribute('data-open');
            var cl = this.getAttribute('data-class');
            if(cl === undefined || cl === '') { cl = 'open'; }
            document.querySelector(el).classList.toggle(cl);
        });
    }
}