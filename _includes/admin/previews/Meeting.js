const Meeting = createClass({
  render: function() {
    const entry = this.props.entry;
    const fieldsMetaData = this.props.fieldsMetaData;
    const getAsset = this.props.getAsset;
    const data = entry.get('data').toJS();

    return html`
      <div>
        {% raw %}<div hidden dangerouslySetInnerHTML=${{ __html: spriteSvg }}></div>{% endraw %}
        <div class="page-banner" data-type="meeting" data-width="full">
          <div class="l-wrapper">
            <div class="nametag">
              <span class="nametag-badge subhead">${data.meetingType}</span>
              <div class="nametag-text">
                <h2 class="h1">${data.title}</h2>
              </div>
            </div>
            ${topicList(data.tags)}
          </div>
        </div>
        <div class="l-wrapper">
          <div class="l-section">
            <div class="l-stack">
              <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${data.youtubeId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div class="meeting-content l-stack">
                <h3>What we discussed</h3>
                <div>
                  ${this.props.widgetFor('body')}

                  ${resourceList(entry, fieldsMetaData)}

                  ${storyList(entry, fieldsMetaData, getAsset)}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
});