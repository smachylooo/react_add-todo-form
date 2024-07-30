import React from 'react';
import { UpdatedTodo } from '../../types/UpdatedTodo';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: UpdatedTodo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <article
      data-id="1"
      className={`TodoInfo ${classNames({
        'TodoInfo--completed': todo.completed,
      })}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
