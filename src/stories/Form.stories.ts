import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { FormComponent } from "src/app/form/form.component";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";

export default {
  component: FormComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatButtonModule, BrowserAnimationsModule, MatInputModule],
    }),
  ]

} as Meta;

const Template: Story<FormComponent> = (args: FormComponent) => ({
  props: args,
});

export const Role = Template.bind({});
Role.args = {
  placeHolder: "Role",
  actionLabel: "Send & Logout",
  color: "warn"
};

export const Username = Template.bind({});
Username.args = {
  placeHolder: "Username",
  actionLabel: "Sign In",
  color: "primary"
};

