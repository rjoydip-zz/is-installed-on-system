const isInstalledOnSystem = require('.')

test('isInstalledOnSystem:false', () => {
	expect(isInstalledOnSystem('gitx')).toBe(false)
})

test('isInstalledOnSystem:true', () => {
	expect(isInstalledOnSystem('git')).toBe(false)
})