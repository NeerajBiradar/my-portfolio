export const slideUp = {
    initial: {
        y: 300
    },
    enter: {
        y: 0,
        transition: {duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5}
    }
}
document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty ('--x', (e.clientX+window.scrollX) + 'px');
  document.documentElement.style.setProperty ('--y', (e.clientY+window.scrollY) + 'px');
}