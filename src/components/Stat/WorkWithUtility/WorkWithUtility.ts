const WorkWithUtility = ({ cardText, className, secondChild } : {
    cardText: string;
    className: string;
    secondChild: HTMLElement;
}
) => {
  const self = document.createElement('div') as HTMLElement;
  const cardHeading = document.createElement('h2') as HTMLHeadingElement;
  cardHeading.textContent = cardText;
  self.className = className;

  self.insertAdjacentElement('afterbegin', cardHeading);
  self.insertAdjacentElement('beforeend', secondChild);
  return self;
}

export default WorkWithUtility;
