//  collors map
const collorsMap = {
  success: 'text-success', // success
  error: 'text-danger', //  erro
};
//  change collor function
export default (state) => {
  const { el, status } = state;
  const currentCollor = Array.from(el.classList).find((item) => item.startsWith('text-'));
  el.classList.remove(currentCollor);
  el.classList.add(collorsMap[status]);
};
