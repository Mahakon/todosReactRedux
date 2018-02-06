import {shallow} from 'enzyme'
import AddTodos from '../../../componets/todos-add/AddTodos'

describe("<AddTodos/> UI Component", () => {
   expect(
       shallow(<AddTodos numTodosItems={global.testStates[0].todosArray.length}/>)
           .find('div.todos-add_select-all')
           .length
   ).toBe(1)
});