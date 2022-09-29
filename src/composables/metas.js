// create meta tags composable
import { useRoute } from 'vue-router'

export function useMetas() {
  const route = useRoute()

  const url = ref(`https://www.jpcasabianca.com${route.path}`)

  const metas = ref({
    title: 'JP Casabianca | Senior Designer and Developer | Remote EST',
    meta: [
      {
        name: 'description',
        content: 'Hey, I\'m JP. An experienced UI/UX Designer and Engineer. I can build full prototypes in Figma/Framer designed from scratch. Also, I can code them in Vue3/React and Vite.js, so I really bring value to product teams. I love new challenges and gravel cycling!'
      },
      {
        name: 'keywords',
        content: 'JP Casabianca, Casabianca, Remote Dev Colombia, Remote Dev Vue EST, Designer, Frontend, UX, Engineer, Figma'
      },
      {
        name: 'image',
        content: 'https://res.cloudinary.com/dpifbvbai/image/upload/v1664483318/user.png'
      },
      {
        name: 'url',
        content: url.value
      }
    ]
  })

  const setMetaTitle = title => {
    metas.value.title = `${title} | ${metas.value.title}`
  }

  const setMeta = metaObject => {
    const index = metas.value.meta.findIndex(item => item.name === metaObject.name)
    if (index !== -1) {
      metas.value.meta[index].content = metaObject.content
    }
  }

  return { metas, setMetaTitle, setMeta }
}