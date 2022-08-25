/*
name: feedback element
tag: <p>
*/
const feedback = document.querySelector('.feedback');
//  map
const map = {
  success: 'RSS успешно загружен',
  error: {
    urlValidationError: 'Ссылка должна быть валидным URL',
    rssValidationNoRssError: 'Ресурс не содержит валидный RSS',
    rssValidationalredyExistRssError: 'RSS уже существует',
    networkError: 'Ошибка сети',
  },
};
//  change text color
const collorsMap = {
  success: 'text-success',
  error: 'text-danger',
};
const changeTextColor = (res) => {
  const collor = collorsMap[res];
  //  get current collor type: Array
  const currentCollor = Array.from(feedback.classList).filter((item) => item.startsWith('text-'));
  //  change collor
  feedback.classList.remove(...currentCollor);
  feedback.classList.add(collor);
};
//  get feedback function
export default (res, err) => {
  const currentMessage = feedback.textContent.trim();
  const message = err ? map[res][err] : map[res];

  if (currentMessage === message) {
    return;
  }
  changeTextColor(res);
  feedback.textContent = message;
};
