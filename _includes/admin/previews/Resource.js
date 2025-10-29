const Resource = createClass({
  render: function() {
    const entry = this.props.entry;
    const data = entry.get('data').toJS();

    let button;

    if (data.file) {
      button = html`
        <a class="button" data-has-icon href="${data.file}">
          <span class="icon-animation download-animation">
            <svg class="card-download-arrow">
              <use xlinkHref="#svg-download-simple-arrow"></use>
            </svg>
            <svg>
              <use xlinkHref="#svg-download-simple-box"></use>
            </svg>
          </span>
          Download
        </a>
      `;
    } else {
      button = html`
        <a class="button" data-has-icon href="${data.url}">
          <span class="icon-animation learn-more-animation">
           <svg>
              <use xlinkHref="#svg-learn-more-circle"></use>
            </svg>
            <svg class="card-learn-arrow">
              <use xlinkHref="#svg-learn-more-arrow"></use>
            </svg>
          </span>
          Learn more
        </a>
      `
    }

    return html`
      <div>
        {% raw %}<div hidden dangerouslySetInnerHTML=${{ __html: spriteSvg }}></div>{% endraw %}
        <div class="content">
          <div class="resource-detail">
            <div class="l-wrapper">
              <div class="nametag">
                <span class="nametag-badge subhead">Resource</span>
                <div class="nametag-text">
                  <h2>${data.title}</h2>
                  <p>${data.description}</p>
                </div>
              </div>

              ${topicList(data.tags)}

              <p class="resource-download">
                ${button}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
});