let actions = document.querySelectorAll('._8102');
let i = 0;
let total = actions.length;

setInterval(() => {
    setTimeout(() => {
        actions[i].click();

        setTimeout(() => {
           document.querySelectorAll('._54nf a')[2].click();

            setTimeout(() => {
                document.querySelectorAll('._ohf button')[1].click();
            }, 500);
        }, 500);
    }, 500);

    i++;
}, 2000);