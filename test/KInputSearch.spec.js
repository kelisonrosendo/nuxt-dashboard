import { mount } from '@vue/test-utils'
import KInputSearch from '@/components/KInputSearch'

const wrapper = mount(KInputSearch, {
  propsData: {
    placeholder: 'eita'
  }
})

describe('Checando o tipo do input de pesquisa', () => {
  test('o input de pesquisa deve ser do tipo text', () => {
    expect(wrapper.find('input').attributes().type).toBe('text')
  })
})

describe('Checando as props do componente', () => {
  const placeholderProp = wrapper.props().placeholder

  test('a prop placeholder deve existir', () => {
    expect(placeholderProp.toBeTruthy)
  })

  test('o valor da prop placeholder deve ser passada para o componente', () => {
    expect(wrapper.find('input').attributes().placeholder).toBe(placeholderProp)
  })
})

