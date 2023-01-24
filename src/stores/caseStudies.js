// create pinia store case study
import { defineStore } from 'pinia'

export const useCaseStudyStore = defineStore({
  id: 'caseStudy',
  state: () => ({
    caseStudy: null,
    caseStudies: {
      'frida-real-estate-assistant': {
        name: 'Frida - Real Estate Assistant',
        logo: '/img/case-studies/frida-logo.webp',
        description: 'Frida is all you need in a real estate assistant. Frida automates all of your sales and marketing efforts, organizes your properties, let\'s you share them with your contacts, and helps you close more business. It\'s an awesome app built with the latest tech available.',
        img: '/img/case-studies/frida-top.webp',
        bg: '#F5FFF9',
        ctaColor: '#ffffff',
        ctaBg: '#00944F',
        ctaBgLight: '#E2FFF2',
        header: '#1B5D5C',
        hasPrototype: true,
        barColor: '#005353',
        figmaPreview: '/img/case-studies/frida-figma.webp',
        mainItems: [
          {
            label: 'Vue 3 + Vite.js + Github Copilot',
            copy: 'If you\'ve used Copilot you know it\'s mind blowing! I\'m using the latest Vue version, Vite and Naive UI to make this app fast and reliable.'
          },
          {
            label: 'Directus as Database',
            copy: 'Directus is a headless CMS that let\'s you create a database in seconds. It\'s a great tool for small projects and it\'s open source.'
          },
          {
            label: 'Full Figma Prototype',
            copy: 'Full prototype and components in Figma. I created a full prototype so I can mantain and develop product initiatives easier.'
          }
        ],
        sections: [
          {
            title: 'Vue 3 + Vite.js + Github Copilot',
            subtitle: 'Lightning Fast Tech Stack',
            copy: 'Vue 3’s composition API paired with Vite.js provides the site with lightning speed charging times and experience. Github copilot and Visual Studio Code make the dev experience so much better and faster. This is the best stack I’ve worked with so far and is still growing on me!',
            cta: 'View Website',
            img: '/img/case-studies/frida-code.webp',
            bg: '#F9FAFC',
            clickedCta: () => window.open('http://www.soyfrida.io/', '_blank')
          },
          {
            title: 'Using a Database as a Service',
            subtitle: 'Getting the API setup in minutes',
            copy: 'Directus is a really cool tool built on Node.js and Express. It’s a database as a service, which provides the API & Data layer in minutes. It takes a lot of repetitive code you usually need to write to make all the api routes and calls. I really recommend using it in next projects.',
            cta: 'View Directus',
            img: '/img/case-studies/frida-directus.webp',
            bg: '#ffffff',
            clickedCta: () => window.open('https://directus.io/', '_blank')
          },
          {
            title: 'Branding & UI from scratch',
            subtitle: 'Coming up with the entire look & feel',
            copy: 'I have a great passion for design & art since I was a child. My mom is an artist and my dad is in finance, that’s why I like to think I got the best of both worlds. I can code an entire SAAS product, but I can also design the entire branding book, UI, and UX experience.',
            cta: 'View Branding Book',
            img: '/img/case-studies/frida-branding.webp',
            bg: '#F9FAFC',
            clickedCta: () => window.open('https://www.figma.com/file/QVe2p69GZcVIyyyKd7tHU4/FRIDA-2.0?node-id=2%3A505&t=JuQoU4jjTbecwkhk-1', '_blank')
          }
        ]
      },
      'casabianca-cycling': {
        name: 'Casabianca Cycling',
        logo: '/img/casabianca-logo.webp',
        description: 'Exploring a unique opportunity in Colombia: Cycling. After picking up 5 years of expertise on ecommerce saas, I decided to open a Cycling and Atletic Apparel Store. I design every single product and made the online shop and admin from scratch. ',
        img: '/img/case-studies/casabianca-top.webp',
        bg: '#F9FAFC',
        ctaColor: '#ffffff',
        ctaBg: '#00944F',
        ctaBgLight: '#E2FFF2',
        header: '#003535',
        hasPrototype: true,
        barColor: '#005353',
        figmaPreview: '/img/case-studies/casabianca-figma.webp',
        mainItems: [
          {
            label: 'Product Design in Photoshop',
            copy: 'I design the cycling apparel in Photoshop with a great set of mockups. With this tool, we can really get a real sense of how the products will look like in real life.'
          },
          {
            label: 'Shop created with Vue.js',
            copy: 'No questions when choosing the framework and language. In this case, I used Nuxt.js and Vue to create a minimal and awesome online shop. '
          },
          {
            label: 'Using Database as a Service',
            copy: 'I\'m using Strapi for my Database as a service. Strapi is an open source Javascript framework that enables you to create APIs in seconds.'
          }
        ],
        sections: [
          {
            title: 'Using Photoshop to design the cycling apparel mockups',
            subtitle: 'Apparel Mockups',
            copy: 'Photoshop is a pain in the ass for everything except mockups! We love to use it to design our apparel though... We have a complete set of garments that really help us visualize the design before sending it to the printers and then sewing.',
            cta: 'View Website',
            img: '/img/case-studies/casabianca-1.webp',
            bg: '#F1F5F9',
            clickedCta: () => window.open('https://www.casabianca.cc/', '_blank')
          },
          {
            title: 'Vue.js, Nuxt, Tailwind, SASS, Express, Node.js',
            subtitle: 'Modern Jamstack',
            copy: 'Using full stack Javascript, I was able to create a great experience in a short amount of time. Node and Express are lightweight and perform amazing and I’m using Strapi for Database as a Service. Tailwind is a utlity-first CSS library that let’s me focus on speed and isn’t opinionated. Combined with SASS it makes the site look great.',
            cta: 'View Website',
            img: '/img/case-studies/casabianca-code.webp',
            bg: '#ffffff',
            clickedCta: () => window.open('https://www.casabianca.cc/', '_blank')
          },
          {
            title: 'Pantone based color palette',
            subtitle: 'Keeping minimal but cool as fuck',
            copy: 'Simplicity is the ultimate sophistication, and no one does minimal better than Pantone. We try to keep our design as minimal as possible but giving them something new. The process has been really tough but really rewarding at the same time.',
            cta: 'View all available colors',
            img: '/img/case-studies/casabianca-pantones.webp',
            bg: '#F1F5F9',
            clickedCta: () => window.open('https://www.casabianca.cc/colors', '_blank')
          }
        ]
      },
      'hi-there': {
        name: 'Lead Generation Tool',
        logo: '/img/case-studies/hi-there-logo.png',
        description: 'Hi there is a dead simple widget to communicate with your clients, on their preferred channels. You can choose what services you use, select if you want to capture leads, and send contacts to your databases.',
        img: '/img/case-studies/hi-there-top.webp',
        bg: '#6941C6',
        ctaColor: '#ffffff',
        ctaBg: '#6941C6',
        ctaBgLight: '#DFD1FF',
        header: '#27105C',
        barColor: '#7F56D9',
        hasPrototype: true,
        figmaPreview: '/img/case-studies/hi-there-figma.webp',
        mainItems: [
          {
            label: 'Full Stack Javascript',
            copy: 'Using the latest full stack javascript stack, I created a couple of micro-services to deliver minimal widgets to sites.'
          },
          {
            label: 'Directus Database',
            copy: 'Using Directus cloud, I\'m saving a lot of time in dev ops. They have a great paid version of a Database as a service.'
          },
          {
            label: 'Figma and Untitled UI',
            copy: 'Full prototype and components in Figma. I created a full prototype so I can mantain and develop product initiatives easier.'
          }
        ],
        sections: [
          {
            title: 'Vue 3 + Vite.js + Github Copilot',
            subtitle: 'Lightning Fast Tech Stack',
            copy: 'Vue 3’s composition API paired with Vite.js provides the site with lightning speed charging times and experience. Github copilot and Visual Studio Code make the dev experience so much better and faster. This is the best stack I’ve worked with so far and is still growing on me!',
            cta: 'View Website',
            img: '/img/case-studies/hi-there-code.webp',
            bg: '#F1F5F9',
            clickedCta: () => window.open('https://www.joinhithere.com/', '_blank')
          },
          {
            title: 'Modern Script Tag',
            subtitle: 'Getting the API setup in minutes',
            copy: 'Using the modern script tag, I was able to get the API up and running in minutes. I’m using Vite.js to bundle the code and deliver it to the client. We worked hard to make the CSS/JS as clean as possible and prevent conflicts with other scripts.',
            cta: 'View Website',
            img: '/img/case-studies/hi-there-widget.webp',
            bg: '#ffffff',
            clickedCta: () => window.open('https://www.joinhithere.com/', '_blank')
          },
          {
            title: 'Branding & UI from scratch',
            subtitle: 'Coming up with the entire look & feel',
            copy: 'I have a great passion for design & art since I was a child. My mom is an artist and my dad is in finance, that’s why I like to think I got the best of both worlds. I can code an entire SAAS product, but I can also design the entire branding book, UI, and UX experience.',
            cta: 'View Website',
            img: '/img/case-studies/hi-there-branding.webp',
            bg: '#F1F5F9',
            clickedCta: () => window.open('https://www.joinhithere.com/', '_blank')
          }
        ]
      },
      amplified: {
        name: 'The Automation tool for Shopify',
        logo: '/img/case-studies/amplified-logo.png',
        description: 'The Full Automation tool for Shopify. From cart recovery to broadcast campaigns, customers can send email and SMS messages.',
        img: '/img/case-studies/amplified-top.webp',
        bg: '#3A87F7',
        ctaColor: '#ffffff',
        ctaBg: '#3A87F7',
        ctaBgLight: '#B7D4FF',
        header: '#002140',
        barColor: '#3A87F7',
        hasPrototype: true,
        figmaPreview: '/img/case-studies/amplified-figma.png',
        mainItems: [
          {
            label: 'Using Vue 3 and Vite.js',
            copy: 'If you\'ve used Copilot you know it\'s mind blowing! I\'m using the latest Vue version, Vite and Naive UI to make this app fast and reliable.'
          },
          {
            label: 'Complex app, simple code',
            copy: 'With Vue 3, we were able to take out the complexity of a full automation tool and deliver great and simple code that is actually readable.'
          },
          {
            label: 'Complete prototype in Figma',
            copy: 'Complete prototype and components with navigation in Figma. We use it to organize our designs and product initiatives.'
          }
        ],
        sections: [
          {
            title: 'Vue 3 + Vite.js + Github Copilot',
            subtitle: 'Lightning Fast Tech Stack',
            copy: 'Vue 3’s composition API paired with Vite.js provides the site with lightning speed charging times and experience. Github copilot and Visual Studio Code make the dev experience so much better and faster. This is the best stack I’ve worked with so far and is still growing on me!',
            cta: 'View App',
            img: '/img/case-studies/amplified-code.webp',
            bg: '#F1F5F9',
            clickedCta: () => window.open('https://apps.shopify.com/amplified', '_blank')
          },
          {
            title: 'Complex app, simple code',
            subtitle: 'Segmentation, campaign builders, complex flows, and more...',
            copy: 'As a marketing automation app, we have a bunch of complex features that have to work perfect with each other or its chaos. We have complex flows depending on user actions, broadcast campaigns, segmentation builders for contacts and lead capturing widgets.',
            cta: 'View App',
            img: '/img/case-studies/amplified-app.webp',
            bg: '#ffffff',
            clickedCta: () => window.open('https://apps.shopify.com/amplified', '_blank')
          },
          {
            title: 'Shopify environment integration',
            subtitle: 'Handling real traffic',
            copy: 'We have our app on the Shopify Store. We made the marketing automation tool specifically for Shopify Stores and optimized it to get the best results possible for the ecosystem. Because of this, we have to work with integration APIs and maintain them.',
            cta: 'View Shopify App',
            img: '/img/case-studies/amplified-shopify.png',
            bg: '#F1F5F9',
            clickedCta: () => window.open('https://apps.shopify.com/amplified', '_blank')
          }
        ]
      },
      salespop: {
        name: 'Increasing Sales Conversions',
        logo: '/img/case-studies/salespop-logo.png',
        description: 'Salespop is a simple application built for Shopify that promotes sales thorugh Social Proof and Urgency.',
        img: '/img/case-studies/salespop-top.png',
        bg: '#6563FF',
        ctaColor: '#ffffff',
        ctaBg: '#6563FF',
        ctaBgLight: '#DEDDFF',
        header: '#161466',
        barColor: '#6563FF',
        hasPrototype: true,
        figmaPreview: '/img/case-studies/salespop-figma.png',
        mainItems: [
          {
            label: 'Product Design Figma',
            copy: 'Complete prototype and components with navigation in Figma. We use it to organize our designs and product initiatives.'
          },
          {
            label: 'Nuxt.js for Frontend',
            copy: 'No questions when choosing the framework and language. In this case, we used Nuxt.js and Vue to create a minimal and awesome product. '
          },
          {
           label: 'Ruby on Rails for Backend',
            copy: 'We used Ruby on Rails to create the backend of the app. We used the Shopify API to connect to the Shopify Store and get the data we needed.' 
          }
        ],
        sections: [
          {
            title: 'Nuxt.js powering Vue',
            subtitle: 'Using Nuxt for a complex app',
            copy: 'Nuxt.js is a great framework for complex and big vue applications. Vite is a great choice as well nowadays, but Nuxt was the first one to structure the CLI a bit better for large apps. In our case, we needed a server-side rendered application to handle middleware before loading everything.',
            cta: 'View App',
            img: '/img/case-studies/salespop-code.png',
            bg: '#F1F5F9',
            clickedCta: () => window.open('https://apps.shopify.com/shoppop', '_blank')
          },
          {
            title: 'Amazing lightweight widget',
            subtitle: 'Getting the app setup with no-code',
            copy: 'We constructed a lightweight widget in Vite.js and it performs wonders. Vite is a simpler version of Nuxt and better than Vue CLI, making it a great experience for the user and the developer.',
            cta: 'View App',
            img: '/img/case-studies/salespop-widget.png',
            bg: '#ffffff',
            clickedCta: () => window.open('https://apps.shopify.com/shoppop', '_blank')
          },
          {
            title: 'Flexible pop editor',
            subtitle: 'Giving the user infinite options',
            copy: 'We have our app on the Shopify Store. We made the marketing automation tool specifically for Shopify Stores and optimized it to get the best results possible for the ecosystem. Because of this, we have to work with integration APIs and maintain them.',
            cta: 'View Shopify App',
            img: '/img/case-studies/salespop-editor.png',
            bg: '#F1F5F9',
            clickedCta: () => window.open('https://apps.shopify.com/shoppop', '_blank')
          }
        ]
      },
      'printa-delivery': {
        name: 'Making Printing Easy',
        logo: '/img/case-studies/printa-logo.png',
        description: 'Printa Delivery is a complete printing service for Designers and Architects. People can easily print complex projects and get them delivered.',
        img: '/img/case-studies/printa-top.png',
        bg: '#049FE7',
        ctaColor: '#ffffff',
        ctaBg: '#049FE7',
        ctaBgLight: '#BEEAFF',
        header: '#000000',
        barColor: '#049FE7',
        hasPrototype: false,
        mainItems: [
          {
            label: 'Complete Branding Book',
            copy: 'Complete branding book with logos, colors, typography, and many more made with Adobe Illustrator.'
          },
          {
            label: 'Platform and Brand Design',
            copy: 'We designed and tested the platform on Invision. We made emphasis on the mobile version to make designer\'s lives a lot easier.'
          },
          {
            label: 'Coding and Maintenance',
            copy: 'We coded and mantained the project for 3 years (it\'s duration, unfortunately without funds our clients were forced to stop the project).'
          }
        ],
        sections: [
          {
            title: 'Complete Branding Book',
            subtitle: 'Branding from scratch',
            copy: 'We constructed a complete brand book from scratch so the client had the guidelines to protect the logo. We selected all of the typography, colors, uses, logos, and more to make the brand look like ctrl + p (the shortcut to print). Feel free to download the brand book below in PDF.',
            cta: 'Download Branding Book',
            img: '/img/case-studies/printa-branding.png',
            bg: '#F1F5F9',
            clickedCta: () => window.open('/PDF/printa-brandbook.pdf', '_blank')
          },
          {
            title: 'Platform to cut and print',
            subtitle: 'Designing the printing platform',
            copy: 'A lot of designers and artists struggle to print large prints, architectural models, clothes, or mainly anything. We designed the platform to make their lives easier and make printing and cutting seamless and not a pain in the ass. It was super intuitive and easy to use, unfortunately the company closed in 2020 after 7 years in operation.',
            cta: 'Get in Touch',
            img: '/img/case-studies/printa-app.png',
            bg: '#FFFFFF',
            clickedCta: () => window.open('mailto:hola@jpcasabianca.com', '_blank')
          },
          {
            title: 'Coding and maintaining the product',
            subtitle: 'Handling bugs, customer success, and more...',
            copy: 'The platform was robust and user interaction heavy. For this reason, we offered the client reliability in terms of the product, but also customer success. There is a lot of details going on when someone is going to print or cut something complex.',
            cta: 'Get in touch',
            img: '/img/case-studies/printa-saas.png',
            bg: '#F1F5F9',
            clickedCta: () => window.open('mailto:hola@jpcasabianca.com', '_blank')
          }
        ]
      },
      'codesign-studio': {
        name: 'Modern Digital Agency',
        logo: '/img/case-studies/codesign-logo.png',
        description: 'We created a modern digital agency that provided Coding, Design, and Marketing services to SMBs in Colombia, LATAM, and the US.',
        img: '/img/case-studies/codesign-top.png',
        bg: '#952E65',
        ctaColor: '#ffffff',
        ctaBg: '#952E65',
        ctaBgLight: '#FFD7EC',
        header: '#69043A',
        barColor: '#69043A',
        hasPrototype: false,
        mainItems: [
          {
            label: 'Design and Consulting',
            copy: 'We implemented a design and consulting method based on Design Thinking to create unique digital experiences.'
          },
          {
            label: 'Full Stack Development',
            copy: 'From backend to frontend, we provided full-stack programming services. We used Javascript, HTML, SASS, and PHP.'
          },
          {
            label: 'Inbound Marketing',
            copy: 'We specialized in Inbound Marketing and received a Hubspot inbound certification for the agency.'
          }
        ],
        sections: [
          {
            title: 'Design & Consulting',
            subtitle: 'With a focus on Design Thinking',
            copy: 'With a focus on design thinking, we had 30+ clients that included UX consultations, branding books, product design, and much more. We had a really strong design team and we created some wonderful products, websites and brand identities. Feel free to explore some digital assets in my gallery page.',
            cta: 'Download Branding Book',
            img: '/img/case-studies/codesign-design.png',
            bg: '#F1F5F9',
            clickedCta: () => window.open('mailto:hola@jpcasabianca.com', '_blank')
          },
          {
            title: 'Full Stack Development',
            subtitle: 'SASS, HTML5, JQuery, PHP, Laravel, and more...',
            copy: 'With Vue and React still not available, we used the technology we had at our disposal. At the time, JQuery was very strong and we would create full stack applications with PHP and Laravel as a backend. SASS was around the block and made CSS a lot easier. As did Bootstrap, Zurb, and all the other frameworks.',
            cta: 'Get in Touch',
            img: '/img/case-studies/codesign-code.png',
            bg: '#ffffff',
            clickedCta: () => window.open('mailto:hola@jpcasabianca.com', '_blank')
          },
          {
            title: 'Inbound Marketing',
            subtitle: 'Teaching our clients the marketing funnel',
            copy: 'Inbound marketing is really important, especially for small to medium businesses. Unlike outbound marketing, with inbound the clients looks for the brand and not the other way around. Converting a client this way is a lot easier and cheaper. Ranging from Facebook Ads and Adwords, to SEO optimization, we strived to make growth important as well.',
            cta: 'Get in touch',
            img: '/img/case-studies/codesign-marketing.png',
            bg: '#F1F5F9',
            clickedCta: () => window.open('mailto:hola@jpcasabianca.com', '_blank')
          }
        ]
      }
    }
  }),
  actions: {
    setCaseStudy(slug) {
      if (this.caseStudies[slug]) this.caseStudy = this.caseStudies[slug]
    }
  }
})