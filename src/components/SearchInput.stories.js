import React from "react";

import SearchInput from "./SearchInput";

export default {
  title: "Basics/SearchInput",
  component: SearchInput,
};

const Template = (args) => <SearchInput {...args} />;

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "type your name!",
};
