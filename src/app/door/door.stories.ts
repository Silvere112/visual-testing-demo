import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DoorComponent } from './door.component';

export default {
  component: DoorComponent,
  decorators: [
    moduleMetadata({
      declarations: [DoorComponent],
      imports: []
    }),
  ]

} as Meta;

const Template: Story<DoorComponent> = (args: DoorComponent) => ({
  props: args,
});

export const Door = Template.bind({});
Door.args = {
};
Door.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/evRY7WTny6zHsUAB11Dnc5/Visual-testing-mob-programming?node-id=104%3A98',
  },
};