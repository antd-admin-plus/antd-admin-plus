import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./index.less";

import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { saveUsername } from '../../store/reducers/loginSlice';

export default function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log("Success:", values);
    const { username, password } = values
    if (username === "admin" && password === "admin") {
      dispatch(saveUsername({ username }))
      navigate("/dashboard")
    } else {
      message.error('This is an error message');
    }
  };

  return (
    <div>
      <div className="login-content">
        <div className="font-bold mb-5">Antd Admin Plus</div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username: admin"
              autoComplete="off"
              allowClear
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              
              placeholder="Password: admin"
              />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
