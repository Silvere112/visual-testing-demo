import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ElevatorComponent } from './elevator.component';

export default {
  component: ElevatorComponent,
  decorators: [
    moduleMetadata({
      declarations:  [ElevatorComponent],
      imports: []
    }),
  ]

} as Meta;

const Template: Story <ElevatorComponent> = (args: ElevatorComponent) => ({
  props: args,
});

export const Elevator = Template.bind({});
Elevator.args = {
};
Elevator.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/evRY7WTny6zHsUAB11Dnc5/Visual-testing-mob-programming?node-id=136%3A219',
  },
};