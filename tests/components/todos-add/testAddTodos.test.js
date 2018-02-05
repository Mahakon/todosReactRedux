import {shallow} from 'enzyme'
import AddTodos from '../../../src/scripts/componets/todos-add/AddTodos'

describe("<AddTodos/> UI Component", () => {
   expect(
       shallow(<AddTodos/>)
           .find('div.todos-add_select-all')
           .length
   ).toBe(1)
});