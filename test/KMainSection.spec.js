import { mount } from '@vue/test-utils'
import KMainSection from '@/components/KMainSection'

const wrapper = mount(KMainSection, {
  propsData: {
    title: 'Título',
    subtitle: 'Subtítulo'
  }
})

describe('Checando classe do componente', () => {
  test('deve possuir uma classe chamada wrapper', () => {
    expect(wrapper.attributes().class).toBe('wrapper')
  })
})

describe('Checando o conteúdo do título e do subtítulo', () => {
  const titleProp = wrapper.props().title
  const subtitleProp = wrapper.props().subtitle

  test('a tag h3 deve receber um título', () => {
    expect(wrapper.find('h3').element.textContent).toBe(titleProp)
  })

  test('a tag p deve receber um subtítulo', () => {
    expect(wrapper.find('p').element.textContent).toBe(subtitleProp)
  })
})

describe('Checando exibição do subtítulo', () => {
  const wrapper = mount(KMainSection, {
    propsData: {
      title: 'Título',
      subtitle: ''
    }
  })
  
  test('deve exibir o subtítulo somente se o mesmo for passado', () => {
    expect(wrapper.props().subtitle).toBe('')
    expect(wrapper.find('p').exists()).toBe(false)
  })
})