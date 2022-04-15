import React, {useState, useRef} from 'react';
import {Avatar, Card, Col, Divider, Input, Row, Tag} from 'antd';
import {Link} from 'react-router-dom';
import {PlusOutlined, HomeOutlined, ContactsOutlined, ClusterOutlined} from '@ant-design/icons';

import './style.less';

const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];

const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const currentUser = {
  name: 'Serati Ma',
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  userid: '00000001',
  email: 'antdesign@alipay.com',
  signature: '海纳百川，有容乃大',
  title: '交互专家',
  group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
  tags: [
    {
      key: '0',
      label: '很有想法的',
    },
    {
      key: '1',
      label: '专注设计',
    },
    {
      key: '2',
      label: '辣~',
    },
    {
      key: '3',
      label: '大长腿',
    },
    {
      key: '4',
      label: '川妹子',
    },
    {
      key: '5',
      label: '海纳百川',
    },
  ],
  notifyCount: 12,
  unreadCount: 11,
  country: 'China',
  // access: getAccess(),
  geographic: {
    province: {
      label: '浙江省',
      key: '330000',
    },
    city: {
      label: '杭州市',
      key: '330100',
    },
  },
  address: '西湖区工专路 77 号',
  phone: '0752-268888888',
  notice: [
    {
      id: 'xxx1',
      title: titles[0],
      logo: avatars[0],
      description: '那是一种内在的东西，他们到达不了，也无法触及的',
      updatedAt: new Date(),
      member: '科学搬砖组',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx2',
      title: titles[1],
      logo: avatars[1],
      description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
      updatedAt: new Date('2017-07-24'),
      member: '全组都是吴彦祖',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx3',
      title: titles[2],
      logo: avatars[2],
      description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
      updatedAt: new Date(),
      member: '中二少女团',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx4',
      title: titles[3],
      logo: avatars[3],
      description: '那时候我只会想自己想要什么，从不想自己拥有什么',
      updatedAt: new Date('2017-07-23'),
      member: '程序员日常',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx5',
      title: titles[4],
      logo: avatars[4],
      description: '凛冬将至',
      updatedAt: new Date('2017-07-23'),
      member: '高逼格设计天团',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx6',
      title: titles[5],
      logo: avatars[5],
      description: '生命就像一盒巧克力，结果往往出人意料',
      updatedAt: new Date('2017-07-23'),
      member: '骗你来学计算机',
      href: '',
      memberLink: '',
    },
  ],
};

const TagList = ({tags}) => {
  const ref = useRef(null);
  const [newTags, setNewTags] = useState([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const showInput = () => {
    setInputVisible(true);

    if (ref.current) {
      ref.current?.focus();
    }
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let tempsTags = [...newTags];

    if (inputValue && tempsTags.filter(tag => tag.label === inputValue).length === 0) {
      tempsTags = [
        ...tempsTags,
        {
          key: `new-${tempsTags.length}`,
          label: inputValue,
        },
      ];
    }

    setNewTags(tempsTags);
    setInputVisible(false);
    setInputValue('');
  };

  return (
    <div className="tags">
      <div className="tagsTitle">标签</div>
      {(tags || []).concat(newTags).map(item => (
        <Tag key={item.key}>{item.label}</Tag>
      ))}
      {inputVisible && (
        <Input
          ref={ref}
          type="text"
          size="small"
          style={{
            width: 78,
          }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag
          onClick={showInput}
          style={{
            borderStyle: 'dashed',
          }}>
          <PlusOutlined />
        </Tag>
      )}
    </div>
  );
};

const Center = () => {
  const renderUserInfo = ({title, group, geographic}) => {
    return (
      <div className="detail">
        <p>
          <ContactsOutlined
            style={{
              marginRight: 8,
            }}
          />
          {title}
        </p>
        <p>
          <ClusterOutlined
            style={{
              marginRight: 8,
            }}
          />
          {group}
        </p>
        <p>
          <HomeOutlined
            style={{
              marginRight: 8,
            }}
          />
          {
            (
              geographic || {
                province: {
                  label: '',
                },
              }
            ).province.label
          }
          {
            (
              geographic || {
                city: {
                  label: '',
                },
              }
            ).city.label
          }
        </p>
      </div>
    );
  };

  return (
    <Row gutter={24}>
      <Col lg={7} md={24}>
        <Card bordered={false}>
          <div>
            <div className="avatarHolder">
              <img alt="" src={currentUser.avatar} />
              <div className="name">{currentUser.name}</div>
              <div>{currentUser?.signature}</div>
            </div>
            {renderUserInfo(currentUser)}
            <Divider dashed />
            <TagList tags={currentUser.tags || []} />
            <Divider
              style={{
                marginTop: 16,
              }}
              dashed
            />
            <div className="team">
              <div className="teamTitle">团队</div>
              <Row gutter={36}>
                {currentUser.notice &&
                  currentUser.notice.map(item => (
                    <Col key={item.id} lg={24} xl={12}>
                      <Link to={item.href}>
                        <Avatar size="small" src={item.logo} />
                        {item.member}
                      </Link>
                    </Col>
                  ))}
              </Row>
            </div>
          </div>
        </Card>
      </Col>
      <Col lg={17} md={24}>
        content 
      </Col>
    </Row>
  );
};

export default Center;

// https://preview.pro.ant.design/account/center
