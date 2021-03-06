import AdvancedNumberFilter from 'components/AdvancedNumberFilter/AdvancedNumberFilter';
import {NumberFilter} from 'core/filters';
import {configTests} from 'helpers/config-tests';
import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';

describe('AdvancedNumberFilter', () => {
  it('renders without crashing', () => {
    configTests()
      .then(() => {
        const div = document.createElement('div');
        const filter: NumberFilter = new NumberFilter();
        ReactDOM.render(
          <MemoryRouter>
            <AdvancedNumberFilter filter={filter}/>
          </MemoryRouter>,
          div,
        );
        ReactDOM.unmountComponentAtNode(div);
      });
  });
});
