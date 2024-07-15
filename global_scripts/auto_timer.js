var timer_started = null;
var first_entry = true;


// Web Interface on LeetCode
var start_button = null;
var reset_button = null;
var show_timer_button = null;


window.onload = () => {
    var observer = new MutationObserver(function(mutations) {
        timer = document.querySelector("#ide-top-btns > div.relative.flex > div.relative.flex.overflow-hidden.rounded.bg-fill-tertiary.dark\\:bg-fill-tertiary.mr-\\[6px\\] > div > div:nth-child(1) > div > div.flex.items-center.hover\\:bg-fill-quaternary.dark\\:hover\\:bg-fill-quaternary");
        if (timer !== null) {
            timer_icon = document.querySelector("#ide-top-btns > div.relative.flex > div.relative.flex.overflow-hidden.rounded.bg-fill-tertiary.dark\\:bg-fill-tertiary.mr-\\[6px\\] > div > div:nth-child(1) > div > div.flex.items-center.hover\\:bg-fill-quaternary.dark\\:hover\\:bg-fill-quaternary > div.flex.flex-none.py-2.pl-2.pr-1.text-gray-60.dark\\:text-gray-60 > div > svg");
            timer_started = (timer_icon.getAttribute('data-icon') === 'circle-pause');
        }
        start_button = document.querySelector("#ide-top-btns > div.relative.flex > div.relative.flex.overflow-hidden.rounded.bg-fill-tertiary.dark\\:bg-fill-tertiary.mr-\\[6px\\] > div > div:nth-child(1) > div > div.flex.items-center.hover\\:bg-fill-quaternary.dark\\:hover\\:bg-fill-quaternary");
        reset_button = document.querySelector("#ide-top-btns > div.relative.flex > div.relative.flex.overflow-hidden.rounded.bg-fill-tertiary.dark\\:bg-fill-tertiary.mr-\\[6px\\] > div > div:nth-child(1) > div > div.rounded-\\[3px\\].p-2.hover\\:bg-fill-quaternary.dark\\:hover\\:bg-fill-quaternary.text-gray-60.dark\\:text-gray-60");
        show_timer_button = document.querySelector("#ide-top-btns > div.relative.flex > div.relative.flex.overflow-hidden.rounded.bg-fill-tertiary.dark\\:bg-fill-tertiary.mr-\\[6px\\] > div > div:nth-child(2) > div");
        

    });
    observer.observe(document, {attributes: false, childList: true, characterData: false, subtree: true});
}


document.addEventListener('keypress', async (e) => {
    if (timer_started !== null) {
        try {
            show_timer_button.click();
        }
        catch (e) { }
        finally {
            if (first_entry === true) {
                first_entry = false;

                if (timer_started === false) {
                    start_button.click();
                
                } else {
                    reset_button.click();
                    setTimeout(() => {
                        start_button.click(); 
                    }, 500);
                }
            } else if (timer_started === false) {
                start_button.click();
            }
        }
    }
})