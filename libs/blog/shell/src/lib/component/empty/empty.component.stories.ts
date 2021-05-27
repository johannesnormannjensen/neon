
import { Story } from '@storybook/angular';
import { EmptyComponent } from './empty.component';

export default {
  title: 'Shell/EmptyComponent',
  component: EmptyComponent,
  argTypes: {
    title: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
}

const EmptyStory: Story<EmptyComponent> = (args) => ({
  props: args,
});

export const Numeric = EmptyStory.bind({});
Numeric.args = {
  //👇 This arg is for the story component
  title: 'secondary',
  //👇 The remaining args get passed to the `Table` component
};