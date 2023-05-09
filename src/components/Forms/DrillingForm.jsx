import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Container, Form, FormGroup, Label, Input, Button, Row, Col, Card, CardBody } from 'reactstrap';

export const DrillingForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      contractReceivable: '',
      site: '',
      employeeList: [],
      cost: [{ name: '', amount: '' }] // initialize cost with one empty object
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'cost'
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <Label for="contractReceivable">Contract Receivable:</Label>
                  <Input
                    type="number"
                    {...register('contractReceivable', { required: true })}
                  />
                  {errors.contractReceivable && <span className="text-danger">This field is required</span>}
                </FormGroup>

                <FormGroup>
                  <Label for="site">Site:</Label>
                  <Input
                    type="text"
                    {...register('site', { required: true })}
                  />
                  {errors.site && <span className="text-danger">This field is required</span>}
                </FormGroup>

                <FormGroup>
                  <Label>Cost:</Label>
                  {fields.map((field, index) => (
                    <div key={field.id}>
                      <FormGroup>
                        <Label for={`cost.${index}.name`}>Name:</Label>
                        <Input
                          type="text"
                          {...register(`cost.${index}.name`, { required: true })}
                        />
                        {errors.cost?.[index]?.name?.type === 'required' && <span className="text-danger">This field is required</span>}
                      </FormGroup>

                      <FormGroup>
                        <Label for={`cost.${index}.amount`}>Amount:</Label>
                        <Input
                          type="number"
                          {...register(`cost.${index}.amount`, { required: true, min: 0 })}
                        />
                        {errors.cost?.[index]?.amount?.type === 'required' && <span className="text-danger">This field is required</span>}
                        {errors.cost?.[index]?.amount?.type === 'min' && <span className="text-danger">Amount must be greater than or equal to 0</span>}
                      </FormGroup>

                      {fields.length > 1 && <Button color="danger" onClick={() => remove(index)}>Remove</Button>}
                    </div>
                  ))}

                  <Button color="primary" onClick={() => append({ name: '', amount: '' })}>Add</Button>
                </FormGroup>

                <Button type="submit" color="primary">Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

