const topicList = topics => {
  const listItems = topics
    .map(topic => {
      const topicKey = topic.topic ? topic.topic : topic;
      return topicData[topicKey];
    })
    .filter(data => !!data)
    .map(data => html`
      <li>
        <a href="#">
          <svg>
            <use xlinkHref="#svg-${data.icon}"></use>
          </svg>
          ${data.title}
        </a>
      </li>
   `);

  if (listItems && listItems.length > 0) {
    return html`
      <ul class="page-topics">
        ${listItems}
      </ul>`;
  } else {
    return false;
  }
};