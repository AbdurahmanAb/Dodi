import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//this is where we fetch the data all in one without axios
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dodi-mikyasmillion851.b4a.run/",
    /*
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },*/
  }),
  //used to invalidate the data automatically
  tagTypes: [
    "Employees",
    "DrillingContract",
    "TruckingContract",
    "MaintenanceCost",
  ],
  endpoints: (builder) => ({
    //every function here will have  is loading ,is errorr,is success etc...
    getEmployees: builder.query({
      query: () => "employees",
      providesTags: ["Employees"],
    }),
    addEmployees: builder.mutation({
      query: (employee) => ({
        url: "employees",
        method: "POST",
        body: employee,
      }),
      invalidatesTags: ["Employees"],
    }),
    updateEmployees: builder.mutation({
      query: (employee, id) => ({
        url: "employees",
        method: "PUT",
        body: employee,
        id,
      }),
      invalidatesTags: ["Employees"],
    }),

    deleteEmployees: builder.mutation({
      query: ({ id }) => ({
        url: `employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Employees"],
    }),
    getDrillingContract: builder.query({
      query: () => "drilling-contracts",
      providesTags: ["DrillingContract"],
    }),
    addDrillingContract: builder.mutation({
      query: (drillingContract) => ({
        url: "drilling-contracts/",
        method: "POST",
        body: drillingContract,
      }),
      invalidatesTags: ["DrillingContract"],
    }),
    updateDrillingContract: builder.mutation({
      query: (drillingContract, id) => ({
        url: "drilling-contracts",
        method: "PUT",
        body: drillingContract,
        id,
      }),
      invalidatesTags: ["DrillingContract"],
    }),

    deleteDrillingContract: builder.mutation({
      query: ({ id }) => ({
        url: `drilling-contracts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["DrillingContract"],
    }),

    getTruckingContract: builder.query({
      query: () => "trucking-contracts",
      providesTags: ["TruckingContract"],
    }),
    addTruckingContract: builder.mutation({
      query: (TruckingContract) => ({
        url: "trucking-contracts",
        method: "POST",
        body: TruckingContract,
      }),
      invalidatesTags: ["TruckingContract"],
    }),
    updateTruckingContract: builder.mutation({
      query: (TruckingContract, { id }) => ({
        url: `trucking-contracts/${id}`,
        method: "PUT",
        body: TruckingContract,
        id,
      }),
      invalidatesTags: ["TruckingContract"],
    }),

    deleteTruckingContract: builder.mutation({
      query: ({ id }) => ({
        url: `Trucking-contracts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TruckingContract"],
    }),

    getMaintenanceCost: builder.query({
      query: () => "maintenance-costs",
      providesTags: ["MaintenanceCost"],
    }),
    addMaintenanceCost: builder.mutation({
      query: (MaintenanceCost) => ({
        url: "maintenance-costs",
        method: "POST",
        body: MaintenanceCost,
      }),
      invalidatesTags: ["MaintenanceCost"],
    }),
    updateMaintenanceCost: builder.mutation({
      query: (MaintenanceCost, { id }) => ({
        url: `maintenance-costs/${id}`,
        method: "PUT",
        body: MaintenanceCost,
        id,
      }),
      invalidatesTags: ["MaintenanceCost"],
    }),

    deleteMaintenanceCost: builder.mutation({
      query: ({ id }) => ({
        url: `maintenance-costs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["MaintenanceCost"],
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useAddEmployeesMutation,
  useUpdateEmployeesMutation,
  useDeleteEmployeesMutation,
  useGetDrillingContractQuery,
  useAddDrillingContractMutation,
  useUpdateDrillingContractMutation,
  useDeleteDrillingContractMutation,
  useGetTruckingContractQuery,
  useAddTruckingContractMutation,
  useUpdateTruckingContractMutation,
  useDeleteTruckingContractMutation,
  useGetMaintenanceCostQuery,
  useAddMaintenanceCostMutation,
  useUpdateMaintenanceCostMutation,
  useDeleteMaintenanceCostMutation,
} = apiSlice;
