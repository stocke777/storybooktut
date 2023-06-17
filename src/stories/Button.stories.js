import { number } from "prop-types";
import Button from "../components/Button.tsx";

// import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    color: "white",
    bgColor: "blue",
    title: 'Primary',
  },
};

export const Secondary = {
  args: {
    color: "white",
    bgColor: "green",
    title: 'Secondary',
  },
};

export const Large = {
  args: {
    padding: 30,
    title: 'Large',
  },
};

export const Small = {
  args: {
    padding: 5,
    title: 'Small',
  },
};
