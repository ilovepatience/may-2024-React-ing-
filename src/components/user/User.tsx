import React, { FC } from 'react';
import { IUser } from "../../models/IUser";

type PropsUser = {
    value: IUser;
    lift:(id:number) => void
};

const User: FC<PropsUser> = ({ value, lift }) => {
    return (
        <div key={value.id}>
            <hr />
            <hr />
            <hr />
            <button onClick={() => {
                lift(value.id);
            }}>Show Posts</button>
            <div>{value.firstName}</div>
            <div>{value.lastName}</div>
            <div>{value.maidenName}</div>
            <div>{value.age}</div>
            <div>{value.gender}</div>
            <div>{value.email}</div>
            <div>{value.phone}</div>
            <div>{value.username}</div>
            <div>{value.password}</div>
            <div>{value.birthDate}</div>
            <img src={value.image} alt="lol" />
            <div>{value.bloodGroup}</div>
            <div>{value.height}</div>
            <div>{value.weight}</div>
            <div>{value.eyeColor}</div>
            <ul>
                <li>{value.hair.color}</li>
                <li>{value.hair.type}</li>
            </ul>
            <div>{value.ip}</div>
            <ul>
                <li>{value.address.address}</li>
                <li>{value.address.city}</li>
                <li>{value.address.state}</li>
                <li>{value.address.stateCode}</li>
                <li>{value.address.postalCode}</li>
                <li>{value.address.coordinates.lng}</li>
                <li>{value.address.coordinates.lat}</li>
                <li>{value.address.country}</li>
            </ul>
            <hr />
            <hr />
            <hr />
        </div>
    );
};

export default User;
