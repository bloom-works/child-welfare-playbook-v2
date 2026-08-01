// This file is used only for DecapCMS editor previews.

const Strategy = createClass({
  render: function() {
    const entry = this.props.entry;
    const fieldsMetaData = this.props.fieldsMetaData;
    const getAsset = this.props.getAsset;
    const data = entry.get('data').toJS();

    return html`
      <div>
        {% raw %}<div hidden dangerouslySetInnerHTML=${{ __html: spriteSvg }}></div>{% endraw %}
        <div class="page-banner" data-type="strategy" data-width="full">
          <div class="l-wrapper">
            <div class="l-stack-basic">
              <div class="nametag">
                <span class="nametag-badge subhead">Strategy</span>
                <div class="nametag-text">
                  <h2 class="h1">${data.title}</h2>
                </div>
              </div>
              ${topicList(data.topicOrder)}
            </div>
          </div>
        </div>
        <div class="l-wrapper">
          <div class="l-section">
            <div class="l-stack">
              <div class="l-wrapper-text l-center">
                ${this.props.widgetFor('body')}

                ${resourceList(entry, fieldsMetaData)}

                ${storyList(entry, fieldsMetaData, getAsset)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
});