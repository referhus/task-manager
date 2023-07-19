export function enableScroll() {
    const body = document.querySelector('body');
    const heightTop = body.style.top;

    if (heightTop) {
        body.style.cssText =
            'top: auto; position: static; overflow-y: auto;';
        window.scrollTo({
            top: -parseInt(heightTop, 10),
            behavior: 'instant',
        });
    }
}

export function disableScroll() {
    const body = document.querySelector('body');
    if (body.style.position !== 'fixed') {
        const heightScroll = window.pageYOffset;

        if (document.body.offsetHeight > window.innerHeight) {
            body.style.cssText = `top: ${-heightScroll}px; position: fixed; overflow-y: scroll;`;
        } else {
            body.style.cssText = `top: ${-heightScroll}px; position: fixed;`;
        }
    }
}
