import React from "react";

import Button from "./Button";

export default {
  title: "Basics/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Click me!",
};
