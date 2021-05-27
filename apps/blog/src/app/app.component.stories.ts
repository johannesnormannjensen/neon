
import { Story } from '@storybook/angular';
import { AppComponent } from './app.component';

export default {
  title: 'AppComponent',
  component: AppComponent,
  argTypes: {
    title: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
}

const AppStory: Story<AppComponent> = (args) => ({
  props: args,
});

export const Numeric = AppStory.bind({});
Numeric.args = {
  //👇 This arg is for the story component
  title: 'secondary',
  //👇 The remaining args get passed to the `Table` component
};