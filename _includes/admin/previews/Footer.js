const Footer = createClass({
  render: function() {
    const entry = this.props.entry;
    const data = entry.get('data').toJS();
    return html `
      <div>
        {% raw %}<div hidden dangerouslySetInnerHTML=${{ __html: spriteSvg }}></div>{% endraw %}
        <footer class="footer">
          <div class="footer-img"></div>
          <div class="l-wrapper">
            <div class="l-stack-basic">
              <h2>${data.title}</h2>
              ${this.props.widgetFor('description')}
              <p><a href="${data.buttonURL}" class="button">${data.buttonText}</a></p>
              <p class="footer-copyright subhead">${data.credit}  •  ©${new Date().getFullYear()}</p>
            </div>
          </div>
        </footer>
      </div>
    `
  }
});