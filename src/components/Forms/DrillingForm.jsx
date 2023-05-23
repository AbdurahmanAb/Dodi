import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Multiselect } from "multiselect-react-dropdown";
import {
  useGetEmployeesQuery,
  useGetDrillingContractQuery,
  useAddDrillingContractMutation,
  useUpdateDrillingContractMutation,
  useDeleteDrillingContractMutation,
  //useAddTruckingContractMutation,
  //useDeleteTruckingContractMutation,
  //useGetTruckingContractQuery
} from "../../store/apiSlice";
import "./DrillingForm.scss";
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

  const {
    data: empData = [],
    isLoading,
    isSuccess: isempSuccess,
    // isError,
    // error,
  } = useGetEmployeesQuery();

  const [addDrilling, drillingResponse] = useAddDrillingContractMutation();
  const options = empData;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "cost",
  });

  const onSubmit = (data) => {
    addDrilling({
      contractReceivable: data.contractReceivable,
      site: data.site,
      employeeList: data.employee,
      cost: data.cost,
    });
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={{ marginRight: "18px" }}>
      {isempSuccess && (
        <>
          <FormGroup>
            <Label for="contractReceivable">Contract Receivable:</Label>
            <Controller
              render={({ field }) => (
                <Input {...field} type="number" placeholder="Number" />
              )}
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
          <FormGroup className="group" style={{ marginBottom: "0 !important" }}>
            <Label>Cost:</Label>
            {fields.map((field, index) => (
              <div key={field.id}>
                <Form>
                  <Label for={`cost.${index}.name`}>Name:</Label>
                  <Controller
                    render={({ field }) => <Input {...field} />}
                    name={`cost.${index}.name`}
                    control={control}
                  />
                  {errors.cost?.[index]?.name?.type === "required" && (
                    <span className="text-danger">This field is required</span>
                  )}
                </Form>

                <Form
                  className="group"
                  style={{ marginBottom: "0 !important" }}
                >
                  <Label for={`cost.${index}.amount`}>Amount:</Label>
                  <Controller
                    render={({ field }) => <Input {...field} />}
                    name={`cost.${index}.amount`}
                    control={control}
                  />
                  {errors.cost?.[index]?.amount?.type === "required" && (
                    <span className="text-danger">This field is required</span>
                  )}
                  {errors.cost?.[index]?.amount?.type === "min" && (
                    <span className="text-danger">
                      Amount must be greater than or equal to 0
                    </span>
                  )}
                </Form>
                <div style={{ marginTop: "5px" }} />
                {fields.length > 1 && (
                  <Button color="danger" onClick={() => remove(index)}>
                    Remove
                  </Button>
                )}
              </div>
            ))}

            <div style={{ marginTop: "5px" }} className="add">
              <Button
                color="primary"
                onClick={() => append({ name: "", amount: "" })}
                style={{ marginRight: "8px" }}
              >
                Add Cost
              </Button>
              <Button type="submit" color="success" className="px-5">
                Submit
              </Button>
            </div>
          </FormGroup>
          <div />
        </>
      )}
    </Form>
  );
};
