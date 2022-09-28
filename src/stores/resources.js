import { defineStore } from 'pinia'

export const useResourcesStore = defineStore({
  id: 'resources',
  state: () => ({
    resourcesFilter: { label: 'Product & Engineering', value: 'marketing' },
    resourcesFilters: [
      { label: 'View All', value: 'all' },
      { label: 'Design & Research', value: 'design' },
      { label: 'Product & Engineering', value: 'engineering' },
      { label: 'Productivity', value: 'productivity' },
      { label: 'Marketing & Analytics', value: 'marketing' },
    ],
    resourcess: {
      productivity: [
        {
          "name": "Stack Browser",
          "url": "https://stackbrowser.com/",
          "subject": "productivity"
        },
        {
          "name": "Firefox Developer Edition",
          "url": "https://www.mozilla.org/en-US/firefox/developer/",
          "subject": "productivity"
        },
        {
          "name": "Notion",
          "url": "https://www.notion.so/",
          "subject": "productivity"
        },
        {
          "name": "Slack",
          "url": "https://slack.com/",
          "subject": "productivity"
        },
        {
          "name": "Krisp.ai",
          "url": "https://krisp.ai/",
          "subject": "productivity"
        },
        {
          "name": "Medium",
          "url": "https://medium.com/",
          "subject": "productivity"
        },
        {
          "name": "Surfshark",
          "url": "https://surfshark.com/",
          "subject": "productivity"
        },
        {
          "name": "Mountain Duck",
          "url": "https://mountainduck.io/",
          "subject": "productivity"
        },
        {
          "name": "Zoom",
          "url": "https://zoom.us/",
          "subject": "productivity"
        },
        {
          "name": "Todoist",
          "url": "https://todoist.com/",
          "subject": "productivity"
        },
        {
          "name": "Trello",
          "url": "https://trello.com/",
          "subject": "productivity"
        },
        {
          "name": "Google Drive",
          "url": "https://drive.google.com/",
          "subject": "productivity"
        },
        {
          "name": "Evernote",
          "url": "https://evernote.com/",
          "subject": "productivity"
        },
        {
          "name": "CloudApp",
          "url": "https://www.getcloudapp.com/",
          "subject": "productivity"
        },
        {
          "name": "Grammarly",
          "url": "https://www.grammarly.com/",
          "subject": "productivity"
        },
        {
          "name": "Loom",
          "url": "https://www.loom.com/",
          "subject": "productivity"
        },
        {
          "name": "Asana",
          "url": "https://asana.com/",
          "subject": "productivity"
        },
        {
          "name": "Basecamp",
          "url": "https://basecamp.com/",
          "subject": "productivity"
        },
        {
          "name": "Numi",
          "url": "https://numi.io/",
          "subject": "productivity"
        },
        {
          "name": "Feedly",
          "url": "https://feedly.com/",
          "subject": "productivity"
        },
        {
          "name": "Product Hunt",
          "url": "https://www.producthunt.com/",
          "subject": "productivity"
        },
        {
          "name": "Cloudinary",
          "url": "https://cloudinary.com/",
          "subject": "productivity"
        },
        {
          "name": "Whereby",
          "url": "https://whereby.com/",
          "subject": "productivity"
        },
        {
          "name": "Font Ninja",
          "url": "https://fontninja.io/",
          "subject": "productivity"
        },
        {
          "name": "ColorZilla",
          "url": "https://www.colorzilla.com/",
          "subject": "productivity"
        }
      ]
    },
    resources: null
  }),
  getters: {
    activeResources: state => {
      if (state.resources) {
        if (state.resourcesFilter.value == 'all') {
          return state.resources
        }
        return state.resources.filter(item => item.subject == state.resourcesFilter.value)
      }
      return null
    }
  },
  actions: {
    setResourcesFilter(filter) {
      this.resourcesFilter = filter
    },
    setResources(resources) {
      this.resources = resources
    }
  }
})