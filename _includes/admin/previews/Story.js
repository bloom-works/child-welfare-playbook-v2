// This file is used only for DecapCMS editor previews.

const Story = createClass({
  render: function() {
    const entry = this.props.entry;
    const fieldsMetaData = this.props.fieldsMetaData;
    const data = entry.get('data').toJS();
    const image = data.image;

    const bgStyle = {"--background": `${this.props.getAsset(image).toString()}`};


    return html`
      <div>
        {% raw %}<div hidden dangerouslySetInnerHTML=${{ __html: spriteSvg }}></div>{% endraw %}
        <div class="page-banner" data-type="story" data-width="full" style=${bgStyle}>
          <div class="l-wrapper">
              <div class="nametag">
                <span class="nametag-badge subhead">${data.storyType}</span>
                <div class="nametag-text">
                  <h2 class="h1">${data.title}</h2>
                </div>
              </div>
              ${topicList(data.tags)}
            <p class="subhead">Written by ${data.author} on ${data.date}</p>
          </div>
        </div>
        <div class="l-wrapper">
          <div class="l-section">
            <div class="l-wrapper-text l-center">
              <div class="l-stack">
                ${this.props.widgetFor('body')}

                ${resourceList(entry, fieldsMetaData)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
});