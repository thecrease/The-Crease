import React, { useEffect, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Input, Button } from 'antd';
import { ValidationRules } from '../../utils/validation';

const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
    lg: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
    lg: { span: 20 },
  },
};

const ContactUs = () => {
  const [form] = Form.useForm();
  // Validations
  const requiredInteger = [...ValidationRules.required];
  const emailValidate = [...ValidationRules.email];

  useEffect(() => {
    form.resetFields();
    //form.setFieldsValue(adModel);
  }, [form]);

  return (
    <Container style={{
      backgroundColor: '#282C2F', color: 'white', borderRadius: '10px'}}>
      <Row>
        <Col
          lg={12}
          md={12}
          style={{borderBottom: '2px solid white'}}
          className="d-flex justify-content-center p-2"
        >
          <h3 style={{ color: 'white' }}>Email us with any question or inquires</h3>
        </Col>
        <Col lg={12} md={12}>
          <Form {...formItemLayout} form={form} className="mt-2" style={{padding: '10px'}}>
            <Row>
              <Col lg={4} md={4} >
                <Form.Item  name="name" rules={requiredInteger} style={{color: 'white', width: '100%'}}>
                  <Input placeholder="Enter your name.." />
                </Form.Item>
                <Form.Item  name="email" rules={emailValidate} style={{color: 'white',  width: '100%'}}>
                  <Input placeholder="Enter your email.." />
                </Form.Item>
                <Form.Item  name="subject" rules={requiredInteger} style={{color: 'white',  width: '100%'}}>
                  <Input placeholder="Enter your subject.." />
                </Form.Item>
              </Col>
              <Col lg={6} md={6}>
                <Form.Item
                  name="message"
                  rules={useMemo(() => ValidationRules.maxLength(750, true), [])}
                >
                  <TextArea
                    placeholder="Enter Your Message"
                    autoSize={{ minRows: 6, maxRows: 6 }}
                  />
                </Form.Item>
              </Col>
              <Col lg={2} md={2}>
                <div className="d-flex justify-content-end align-items-end h-100">
                  <Button className="btn btn-success btn-md">Send Email</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
