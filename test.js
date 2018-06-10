const isInstalledOnSystem = require('.')

test('isInstalledOnSystem:false', async () => {
	expect(isInstalledOnSystem('gitx')).toBe(false)
})

test('isInstalledOnSystem:true', async () => {
	expect(isInstalledOnSystem('git')).toBe(false)
})