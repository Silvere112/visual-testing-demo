import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ExampleComponent } from "./example.component";

export default {
  component: ExampleComponent,
  decorators: [
    moduleMetadata({
      declarations: [ExampleComponent],
      imports: []
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
Example.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/evRY7WTny6zHsUAB11Dnc5/Visual-testing-mob-programming?node-id=103%3A178',
  },
};

export const Example2 = Template.bind({});
Example2.args = {
  anInput: "test"
};