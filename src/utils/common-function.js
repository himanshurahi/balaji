const scrollToClass = ( className ) => {
    const el = document.getElementsByClassName ( className )[ 0 ];
    let rect = el.getBoundingClientRect ();
    window.scrollTo ( rect.left, rect.top );
}

export {
    scrollToClass
}