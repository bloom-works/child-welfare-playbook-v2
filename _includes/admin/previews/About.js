// This file is used only for DecapCMS editor previews.

const About = createClass({
  render: function() {
    const entry = this.props.entry;
    const data = entry.get('data').toJS();

    const imgStyleTag = {
      "--background": `url('../images/banners/about.jpg')`,
      "--mask": `url("../images/banners/mask4.svg")`,
      "--circle": `url("/images/banners/banner-circle-3.svg")`
    };

    return html `
      <div>
        {% raw %}<div hidden dangerouslySetInnerHTML=${{ __html: spriteSvg }}></div>{% endraw %}
        <div class="page-banner">
          <div class="l-wrapper">
            <h2 class="h1">${data.title}</h2>
            <p>${data.pageDescription}</p>
          </div>
          <div class="page-banner-img" fetchpriority="high" style=${imgStyleTag}></div>

        </div>
        <div class="l-wrapper">
        <div class="l-section">
          <div class="l-wrapper-text">
            <div class="l-stack">
              ${this.props.widgetFor('content')}
             </div>
            </div>
        </div>
      </div>
      </div>
    `
  }
});