import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Multiselect } from "multiselect-react-dropdown";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";

export const DrillingForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      contractReceivable: 0,
      site: "",
      employee: [],
      cost: [{ name: "", amount: 0 }],
    },
  });


  const options= [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' },
    { id: 4, name: 'David Lee' },
    { id: 5, name: 'Emily Davis' },
  ];

  const { fields, append, remove } = useFieldArray({
    control,
    name: "cost",
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
                  <Controller
                    render={({ field }) => <Input {...field} type="number" />}
                    name="contractReceivable"
                    control={control}
                    rules={{ required: "this field is required" }}
                  />
                  {errors.contractReceivable && (
                    <span className="text-danger">This field is required</span>
                  )}
                </FormGroup>
                <div style={{ marginTop: "5px" }}></div>
                <FormGroup>
                  <Label for="site">Site:</Label>
                  <Controller
                    render={({ field }) => <Input {...field} />}
                    name="site"
                    control={control}
                    rules={{ required: "this field is required" }}
                  />
                  {errors.site && (
                    <span className="text-danger">This field is required</span>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label for="employee">employee:</Label>
                  <Controller
                    name="employee"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Multiselect
                        options={options}
                        selectedValues={value}
                        onSelect={onChange}
                        onRemove={onChange}
                        displayValue="name"
                        closeIcon="cancel"
                        placeholder="Select Options"
                        className="multiSelectContainer"
                      />
                    )}
                  />
                  {errors.employee && (
                    <span className="text-danger">This field is required</span>
                  )}
                </FormGroup>
                <div style={{ marginTop: "5px" }}></div>
                <FormGroup>
                  <Label>Cost:</Label>
                  {fields.map((field, index) => (
                    <div key={field.id}>
                      <FormGroup>
                        <Label for={`cost.${index}.name`}>Name:</Label>
                        <Controller
                          render={({ field }) => <Input {...field} />}
                          name={`cost.${index}.name`}
                          control={control}
                        />
                        {errors.cost?.[index]?.name?.type === "required" && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </FormGroup>

                      <FormGroup>
                        <Label for={`cost.${index}.amount`}>Amount:</Label>
                        <Controller
                          render={({ field }) => <Input {...field} />}
                          name={`cost.${index}.amount`}
                          control={control}
                        />
                        {errors.cost?.[index]?.amount?.type === "required" && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                        {errors.cost?.[index]?.amount?.type === "min" && (
                          <span className="text-danger">
                            Amount must be greater than or equal to 0
                          </span>
                        )}
                      </FormGroup>
                      <div style={{ marginTop: "5px" }} />
                      {fields.length > 1 && (
                        <Button color="danger" onClick={() => remove(index)}>
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}

                  <div style={{ marginTop: "5px" }} />
                  <Button
                    color="primary"
                    onClick={() => append({ name: "", amount: "" })}
                  >
                    Add
                  </Button>
                </FormGroup>
                <div style={{ marginTop: "5px" }} />
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
