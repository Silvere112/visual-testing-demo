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

export const OpenElevator = Template.bind({});
OpenElevator.args = {
  closed : false
};
OpenElevator.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/evRY7WTny6zHsUAB11Dnc5/Visual-testing-mob-programming?node-id=136%3A219',
  },
};

export const ClosedElevator = Template.bind({});
ClosedElevator.args = {
  closed : true
};
ClosedElevator.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/evRY7WTny6zHsUAB11Dnc5/Visual-testing-mob-programming?node-id=140%3A219',
  },
};