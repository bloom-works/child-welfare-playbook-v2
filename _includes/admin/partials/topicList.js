const topicList = topics => {
  const listItems = topics
    .filter(topic => topicData[topic])
    .map(topic => html`
      <li>
        <a href="#">
          <svg>
            <use xlinkHref="#svg-${topicData[topic].icon}"></use>
          </svg>
          ${topicData[topic].title}
        </a>
      </li>
    `);

  if (listItems && listItems.length > 0) {
    console.log(listItems);
    return html`
      <ul class="page-topics">
        ${listItems}
      </ul>`;
  } else {
    return false;
  }
};