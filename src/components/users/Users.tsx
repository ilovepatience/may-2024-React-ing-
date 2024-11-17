import React, {FC, useEffect, useState} from 'react';
import { IUser } from "../../models/IUser";
import { userService } from "../../services/dummyjson.api.service";
import User from "../user/User";

type PrpsUser = {
    lift : (id: number) => void
}

const Users:FC<PrpsUser> = ({lift}) => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getUsers().then((data) => {
            setUsers(data);
        });
    }, []);

    return (
        <div>
            {
                users.map(value => <User lift={lift}
                    value={value} />)
            }
        </div>
    );
};

export default Users;
