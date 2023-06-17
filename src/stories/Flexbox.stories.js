
import Flexbox from "../components/Flexbox.tsx";
import Box from "../components/Box.tsx";
import { string } from "prop-types";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Flexbox',
  component: Flexbox,
  tags: ['autodocs'],
  args:{
    children: <div><Box/></div>
  }
};



// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    bgColor: "blue",
  },
};

// export const Secondary = {
//   args: {
//     bgColor: "green",
//   },
// };

// export const Space = {
//   args: {
//     gap: 15,
//   },
// };

// export const NoSpace = {
//   args: {
//     gap: 0,
//   },
// };
