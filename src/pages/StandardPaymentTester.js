import Page from 'components/Page';
import api from '../services/api';
import React, {Component} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

class StandardPaymentTester extends Component {

  constructor(props){
    super(props);
    this.state = {
      initData: {
        momoPubKey: null,
        partnerPubKey: null,
        partnerCode: null,
        checkInfoURL: null,
        paymentNotifyURL: null,
        reference1: null,
        amount: 0,
      },
      checkInfoRequest: {
        requestId: null,
        reference1: null,
      },
      paymentNotifyRequest: {
        requestId: null,
        reference1: null,
        amount: 0,
      }
    };
  }

  handleInitDataFieldValueChange = event => {
    let fieldName = event.target.name;
    this.setState({
       initData: {
        [fieldName]: event.target.value },
    });
  }

  generateRequest() {
    console.log('alo 1');
    console.log('MoMo Pub Key:' + this.state.initData.momoPubKey);
    console.log('Partner Pub Key:' + this.state.initData.partnerPubKey);
    console.log('Partner Code:' + this.state.initData.partnerCode);
    console.log('Reference 1:' + this.state.initData.reference1);
    console.log('Amount:' + this.state.initData.amount);

  }

  doCalCheckInfo() {
    console.log('alo 2');
  }

  doCalPaymentNotification() {
    console.log('alo 3');
  }

  render() {
    this.state.checkInfoRequest.requestId = Date.now();
    this.state.paymentNotifyRequest.requestId = Date.now();
    
    const checkInfoRequestData = JSON.stringify(this.state.checkInfoRequest);
    const paymentNotifyRequestData = JSON.stringify(this.state.paymentNotifyRequest);
    return (
      <Page title="Sandbox Testing" breadcrumbs={[{ name: 'Forms', active: true }]}>
        <Row>
          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>Settings</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="momoPublicKeyTextArea">MOMO Public Key Here</Label>
                    <Input type="textarea" name="momoPubKey" onChange={this.handleFieldValueChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="partnerPublicKeyTextArea">Paste Your Public Key Here</Label>
                    <Input type="textarea" name="partnerPubKey" onChange={this.handleFieldValueChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Partner code</Label>
                    <Input
                      type="text"
                      name="partnerCode"
                      placeholder="This one is partner-code header provived by MoMo"
                      onChange={this.handleFieldValueChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="reference1">Reference 1</Label>
                    <Input
                      type="text"
                      name="reference1"
                      placeholder="This one is the reference key such as contract ID, bill ID, loan ID..."
                      onChange={this.handleFieldValueChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="reference1">Amount</Label>
                    <Input
                      type="text"
                      name="amount"
                      placeholder="This one is the amount which customer want to do repayment"
                      onChange={this.handleFieldValueChange}
                    />
                  </FormGroup>
                  <FormGroup check row>
                      <Button onClick={event=>this.generateRequest()}>Submit</Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>Check Info</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="checkInfoRequest"></Label>
                    <Input type="textarea" name="checkInfoRequest" value={checkInfoRequestData}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="checkInfoUrl">Check Info URL</Label>
                    <Input
                      type="text"
                      name="checkInfoURL"
                      placeholder="Check Info endpoint"
                    />
                  </FormGroup>
                  <FormGroup check row>
                      <Button onClick={event=>this.doCalCheckInfo()}>CHECK INFO</Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Payment Notification</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="paymentNotificationRequest"></Label>
                    <Input type="textarea" name="paymentNotificationRequest" value={paymentNotifyRequestData}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="paymentNotificationUrl">Payment Nofication URL</Label>
                    <Input
                      type="text"
                      name="paymentNotificationURL"
                      placeholder="Payment Notification endpoint"
                    />
                  </FormGroup>
                  <FormGroup check row>
                    <Button onClick={event=>this.doCalPaymentNotification()}>PAYMENT NOTIFICATION</Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>

          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>logs</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup check row>
                      <Button>Clear</Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  };
}

export default StandardPaymentTester;
