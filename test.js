import test from 'ava'

import isInstalledOnSystem from './'

test('isInstalledOnSystem:false', async t => {
	t.is(isInstalledOnSystem('gitx'), true)
})

test('isInstalledOnSystem:true', async t => {
	t.is(isInstalledOnSystem('git'), true)
})