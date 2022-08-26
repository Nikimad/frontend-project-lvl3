//  change message
export default (state) => {
  const { el, message } = state;

  el.textContent = message;
};
