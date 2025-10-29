// Compile the list of topics in the page banner
const topicData = {
  {%- for topic in collections.topics -%}
      "{{ topic.data.id }}": {
        title: "{{ topic.data.title }}",
        icon: "{{ topic.data.icon }}",
        summary: "{{ topic.data.summary }}"
      }
    {%- if loop.index < collections.topics.length -%},{%- endif -%}
  {%- endfor -%}
};