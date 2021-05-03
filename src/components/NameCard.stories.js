import React from "react";

import NameCard from "./NameCard";

export default {
  title: "Basics/NameCard",
  component: NameCard,
};

const Template = (args) => <NameCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Namir",
  gender: "male",
  nationality: "ES",
  age: 30,
};
