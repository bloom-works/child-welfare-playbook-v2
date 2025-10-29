const storyList = (entry, fieldsMetaData, getAsset) => {
  const data = entry.get('data').toJS();
  const stories = data.stories;

  if (stories) {
    const storyCards = stories
      .filter((story, i) =>
        fieldsMetaData.getIn(['stories', 'stories', data.stories[i]])
      )
      .map((story, i) => {
        const storyData= fieldsMetaData.getIn(['stories', 'stories', data.stories[i]]);
        const title = storyData.getIn(['title']);
        const storyType = storyData.getIn(['storyType']);
        const description = storyData.getIn(['description']);
        const author = storyData.getIn(['author']);
        const date = storyData.getIn(['date']);
        const url = storyData.getIn(['url']);
        const image = storyData.getIn(['image']);
        const imageUrl = getAsset(image).toString();

        return html`
          <div class="story-card-wrapper">
            <a class="story-card" href="${url}">
              <span class="nametag-badge subhead">${storyType}</span>
              <img src="${imageUrl}" alt="" />
              <div class="story-card-content">
                <h3>${title}</h3>
                <p>${description}</p>
                <p class="story-card-meta subhead">Written by ${author} on ${date}</p>
              </div>
            </a>
          </div>
        `
      });

    return html`
      <h2>Stories</h2>
      ${storyCards}
    `;
  } else {
    return false;
  }
};