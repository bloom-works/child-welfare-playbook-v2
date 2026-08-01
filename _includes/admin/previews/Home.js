// This file is used only for DecapCMS editor previews.

const Home = createClass({
  render: function() {
    const entry = this.props.entry;
    const data = entry.get('data').toJS();

    const imgStyleTag = {"--background": `url('../images/banners/home.jpg')`};

    const homeTopicList = () => {
      const homeTopics = [];
      for (const i in topicData) {
        homeTopics.push(html`
          <a href="#" class="topic-card">
            <div>
              <svg>
                <use xlinkHref="#svg-${topicData[i].icon}"></use>
              </svg>
              <h2 class="h3">${topicData[i].title}</h2>
            </div>
            <p>${topicData[i].summary}</p>
          </a>
        `)
      };
      return homeTopics;
    };

    return html `
      <div>
        {% raw %}<div hidden dangerouslySetInnerHTML=${{ __html: spriteSvg }}></div>{% endraw %}
        <div class="page-banner">
          <div class="l-wrapper">
            <h2 class="h1">Welcome to the Child Welfare Playbook</h2>
            <p>${data.bannerSubheader}</p>
          </div>
          <div class="page-banner-img" fetchpriority="high" style=${imgStyleTag}></div>

        </div>
        <div class="l-section">
          <div class="l-wrapper">
            <header class="home-header l-stack">
              <div>
                <h2>${data.topicHeader}</h2>
                <p>${data.topicSubheader}</p>
              </div>
            </header>
            <div class="l-grid">
              <div class="l-grid topic-grid">
                ${homeTopicList(topicData)}
              </div>
            </div>
          </div>
        </div>

        <div class="l-section">
          <div class="l-wrapper">
            <header class="story-header l-stack">
              <div>
                <h2>${data.storyHeader}</h2>
                <p>${data.storySubheader}</p>
              </div>
            </header>
          </div>
        </div>
      </div>
    `
  }
});