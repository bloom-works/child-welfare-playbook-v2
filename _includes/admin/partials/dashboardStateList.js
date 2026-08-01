// Show lists of states that have implemented
// the measures on a dashboard page.
//
// On the site, we render this component with the dashboardStateList shortcode in .eleventy.js

const dashboardStateList = {
  id: "dashboardStateList",
  label: "Dashboard State List",
  pattern: /^{[%+Z](-?)\s*dashboardStateList\s+dashboardData\s*(-?)[%+Z]}$/,
    fields: [
    {
      name: 'field',
      label: 'Field',
      widget: 'hidden'
    }
  ],
    fromBlock: function(match) {
    return {
      field: "dashboardData"
    };
  },

  toBlock: function(data) {
    return '{' + '% dashboardStateList dashboardData %' + '}';
  },

  toPreview: function(data) {
    return `
      <ul>
        <li><strong>X states</strong> implement Standard #1</li>
        <li><strong>X states</strong> implement Standard #2</li>
        <li><strong>X states</strong> implement Standard #3</li>
        <li>Etc.</li>
      </ul>
    `;
  }
};