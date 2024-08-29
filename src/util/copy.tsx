import { CopyToClipboard } from 'react-copy-to-clipboard';
import { message } from 'antd';


export const useCopy = (item: any) => {
    return (
        <>
            <CopyToClipboard
                text={item}
                onCopy={() => {
                    message.info('复制成功')
                }}
            >
                <div
                    style={{
                        cursor: 'pointer',
                    }}
                >
                    <span>{item}</span>
                </div>
            </CopyToClipboard>
        </>
    );
};
