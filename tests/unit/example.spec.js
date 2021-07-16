import { shallowMount } from '@vue/test-utils';
import { composeStories } from '@storybook/testing-vue';
import * as buttonStories from '../../src/stories/Button.stories';

const { Primary } = composeStories(buttonStories)

describe('Button', () => {
  it('renders props.msg when passed', () => {
    const buttonWrapper = shallowMount(Primary(), {
      propsData: {
        label: 'Apply filters'
      }
    });

    expect(buttonWrapper.text()).toEqual('Apply filters');
  })
})
