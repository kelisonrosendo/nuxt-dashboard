import { mount } from '@vue/test-utils'
import KDivider from '@/components/KDivider'

const wrapper = mount(KDivider)

describe('Checando o componente', () => {
  test('deve possuir uma classe chamada divider', () => {
    expect(wrapper.attributes().class).toBe('divider')
  })
})