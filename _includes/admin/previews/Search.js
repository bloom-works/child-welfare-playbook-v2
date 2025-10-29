const Search = createClass({
  render: function() {
    const entry = this.props.entry;
    const data = entry.get('data').toJS();

    const imgStyleTag = {
      "--background": `url('../images/banners/search.jpg')`,
      "--mask": `url("../images/banners/mask2.svg")`,
      "--circle": `url("/images/banners/banner-circle-5.svg")`
    };

    return html `
      <div>
        {% raw %}<div hidden dangerouslySetInnerHTML=${{ __html: spriteSvg }}></div>{% endraw %}
        <div class="page-banner">
          <div class="l-wrapper">
            <h2 class="h1">${data.title}</h2>
            <p>${data.subheader}</p>
          </div>
          <div class="page-banner-img" fetchpriority="high" style=${imgStyleTag}></div>

        </div>
      </div>
    `
  }
});