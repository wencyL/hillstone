import React, { useState, useEffect } from "react";
import apiService from "../service/apiService";
import { Table } from "antd";

const Userlist = () => {
    const [userList, setUserList] = useState<any[]>([]);

    const getUserList = async () => {
        const _userList: any[] = await apiService.getUserList();
        if (_userList) setUserList(_userList)
    }

    useEffect(() => {
        getUserList(); 
    }, [])
    
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '联系电话',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '证件号',
            dataIndex: 'idNo',
            key: 'idNo',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            render: (sex: number) => {
                if(sex === 0) return "男";
                if(sex === 1) return "女";
                return null;
            }
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
    ];

      console.log(userList)
    
    return (
        <div className="user-list">
            <Table rowKey="id" dataSource={userList || []} columns={columns} />;
        </div>
    )
}

export default Userlist