import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

// 1. You'll need to import the chromatic addon:
import 'storybook-chromatic';

// 2. If you have a global CSS file, import it here:
// import '../src/index.css';

// 3. Load a X.story.js file for each of your src/X.js:
const req = requireContext('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
