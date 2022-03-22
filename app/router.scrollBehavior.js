export default async function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  const findElem = async (hash, x) => {
    return document.querySelector(hash) ||
    new Promise((resolve, reject) => {
      if (x > 50) {
          return resolve();
      }
      setTimeout(() => {
          resolve(findElem(hash, ++x || 1));
      }, 100);
    });
  }
  if (to.hash) {
    const el = await findElem(to.hash);
    if ('scrollBehavior' in document.documentElement.style) {
      const OFFSET = -30
      return window.scrollTo({ top: el.offsetTop - OFFSET, behavior: 'smooth' })
    } else {
      return window.scrollTo(0, el.offsetTop)
    }
  }

  return { x: 0, y: 0 }
}