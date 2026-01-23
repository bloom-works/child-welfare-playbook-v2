const Dashboard = createClass({
  render: function() {
    const entry = this.props.entry;
    const data = entry.get('data').toJS();

    return html`
      <div>
        {% raw %}<div hidden dangerouslySetInnerHTML=${{ __html: spriteSvg }}></div>{% endraw %}
        <div class="page-banner" data-type="dashboard" data-width="full">
          <div class="l-wrapper">
            <div class="nametag">
              <span class="nametag-badge subhead">Dashboard</span>
              <div class="nametag-text">
                <h2 class="h1">${data.title}</h2>
              </div>
            </div>
            <p>${data.description}</p>
          </div>
        </div>
        <div class="l-wrapper">
          <div class="l-section">
            <div class="wrapper-text">
              <div class="l-stack">
                ${this.props.widgetFor('intro')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
});