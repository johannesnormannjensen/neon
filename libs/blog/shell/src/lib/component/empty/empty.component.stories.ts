
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { moduleMetadata, Story } from '@storybook/angular';
import { EmptyComponent } from './empty.component';

export default {
  title: 'Shell/EmptyComponent',
  component: EmptyComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [EmptyComponent],
      imports: [CommonModule, MatSliderModule,],
    }),
  ],
  argTypes: {
    title: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    color: { control: 'color' }
  },
  parameters: {
    docs: {
      source: {
        type: 'auto'
      }
    },
    storySource: {
      source: `
        @Component({
        selector: 'my-component',
        template: '<p>This is a sample</p>',
        changeDetection: ChangeDetectionStrategy.OnPush,
        })
        export class MyComponent  {
        }`
    },
  }
};

//👇 Some function to demonstrate the behavior
const someFunction = (someValue: string) => {
  return `i am a ${someValue}`;
};

export const EmptyStory: Story<EmptyComponent> = (args) => {
  //👇 Destructure the label from the args object
  const { title } = args;

  //👇 Assigns the function result to a variable and pass it as a prop into the component
  const functionResult = someFunction(title);
  return {
    props: {
      ...args,
      title: functionResult,
    },
  };
};
EmptyStory.args = {
  title: 'secondary',
  color: 'green',
};