import { Layout, Menu, theme } from 'antd';
import { Routes, Route, useNavigate } from "react-router-dom";
import { StructIndex } from "../page/struct";
import { FileIndex } from '../page/file';
import Icon from '@ant-design/icons';
import { TangMuSvg } from '../assets/svg';

const { Header, Content } = Layout;

function PageLayout() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();

    const handleClick = (e: any) => {
        // Use the key of the menu item to navigate
        navigate(e.key);
    };

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
               <Icon component={TangMuSvg}/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={[
                        {
                            key: '/file',
                            label: '文件工具'
                        },
                        {
                            key: "/struct",
                            label: '结构体工具'
                        },
                    ]}
                    style={{ flex: 1, minWidth: 0 }}
                    onClick={handleClick}
                />
            </Header>
            <Content
                style={{
                    margin: "24px 16px",
                    padding: 24,
                    minHeight: 280,
                    height: '86vh',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}>
                <div>
                    <Routes>
                        <Route path="/" element={<FileIndex />} />
                        <Route path="/file" element={<FileIndex />} />
                        <Route path="/struct" element={<StructIndex />} />
                    </Routes>
                </div>
            </Content>
        </Layout>
    )
}

export default PageLayout;