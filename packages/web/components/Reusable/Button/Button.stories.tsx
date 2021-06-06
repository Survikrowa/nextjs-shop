import { Button } from './Button';
import type { ButtonProps } from './Button';
import { Meta, Story } from '@storybook/react';

const Template: Story<ButtonProps> = (props) => <Button {...props}>{props.children}</Button>;

export const DefaultButtonStory = Template.bind({});
DefaultButtonStory.args = {
  children: 'Click, Click',
};

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { defaultValue: '' },
  },
} as Meta;
