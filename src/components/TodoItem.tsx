import Todo from '../models/todo';
import classes from './TodoItem.module.css';

const Item: React.FC<{item: Todo; removeItem: () => void}> = (props) => {
    return (<li className={classes.item} key={props.item.id} onClick={() => props.removeItem()}>{props.item.text}</li>);
}

export default Item;