'use client'
import React, { useState, useEffect } from 'react';
import Layout from '@components/shared/layout';
import { Button, Modal, Table, Drawer, Collapse, theme } from 'antd';
import { PlusOutlined, MenuOutlined, EditFilled, DeleteFilled, CaretRightOutlined } from '@ant-design/icons';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import Link from 'next/link';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

    const Lesson = ()=>{
        const text = `
            A dog is a type of domesticated animal.
            Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
            `;
    const getItems = (panelStyle) => [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
        style: panelStyle,
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
        style: panelStyle,
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
        style: panelStyle,
    },
    ];
        const { token } = theme.useToken();
        const panelStyle = {
            marginBottom: 24,
            background: token.colorFillAlter,
            borderRadius: token.borderRadiusLG,
            border: '1px solid #f2f2f2',
        };
        return(
            <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{
              background: token.colorBgContainer,
            }}
            items={getItems(panelStyle)}
          />
        )
    }


        const Row = ({ children, ...props }) => {
        const {
        attributes,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition,
        isDragging,
        } = useSortable({
        id: props['data-row-key'],
        });
        const style = {
        ...props.style,
        transform: CSS.Transform.toString(
            transform && {
            ...transform,
            scaleY: 1,
            },
        ),
        transition,
        ...(isDragging
            ? {
                position: 'relative',
                zIndex: 9999,
            }
            : {}),
        };
        return (
        <tr {...props} ref={setNodeRef} style={style} {...attributes}>
            {React.Children.map(children, (child) => {
            if (child.key === 'sort') {
                return React.cloneElement(child, {
                children: (
                    <MenuOutlined
                    ref={setActivatorNodeRef}
                    style={{
                        touchAction: 'none',
                        cursor: 'move',
                    }}
                    {...listeners}
                    />
                ),
                });
            }
            return child;
            })}
        </tr>
        );
    };
    const Carriculum = ({title})=>{
    const [drawerState, setDrawerState] = useState({
        open: false,
        title: null
    });
    const [open, setOpen] = useState(false);
    const [dataSource, setDataSource] = useState([
        {
          key: '1',
          title: 'Load balancer in Nodejs',
          lesson: 32,
          lastModified: "12-11-2023"
            
        },
        {
            key: '2',
            title: 'Next js concept wiht Nodejs',
            lesson: 32,
            lastModified: "12-11-2023"
        },
        {
            key: '3',
            title: 'api integration with backend',
            lesson: 32,
            lastModified: "12-11-2023"
        },
      ]);
    const columns = [
        {
          key: 'sort',
        },
        {
          title: 'Topics',
          dataIndex: 'title',
          key: 'title',
          render: (text)=><a href='#' onClick={()=>setDrawerState(
            {
                ...drawerState, 
                open: true,
                title: text
            }
            )}>{text}</a>
        },
        {
          title: 'Lesson',
          dataIndex: 'lesson',
          key: 'lesson'
        },
        {
          title: 'Last Modified',
          dataIndex: 'lastModified',
          key: 'modified'
        },
        {
            key: 'action',
            render: ()=>(
                <div className='flex gap-x-4'>
                    <Button
                        icon={<EditFilled />}
                        className='flex justify-center items-center text-indigo-500 bg-indigo-50'
                        type='primary'
                    />
    
                    <Button
                        icon={<DeleteFilled />}
                        className='flex justify-center items-center text-rose-500 bg-rose-50'
                        type='primary'
                    />
                </div>
            )
        }
      ];
    const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
        setDataSource((previous) => {
        const activeIndex = previous.findIndex((i) => i.key === active.id);
        const overIndex = previous.findIndex((i) => i.key === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
        });
    }
    };

    return(
        <main>
            <Layout
                title={title.split("-").join(' ')}
                subtitle='Add or remove carriculumn and media files'
                toolbar={
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
                }
            >
             <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
                <SortableContext
                    // rowKey array
                    items={dataSource.map((i) => i.key)}
                    strategy={verticalListSortingStrategy}
                >
                    <Table
                    components={{
                        body: {
                        row: Row,
                        },
                    }}
                    rowKey="key"
                    columns={columns}
                    dataSource={dataSource}
                    />
                </SortableContext>
            </DndContext>    
            <Modal open={open} onCancel={()=>setOpen(!open)}>
                hiiiiiiiiiiiii
            </Modal>
            <Drawer 
                title={drawerState.title}
                placement="right" 
                onClose={()=>setDrawerState({...drawerState, open: false})}
                open={drawerState.open}
                width={1080}
                extra={<Button 
                    icon={<PlusOutlined />}
                    type='primary'
                    size='large'
                    className='bg-green-600 flex items-center' style={{borderRadius:0}}
                    >Add Lesson</Button>}
                >

                <Lesson /> 

            </Drawer>
            </Layout>
        </main>
    )
}

export default Carriculum;