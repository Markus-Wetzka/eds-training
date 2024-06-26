export default function decorate(block) {
  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in banner
          picWrapper.classList.add('eds-banner-img');
        }
      }
    });
  });
}
