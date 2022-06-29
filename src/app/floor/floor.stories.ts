import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FloorComponent } from './floor.component';
import { ElevatorComponent } from "../elevator/elevator.component";
import { DoorComponent } from "../door/door.component";
import { WallComponent } from "../wall/wall.component";

export default {
  component: FloorComponent,
  decorators: [
    moduleMetadata({
      declarations: [FloorComponent, ElevatorComponent, DoorComponent, WallComponent],
      imports: []
    }),
  ]

} as Meta;

const Template: Story<FloorComponent> = (args: FloorComponent) => ({
  props: args,
});

export const Floor = Template.bind({});
Floor.args = {
};
Floor.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/evRY7WTny6zHsUAB11Dnc5/Visual-testing-mob-programming?node-id=168%3A360',
  },
};
