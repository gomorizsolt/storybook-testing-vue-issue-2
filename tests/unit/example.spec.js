import { mount } from '@vue/test-utils';
import { composeStories } from '@storybook/testing-vue';
import * as buttonStories from '../../src/stories/Button.stories';

const { Primary } = composeStories(buttonStories)

describe('Button', () => {
  it('renders props.label when passed', () => {
    const buttonWrapper = mount(Primary(), {
      propsData: {
        label: 'Apply filters'
      },
    });

    expect(buttonWrapper.text()).toEqual('Apply filters');
  })
})
