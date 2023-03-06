import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

const USER_COUNT_BASE_URL = "http://localhost:8090";
var search = ""


function getUserCount() {
    return axios.get(USER_COUNT_BASE_URL+search);
    }

function test() {
    return new Promise(function (resolve, reject) {
        getUserCount().then((res) => {
            resolve(res.data);
        },
        (error) => {
        reject(error);
    });
    });
};

export default function GetCount() {
    const [count, setCount] = useState([]);
    search = useLocation()['search']

    async function counter() {
        await test().then(function(value) {
            setCount(value)
        });
    };

    if (search.search("IdentifyEvents")>0) {
        search = "/getUsersCount" + search
        counter()
        return(
            <div className="broad visual">
                <h2>Identify Events: {count.length}</h2>
                <table className="table table-bordered table-hover ">
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            count.map((text) => (
                                <tr>
                                    <td>{text.userId}</td>
                                    <td>{text.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    if (search.search("TrackEvents")>0) {
        search = "/getEventsCount" + search
        counter();
        return(
            <div className="broad visual">
                <h2>Track Events: {count.length}</h2>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Link</th>
                            <th>UserId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            count.map((text, index) => (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{text.date}</td>
                                    <td>{text.link}</td>
                                    <td>{text.userId}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}