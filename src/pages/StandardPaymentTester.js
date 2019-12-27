import Page from 'components/Page';
import api from '../services/api';
import JSONPretty from 'react-json-pretty';
import React, {Component} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

class StandardPaymentTester extends Component {

  constructor(props){
    super(props);
    this.state = {
      momoPubKey: null,
      partnerPubKey: null,
      partnerCode: null,
      checkInfoURL: null,
      paymentNotifyURL: null,
      reference1: '',
      amount: 0,
      checkInfoRequest: {
        requestId: Date.now()+'',
        reference1: '',
      },
      paymentNotifyRequest: {
        requestId: Date.now()+'',
        reference1: '',
        amount: 0,
        message:'success',
        paymentRef: Date.now()+'',
        dateInMillis: Date.now()+'',
      }
    };
  }

  handleInitDataFieldValueChange = event => {
    let fieldName = event.target.name;
    this.setState({
        [fieldName]: event.target.value });
  }

  generateRequest() {
    const checkReq = this.state.checkInfoRequest;
    checkReq.reference1 = this.state.reference1;
    this.setState({
      checkInfoRequest: checkReq,
    });

    const paymentReq = this.state.paymentNotifyRequest;
    paymentReq.reference1 = this.state.reference1+'';
    paymentReq.amount = this.state.amount;
    this.setState({
      paymentNotifyRequest: paymentReq,
    });
  }

  doCalCheckInfo() {
    console.log('alo 2');
  }

  doCalPaymentNotification() {
    console.log('alo 3');
  }

  render() {
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
                    <Input type="textarea" name="momoPubKey" onChange={this.handleInitDataFieldValueChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="partnerPublicKeyTextArea">Paste Your Public Key Here</Label>
                    <Input type="textarea" name="partnerPubKey" onChange={this.handleInitDataFieldValueChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Partner code</Label>
                    <Input
                      type="text"
                      name="partnerCode"
                      placeholder="This one is partner-code header provived by MoMo"
                      onChange={this.handleInitDataFieldValueChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="reference1">Reference 1</Label>
                    <Input
                      type="text"
                      name="reference1"
                      placeholder="This one is the reference key such as contract ID, bill ID, loan ID..."
                      onChange={this.handleInitDataFieldValueChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="reference1">Amount</Label>
                    <Input
                      type="text"
                      name="amount"
                      placeholder="This one is the amount which customer want to do repayment"
                      onChange={this.handleInitDataFieldValueChange}
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
                    <Input type="textarea" hidden name="checkInfoRequest" value={checkInfoRequestData}/>
                    <JSONPretty id="json-pretty" data={checkInfoRequestData}></JSONPretty>
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
                    <Input type="textarea" hidden name="paymentNotificationRequest" value={paymentNotifyRequestData}/>
                    <JSONPretty id="json-pretty" data={paymentNotifyRequestData}></JSONPretty>
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
