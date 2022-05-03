import { mount } from '@vue/test-utils'
import KDivider from '@/components/KDivider.vue'

describe('KDivider', () => {
  const wrapper = mount(KDivider)

  test('é uma instância do Vue', () => {    
    expect(wrapper.vm).toBeTruthy()
  })

  test('possui a classe divider', () => {
    expect(wrapper.attributes().class).toBe('divider')    
  })
})
