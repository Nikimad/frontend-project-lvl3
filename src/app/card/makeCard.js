const containers = {
  posts: document.querySelector('.posts'),
  feeds: document.querySelector('.feeds'),
};
const titles = {
  posts: 'Посты',
  feeds: 'Фиды',
};
const cardClasses = {
  card: ['card', 'border-0'],
  cardBody: ['card-body'],
  cardTitle: ['card-title', 'h4'],
  cardList: ['list-group', 'border-0', 'rounded-0'],
};

export default (type) => {
  //  create card
  const card = document.createElement('div');
  card.classList.add(...cardClasses.card);
  //  create card-body
  const cardBody = document.createElement('div');
  cardBody.classList.add(...cardClasses.cardBody);
  //  create card-title
  const cardTitle = document.createElement('h2');
  cardTitle.classList.add(...cardClasses.cardTitle);
  cardTitle.textContent = titles[type];
  //  create card-list
  const cardList = document.createElement('ul');
  cardList.classList.add(...cardClasses.cardList);
  //  mounting card
  cardBody.append(cardTitle);
  card.append(cardBody, cardList);
  //  mounting container
  containers[type].append(card);
  //  return container
  return containers[type];
};
