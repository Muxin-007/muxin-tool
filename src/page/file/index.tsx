import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Button, Card, Form, Input, List, Table } from "antd";
import { useCopy } from "../../util/copy";
import { useBoolean } from "ahooks";


export function FileIndex() {
    const [data, setData] = useState<any[]>([]);
    const [loading, { setTrue, setFalse }] = useBoolean(false);

    const handleSearch = async (values: any) => {
        setData([])

        setTrue()
        const path = values.path;
        const keyword = values.keyword;
        const res: string[] = await invoke("search_file_by_keyword_api", { path, keyword })

        const tempArr: any[] = []
        Object.keys(res).map((k: any) => {
            tempArr.push({
                path: k,
                key: k,
                rowNum: <div className="flex space-x-4">{
                    res[k].map((item: any, index: number) => {
                        return <span key={index}>{item}</span>
                    })
                }</div>
            })
        })
        setData(tempArr)
        setFalse()
    }


    return (
        <div>
            <Card>
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={handleSearch}
                    initialValues={
                        {
                            path: '/Users/muxin/Desktop',
                            keyword: '我是大神'
                        }
                    }
                >
                    <Form.Item
                        label="文件路径"
                        name="path"
                        rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="关键词"
                        name="keyword"
                        rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            搜索
                        </Button>
                    </Form.Item>
                </Form>
                <Table columns={[
                    {
                        title: '文件路径',
                        dataIndex: 'path',
                        key: 'path',
                        render: useCopy,
                    },
                    {
                        title: '出现行号',
                        dataIndex: 'rowNum',
                        key: 'rowNum',
                    },
                ]} loading={loading} dataSource={data} pagination={false} />

            </Card>
        </div>
    )
}

