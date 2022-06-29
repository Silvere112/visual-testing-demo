import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { WallComponent } from './wall.component';

export default {
  component: WallComponent,
  decorators: [
    moduleMetadata({
      declarations:  [WallComponent],
      imports: []
    }),
  ]

} as Meta;

const Template: Story <WallComponent> = (args: WallComponent) => ({
  props: args,
});

export const Wall = Template.bind({});
Wall.args = {};
Wall.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/evRY7WTny6zHsUAB11Dnc5/Visual-testing-mob-programming?node-id=104%3A97',
  },
};

