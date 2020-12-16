import React from 'react';
import  Button  from '../components/Button'

export default {
  title: 'Main/Button',
  component: Button,
  argTypes: {
    label: 'Default',
    size: {
      control: { type: "radio", options: ["sm", "md", "lg"] },
  },
  disableShadow: { control: "boolean" },
  disabled:  { control: "boolean" },
  color:{
    control: { type: "radio", options: ["primary", "secondary", "default", 'none'] },
},
  variant:{
    control: { type: "radio", options: ["outline", "text",'none'] },
},
  startIcon:'',
  endIcon:''
  }
};



export const Template = (args) => {
  return  <Button {...args} />;

}
export const Default = Template.bind({})
Default.args = {
  label: "Default",
}

export const Primary = Template.bind({})
Primary.args = {
  color: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: "Secondary",
  color: "secondary",
}

export const Danger = Template.bind({})
Danger.args = {
  label: "Danger",
  color: "danger",
}

export const Small = Template.bind({})
Small.args = {
  label: "Small",
  size: "sm",
}
export const Large = Template.bind({})
Large.args = {
  label: "Large",
  size: "lg",
}

export const Outline = Template.bind({})
Outline.args = {
  label: "Outline",
  variant: "outline",
  color: "primary",
  disableShadow: true,
}

export const Text = Template.bind({})
Text.args = {
  label: "Text",
  variant: "text",
  color: "primary",
}

export const DisableShadow = Template.bind({})
DisableShadow.args = {
  label: "Disabled Shadow",
  disableShadow: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: "Disabled",
  color: "primary",
  disabled: true,
}

export const StartIcon = Template.bind({})
StartIcon.args = {
  color: "primary",
  startIcon: "local_grocery_store",
}

export const EndIcon = Template.bind({})
EndIcon.args = {
  color: "primary",
  endIcon: "local_grocery_store",
}