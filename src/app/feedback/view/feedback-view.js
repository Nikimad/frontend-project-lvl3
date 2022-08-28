import collorsMap from './collorsMap/collorsMap';

const getCurrentCollor = (el) => Array.from(el.classList).find((item) => item === 'text-success' || item === 'text-danger');
//  feedback view
export default (state) => {
  const { el, status, message } = state; //  get data
  el.classList.replace(getCurrentCollor(el), collorsMap[status]); //  color
  el.textContent = message; //  message
};
