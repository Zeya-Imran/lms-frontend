'use client'
import { useState, useEffect } from 'react';
import Layout from '@components/shared/layout';
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Carriculum = ({title})=>{
    const [open, setOpen] = useState(false);
    useEffect(()=>{
        console.log();
    },[])
console.log(title);
    return(
        <main>
            <Layout
                title={title.split("-").join(' ')}
                subtitle='Add or remove carriculumn and media files'
            >
                <Button
                    size='large'
                    type='primary'
                    icon={<PlusOutlined />}
                    className='flex items-center bg-green-500'
                    style={{borderRadius:0}}
                    onClick={()=>setOpen(!open)}
                >
                Add something
                </Button>
                <Modal open={open} onCancel={()=>setOpen(!open)}>
                    hiiiiiiiiiiiii
                </Modal>
            </Layout>
        </main>
    )
}

export default Carriculum;