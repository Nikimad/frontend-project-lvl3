const feedbackState = {
  el: document.querySelector('.feedback'),
  status: null,
  message: null,
};
/*  feedback model - state
    el: DOM el - tag <p>
    status: null / 'success' / 'error'
    message: '<string>'
*/
//  export
export default feedbackState;
