import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button, Divider, List, Skeleton, Dropdown } from 'antd';
import { FolderFilled, MoreOutlined, DownloadOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';


const ListEl = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);

  const items = [
    {
        id:1,
        label:(
            <a className='flex gap-x-2 text-indigo-600'>
                <DownloadOutlined className='text-indigo-600 font-semibold' />
                Download
            </a>
        )
    },
    {
        id:2,
        label:(
            <a className='flex gap-x-2 text-blue-600'>
                <EditOutlined className='text-blue-600 font-semibold'/>
                Rename            
            </a>
        )
    },
    {
        id:3,
        label:(
            <a className='flex gap-x-2 text-rose-600'>
                <DeleteOutlined className='text-rose-600 font-semibold' />
                Rename            
            </a>
        )
    }
  ]

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
        backgroundColor:'white'
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<FolderFilled className='text-amber-600 text-xl' />}
                title={<a href="#" className='font-semibold'>{item.name.last}</a>}
                description={
                    <div className='flex gap-x-5'>
                        <label>Size: 880.54 mb</label>
                        <label>Last Modified: {new Date().toLocaleDateString()}</label>
                    </div>
                }
              />
              <div>
                <Dropdown menu={{items}} placement='bottomRight' arrow>
                    <Button 
                        icon={<MoreOutlined />}
                        size='large'
                        type='text'
                        shape='circle'
                        className='bg-gray-100'
                    />
                </Dropdown>
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default ListEl;