import { shallow } from 'enzyme'
import TodosItem from '../../../componets/todos-list/TodosItem'
import { FILTER_ALL } from '../../../constants/FilterTypes'

describe("<AddTodos/> UI Component", () => {
    let todosElement;
    beforeAll(() => {
        todosElement = {
            id: 42525,
            text: "maha",
            completed: false
        }
    });
    it('should be', () => {
        expect(
            shallow(
                <TodosItem
                    key={todosElement.id}
                    completed={todosElement.completed}
                    currentFilter=
                        {FILTER_ALL}
                    value={todosElement.text}
                    id={todosElement.id}
                />)
                .find('div.todos-item')
                .length
        ).toBe(1)
    })
});