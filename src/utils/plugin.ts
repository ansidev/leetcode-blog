import _get from 'lodash.get'

import siteConfig from '@/configs/site'

const { plugins } = siteConfig

export const isPluginEnabled = (pluginName: string) => typeof _get(plugins, pluginName) === 'object'
export const getPluginConfig = (key: string) => _get(plugins, key)
