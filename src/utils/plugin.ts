import _get from 'lodash.get'
import siteConfig from '@/site.config'
const { plugins } = siteConfig

export const isPluginEnabled = (pluginName: string) => typeof _get(plugins, pluginName) === 'object'
