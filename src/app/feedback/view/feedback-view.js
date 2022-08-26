import changeTextCollor from './modules/changeTextCollor';
import changeMessage from './modules/changeMessage';

export default (state) => {
  changeTextCollor(state);
  changeMessage(state);
};
