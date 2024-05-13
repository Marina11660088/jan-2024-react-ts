import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";


interface IProps {
    user: IUserModel;
}
type IPropsType = IProps & {children?: React.ReactNode} & {lift?:(userId:number) => void};

const UserComponent: FC<IPropsType> = ({user,lift}) => {
    const onClickHandler = () => {
        if (lift) {
            lift(user.id);
        }
    }

    return (
        <div>
            {user.id} {user.name}
            <p>{user.username}</p>
            <p>{user.email}</p>
            <div>
                <button onClick={onClickHandler}>show posts</button>
            </div>
            <hr/>


        </div>
    );
};

export default UserComponent;