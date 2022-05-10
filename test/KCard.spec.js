import { mount } from '@vue/test-utils'


import { cardColors } from '@/constants/index.js'
jest.mock('@/constants/index.js')

import KCard from '@/components/KCard'

const wrapper = mount(KCard, {
  propsData: {
    value: '1',
    percent: '2',
    icon: '3',
    status: '4'
  }
})

describe('Checando o componente', () => {
  test('deve possuir uma classe chamada divider', () => {
    expect(wrapper.attributes().class).toBe('card')
  })
})