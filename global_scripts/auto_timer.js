var timer_started = null;
var first_entry = true;


window.onload = () => {
    var observer = new MutationObserver(function(mutations) {
        timer = document.querySelector("#ide-top-btns > div.relative.flex > div.relative.flex.overflow-hidden.rounded.bg-fill-tertiary.dark\\:bg-fill-tertiary.mr-\\[6px\\] > div > div:nth-child(1) > div > div.flex.items-center.hover\\:bg-fill-quaternary.dark\\:hover\\:bg-fill-quaternary");
        if (timer !== null) {
            timer_icon = document.querySelector("#ide-top-btns > div.relative.flex > div.relative.flex.overflow-hidden.rounded.bg-fill-tertiary.dark\\:bg-fill-tertiary.mr-\\[6px\\] > div > div:nth-child(1) > div > div.flex.items-center.hover\\:bg-fill-quaternary.dark\\:hover\\:bg-fill-quaternary > div.flex.flex-none.py-2.pl-2.pr-1.text-gray-60.dark\\:text-gray-60 > div > svg");
            timer_started = (timer_icon.getAttribute('data-icon') === 'circle-pause');
        }
    });
    observer.observe(document, {attributes: false, childList: true, characterData: false, subtree: true});
}


document.addEventListener('keypress', async (e) => {
    if (timer_started !== null) {
        try {
            const show_timer_button = document.querySelector("#ide-top-btns > div.relative.flex > div.relative.flex.overflow-hidden.rounded.bg-fill-tertiary.dark\\:bg-fill-tertiary.mr-\\[6px\\] > div > div:nth-child(2) > div");
            show_timer_button.click();
        }
        catch (e) { }
        finally {
            if (first_entry) {
                const reset_button = document.querySelector("#ide-top-btns > div.relative.flex > div.relative.flex.overflow-hidden.rounded.bg-fill-tertiary.dark\\:bg-fill-tertiary.mr-\\[6px\\] > div > div:nth-child(1) > div > div.rounded-\\[3px\\].p-2.hover\\:bg-fill-quaternary.dark\\:hover\\:bg-fill-quaternary.text-gray-60.dark\\:text-gray-60");
                reset_button.click();
                first_entry = false;
            }

            if (!timer_started) {
                const start_button = document.querySelector("#ide-top-btns > div.relative.flex > div.relative.flex.overflow-hidden.rounded.bg-fill-tertiary.dark\\:bg-fill-tertiary.mr-\\[6px\\] > div > div:nth-child(1) > div > div.flex.items-center.hover\\:bg-fill-quaternary.dark\\:hover\\:bg-fill-quaternary");
                start_button.click();
            }
        }
    }   
})