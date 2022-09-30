import path from 'path'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'vite-plugin-vue-layouts'
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import Pages from 'vite-plugin-pages'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
		alias: {
			'~/': `${path.resolve(__dirname, 'src')}/`,
		},
	},
	esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  plugins: [
    vue(),
    Layouts(),
    Components(),
    Pages(),
    WindiCSS(),
		Icons(),
    AutoImport({
			imports: [
				'vue',
				'vue-router',
				'vue-i18n',
				'@vueuse/head',
				'@vueuse/core',
				{ pinia: ['storeToRefs'] },
			],
			dts: true,
		}),
  ],
	ssgOptions: {
    onFinished() {
			generateSitemap({
				dynamicRoutes: [
					'/work/casabianca-cycling',
					'/work/frida-real-estate-assistant',
					'/work/hi-there',
					'/work/amplified',
					'/work/printa-delivery',
					'/work/codesign-studio',
					'/work/salespop'
				]
			})
		},
  },
})
