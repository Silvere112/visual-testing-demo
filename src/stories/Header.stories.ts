import type { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import Header from 'src/app/header/header.component';
import { MatButtonModule } from "@angular/material/button";

export default {
  component: Header,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatButtonModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<Header> = (args: Header) => ({
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  username: 'Jane Doe',
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
