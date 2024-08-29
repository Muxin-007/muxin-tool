import { Card, Tabs, TabsProps } from "antd";
import { SearchFileModule } from "./search";
import { SearchOutlined } from "@ant-design/icons";

export function FileIndex() {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '搜索文件',
            children: <SearchFileModule />,
            icon: <SearchOutlined />
        }
    ];

    const onChange = (key: string) => {
        console.log(key);
    };


    return (
        <div>
            <Card>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </Card>
        </div>
    )
}

