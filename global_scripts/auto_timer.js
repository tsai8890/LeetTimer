let timer_started = null;
let first_entry = true;
let prev_window_url = null;


// Web Interface on LeetCode
let start_button = null;
let reset_button = null;
let show_timer_button = null;


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

                
        let curr_window_url = window.location.toString()
        
        // Enter another page
        if (curr_window_url !== prev_window_url) {
            first_entry = true;
            if (timer_started) {
                start_button.click();
            }
            // console.log('from: ' + prev_window_url + ' to: ' + curr_window_url);
            prev_window_url = curr_window_url;
        }
    });

    // Initialize the current window's url
    prev_window_url = window.location.toString();

    // Add observer
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
                reset_button.click();
                setTimeout(() => {
                    start_button.click();
                }, 500);

            } else if (timer_started === false) {
                start_button.click();
            }
        }
    }
})