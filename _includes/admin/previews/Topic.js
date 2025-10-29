const Topic = createClass({
  render: function() {
    const entry = this.props.entry;
    const data = entry.get('data').toJS();

    return html`
      <div>
        {% raw %}<div hidden dangerouslySetInnerHTML=${{ __html: spriteSvg }}></div>{% endraw %}
        <div class="page-banner" data-type="topic">
          <div class="l-wrapper">
            <div class="l-stack-basic">
              <div class="nametag">
                <span class="nametag-badge subhead">Topic</span>
                <div class="nametag-text">
                  <svg>
                    <use xlinkHref="#svg-${data.icon}"></use>
                  </svg>
                  <h2 class="h1">
                    ${data.title}
                  </h2>
                </div>
              </div>
              <p>
                ${this.props.widgetFor('body')}
              </p>
            </div>
          </div>
        </div>
        <div class="l-wrapper">
          <div class="l-section">
            <div class="l-stack">
              <div class="l-wrapper-text l-center">

              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
});