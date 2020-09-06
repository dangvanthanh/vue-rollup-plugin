import { render } from '@testing-library/vue';
import VueBase from '../src/VueBase.vue';

test('renders vue base component', () => {
  const { getByText } = render(VueBase, {
    props: {
      msg: 'Vue Base Component'
    }
  });

  getByText('Vue Base Component');
});
