import { render } from '@testing-library/vue';
import Base from '../src/Index.vue';

test('renders vue base component', () => {
  const { getByText } = render(Base, {
    props: {
      msg: 'Base Component'
    }
  });

  getByText('Base Component');
});
