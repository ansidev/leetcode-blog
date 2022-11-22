import siteConfig from '@/site.config'
import _get from 'lodash.get'

const { plugins } = siteConfig

export const isPluginEnabled = (pluginName: string) =>
  typeof _get(plugins, pluginName) === 'object'
