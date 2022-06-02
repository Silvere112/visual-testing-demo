import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ExampleComponent } from "./example.component";

export default {
  component: ExampleComponent,
  decorators: [
    moduleMetadata({
      declarations: [ExampleComponent],

    }),
  ]

} as Meta;

const Template: Story<ExampleComponent> = (args: ExampleComponent) => ({
  props: args,
});

export const Example = Template.bind({});
Example.args = {
  anInput: "test"
};


