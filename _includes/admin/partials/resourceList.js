const resourceList = (entry, fieldsMetaData) => {
  const data = entry.get('data').toJS();
  const resources = data.resources;

  const icon = filetype => {
    switch (filetype) {
      case "pdf":
        return "file-pdf";
        break;
      case "doc":
        return "file-doc";
        break;
      default:
        return "link";
        break;
    }
  };

  if (resources) {
    const resourceCards = resources
      .filter((resource, i) =>
        fieldsMetaData.getIn(['resources', 'resources', data.resources[i]])
      )
      .map((resource, i) => {
        const resourceData= fieldsMetaData.getIn(['resources', 'resources', data.resources[i]]);

        return html`
          <a href="${resourceData.getIn(['url'])}" class="resource-card" data-has-icon>
            <h3 class="resource-card-header h5">
              <svg>
                <use xlinkHref="#svg-${icon(resourceData.getIn(['filetype']))}"></use>
              </svg>
              ${resourceData.getIn(['title'])}
            </h3>
            <div class="resource-card-body">
              ${resourceData.getIn(['description'])}
            </div>
          </a>
        `
      }
    );

    return html`
      <h2>Resources</h2>
      ${resourceCards}
    `;
  } else {
    return false;
  }
};