const plugin = require('tailwindcss/plugin')

const hexToRGB = (h) => {
  let r = 0, g = 0, b = 0

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1]
    g = "0x" + h[2] + h[2]
    b = "0x" + h[3] + h[3]
    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2]
    g = "0x" + h[3] + h[4]
    b = "0x" + h[5] + h[6]
  }

  return +r + " " + +g + " " + +b
}

const tailwindColorVariables = plugin.withOptions((options = {}) => {
  return ({ addBase, theme }) => {
    const onlyColorGroups = options.onlyColorGroups ?? []
    const colorFormat = options.colorFormat ?? 'hex'

    const extractColorVars = (colorObj, colorGroup = '') => {
      return Object.keys(colorObj).reduce((vars, colorKey) => {
        const value = colorObj[colorKey]

        let newVars = {}

        if (typeof value !== 'string') {
          newVars = extractColorVars(value, `-${colorKey}`)
        } else if (onlyColorGroups.length == 0 || onlyColorGroups.includes(colorGroup)) {
          const getColor = colorFormat === 'rgb' ? ((v) => v.startsWith('#') ? hexToRGB(v) : v) : ((v) => v)
          newVars = {
            [`--tw-color${colorGroup}-${colorKey}`]: getColor(value)
          }
        }

        return { ...vars, ...newVars }
      }, {})
    }

    addBase({
      ':root': extractColorVars(theme('colors')),
    })
  }
})

module.exports = {
  tailwindColorVariables,
}
